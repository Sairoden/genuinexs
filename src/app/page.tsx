"use client";

// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import {
  JobHeader,
  AddCandidateModal,
  ConfirmDialog,
  FilterModal,
  CandidateList,
  Navbar,
} from "@/components";

// TYPES
import type { Candidate } from "@/types";

// DATA
import { dummyCandidates } from "@/data";

// UTILS
import { applyFilters } from "@/utils";

const CandidatesInterface = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>(dummyCandidates);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [candidateToEdit, setCandidateToEdit] = useState<Candidate | null>(
    null
  );
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [candidateToRemove, setCandidateToRemove] = useState<Candidate | null>(
    null
  );
  const [filters, setFilters] = useState({
    name: "none",
    location: "all",
    experience: "none",
    dateApplied: "none",
    roleFit: "all",
  });

  const locations = ["all", ...new Set(candidates.map(c => c.location))];
  const roleFits = ["all", ...new Set(candidates.map(c => c.roleFit))];

  // USE EFFECT
  useEffect(() => {
    let filtered = [...candidates];

    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(candidate => {
        const nameMatch = candidate.name.toLowerCase().includes(query);
        const locationMatch = candidate.location.toLowerCase().includes(query);
        const experienceMatch = candidate.experience
          .toString()
          .toLowerCase()
          .includes(query);
        const roleFitMatch = candidate.roleFit.toLowerCase().includes(query);
        const dateMatch = candidate.dateApplied.toLowerCase().includes(query);
        return (
          nameMatch ||
          locationMatch ||
          experienceMatch ||
          roleFitMatch ||
          dateMatch
        );
      });
    }

    filtered = applyFilters(filtered, filters);
    setFilteredCandidates(filtered);
  }, [searchQuery, filters, candidates]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDropdownId !== null &&
        !(event.target as Element).closest(".relative")
      ) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdownId]);

  // FUNCTIONS
  const handleAddCandidate = (newCandidate: Omit<Candidate, "id">) => {
    const newId = Math.max(...candidates.map(c => c.id)) + 1;
    setCandidates([...candidates, { ...newCandidate, id: newId }]);
  };

  const handleUpdateCandidate = (
    id: number,
    updatedCandidate: Omit<Candidate, "id">
  ) => {
    setCandidates(
      candidates.map(c => (c.id === id ? { ...updatedCandidate, id } : c))
    );
  };

  const handleRemoveCandidate = (id: number) => {
    setCandidates(candidates.filter(c => c.id !== id));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenEditModal = (candidate: Candidate) => {
    setCandidateToEdit(candidate);
    setIsModalOpen(true);
  };

  const handleOpenRemoveConfirmDialog = (candidate: Candidate) => {
    setCandidateToRemove(candidate);
    setIsConfirmDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onModalOpen={handleModalOpen} />

      <JobHeader />

      <CandidateList
        showFilters={showFilters}
        searchQuery={searchQuery}
        onShowFilters={handleShowFilters}
        onSearchQuery={handleSearchQuery}
        numberOfApplicants={candidates.length}
        candidates={filteredCandidates}
        onOpenEditModal={handleOpenEditModal}
        onOpenRemoveConfirmDialog={handleOpenRemoveConfirmDialog}
      />

      <FilterModal
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        roleFits={roleFits}
      />

      <AddCandidateModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCandidateToEdit(null);
        }}
        onAddCandidate={handleAddCandidate}
        onUpdateCandidate={handleUpdateCandidate}
        candidateToEdit={candidateToEdit}
      />

      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={() => {
          if (candidateToRemove) {
            handleRemoveCandidate(candidateToRemove.id);
          }
          setIsConfirmDialogOpen(false);
          setCandidateToRemove(null);
        }}
        title="Remove Candidate"
        message={`Are you sure you want to remove ${candidateToRemove?.name}?`}
      />
    </div>
  );
};

export default CandidatesInterface;
