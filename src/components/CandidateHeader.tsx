"use client";

// STYLES
import { FiSearch, FiFilter } from "react-icons/fi";

interface CandidateHeaderProps {
  numberOfApplicants: number;
  onShowFilters: () => void;
  onSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  showFilters: boolean;
}

export default function CandidateHeader({
  numberOfApplicants,
  onShowFilters,
  onSearchQuery,
  searchQuery,
  showFilters,
}: CandidateHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
      <div className="flex flex-wrap gap-4 text-sm sm:text-base">
        <span className="font-medium whitespace-nowrap">
          All Applicants ({numberOfApplicants})
        </span>

        <span className="text-gray-500 whitespace-nowrap">Shortlisted (2)</span>

        <span className="text-gray-500 whitespace-nowrap">
          Interview Results (1)
        </span>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="relative flex-1 sm:flex-none">
          <FiSearch className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={searchQuery}
            onChange={onSearchQuery}
            placeholder="Search candidates..."
            className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>

        <button
          onClick={onShowFilters}
          className={`p-2 rounded-lg ${
            showFilters ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
          }`}
        >
          <FiFilter className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
