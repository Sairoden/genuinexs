"use client";

// REACT
import { useState } from "react";

// STYLES
import { FiX } from "react-icons/fi";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    name: string;
    location: string;
    experience: string;
    dateApplied: string;
    roleFit: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      name: string;
      location: string;
      experience: string;
      dateApplied: string;
      roleFit: string;
    }>
  >;
  locations: string[];
  roleFits: string[];
}

export default function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
  locations,
  roleFits,
}: FilterModalProps) {
  const [tempFilters, setTempFilters] = useState(filters);

  if (!isOpen) return null;

  const handleResetFilters = () => {
    setTempFilters({
      name: "none",
      location: "all",
      experience: "none",
      dateApplied: "none",
      roleFit: "all",
    });
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Filter Candidates</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <select
              id="name"
              value={tempFilters.name}
              onChange={e =>
                setTempFilters({ ...tempFilters, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="none">None</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <select
              id="location"
              value={tempFilters.location}
              onChange={e =>
                setTempFilters({ ...tempFilters, location: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Experience
            </label>
            <select
              id="experience"
              value={tempFilters.experience}
              onChange={e =>
                setTempFilters({ ...tempFilters, experience: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="none">None</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="dateApplied"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date Applied
            </label>
            <select
              id="dateApplied"
              value={tempFilters.dateApplied}
              onChange={e =>
                setTempFilters({ ...tempFilters, dateApplied: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="none">None</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
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
              value={tempFilters.roleFit}
              onChange={e =>
                setTempFilters({ ...tempFilters, roleFit: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {roleFits.map(roleFit => (
                <option key={roleFit} value={roleFit}>
                  {roleFit}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reset Filters
            </button>

            <div>
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleApplyFilters}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
