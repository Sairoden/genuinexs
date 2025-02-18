"use client";

// REACT
import { useState } from "react";

// STYLES
import { FiMoreVertical, FiEdit, FiTrash2 } from "react-icons/fi";

// TYPES
import type { Candidate } from "@/types";

interface CandidateListItemProps {
  candidate: Candidate;
  onOpenEditModal: (candidate: Candidate) => void;
  onOpenRemoveConfirmDialog: (candidate: Candidate) => void;
}

export default function CandidateListItem({
  candidate,
  onOpenEditModal,
  onOpenRemoveConfirmDialog,
}: CandidateListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getRoleFitColor = (fit: string) => {
    switch (fit.toLowerCase()) {
      case "high":
        return "bg-orange-100 text-orange-600";

      case "medium":
        return "bg-blue-100 text-blue-600";

      case "low":
        return "bg-yellow-100 text-yellow-600";

      case "very low":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="grid grid-cols-6 gap-4 py-4 px-4 border-t items-center text-sm">
      <div className="col-span-1 flex items-center space-x-3">
        <input type="checkbox" className="rounded" />

        <div>
          <div className="font-medium">{candidate.name}</div>
          <div className="text-gray-500 text-xs">{candidate.status}</div>
        </div>
      </div>

      <div className="col-span-1">{candidate.location}</div>
      <div className="col-span-1">{candidate.experience} years</div>
      <div className="col-span-1">{candidate.dateApplied}</div>

      <div className="col-span-1">
        <span
          className={`px-6 py-1 rounded-md text-xs ${getRoleFitColor(
            candidate.roleFit
          )}`}
        >
          {candidate.roleFit}
        </span>
      </div>

      <div className="col-span-1 text-right">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-lg"
              id={`options-menu-${candidate.id}`}
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMoreVertical className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby={`options-menu-${candidate.id}`}
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => onOpenEditModal(candidate)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  role="menuitem"
                >
                  <FiEdit
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Edit
                </button>

                <button
                  onClick={() => onOpenRemoveConfirmDialog(candidate)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  role="menuitem"
                >
                  <FiTrash2
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
