"use client";

// COMPONENTS
import {
  CandidateHeader,
  CandidateListItem,
  CandidateListItemHeaders,
} from "@/components";

// TYPES
import { Candidate } from "@/types";

interface CandidateListProps {
  numberOfApplicants: number;
  onShowFilters: () => void;
  onSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  showFilters: boolean;
  candidates: Candidate[];
  onOpenEditModal: (candidate: Candidate) => void;
  onOpenRemoveConfirmDialog: (candidate: Candidate) => void;
}

export default function CandidateList({
  numberOfApplicants,
  onShowFilters,
  onSearchQuery,
  searchQuery,
  showFilters,
  candidates,
  onOpenEditModal,
  onOpenRemoveConfirmDialog,
}: CandidateListProps) {
  return (
    <div className="px-3 sm:px-6 py-4 sm:py-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-3 sm:p-6">
          <CandidateHeader
            showFilters={showFilters}
            searchQuery={searchQuery}
            onShowFilters={onShowFilters}
            onSearchQuery={onSearchQuery}
            numberOfApplicants={numberOfApplicants}
          />

          <CandidateListItemHeaders />

          <div className="space-y-2">
            {candidates.length > 0 ? (
              candidates.map((candidate: Candidate) => (
                <CandidateListItem
                  key={candidate.id}
                  candidate={candidate}
                  onOpenEditModal={onOpenEditModal}
                  onOpenRemoveConfirmDialog={onOpenRemoveConfirmDialog}
                />
              ))
            ) : (
              <div className="py-8 text-center text-gray-500 text-sm sm:text-base">
                No candidates found matching your search criteria
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
