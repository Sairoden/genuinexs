"use client";

// REACT
import { useState, useEffect } from "react";

// STYLES
import { FiX } from "react-icons/fi";

interface Candidate {
  id?: number;
  name: string;
  location: string;
  experience: number;
  dateApplied: string;
  roleFit: string;
  status: string;
}

interface AddCandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCandidate: (candidate: Candidate) => void;
  onUpdateCandidate: (id: number, candidate: Candidate) => void;
  candidateToEdit: Candidate | null;
}

export default function AddCandidateModal({
  isOpen,
  onClose,
  onAddCandidate,
  onUpdateCandidate,
  candidateToEdit,
}: AddCandidateModalProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState(0);
  const [dateApplied, setDateApplied] = useState("");
  const [roleFit, setRoleFit] = useState("");

  useEffect(() => {
    if (candidateToEdit) {
      setName(candidateToEdit.name);
      setLocation(candidateToEdit.location);
      setExperience(candidateToEdit.experience);
      setDateApplied(candidateToEdit.dateApplied);
      setRoleFit(candidateToEdit.roleFit);
    } else {
      setName("");
      setLocation("");
      setExperience(0);
      setDateApplied("");
      setRoleFit("");
    }
  }, [candidateToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const candidateData = {
      name,
      location,
      experience,
      dateApplied,
      roleFit,
      status: "In progress",
    };

    if (candidateToEdit) onUpdateCandidate(candidateToEdit.id!, candidateData);
    else onAddCandidate(candidateData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {candidateToEdit ? "Edit Candidate" : "Add New Candidate"}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Experience (years)
            </label>
            <input
              type="number"
              id="experience"
              value={experience}
              onChange={e => setExperience(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              min="0"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="dateApplied"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date Applied
            </label>
            <input
              type="date"
              id="dateApplied"
              value={dateApplied}
              onChange={e => setDateApplied(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="roleFit"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role Fit
            </label>
            <select
              id="roleFit"
              value={roleFit}
              onChange={e => setRoleFit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select Role Fit</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              <option value="Very Low">Very Low</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {candidateToEdit ? "Update" : "Add"} Candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
