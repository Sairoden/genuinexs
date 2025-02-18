"use client";

// REACT
import { useState } from "react";

// STYLES
import { FiBell, FiMail, FiPlus, FiMenu } from "react-icons/fi";

export default function Navbar({ onModalOpen }: { onModalOpen: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 sm:px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
          <span>Item 4</span>
          <span>Item 5</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onModalOpen}
            className="hover:text-gray-300 transition-colors"
          >
            <FiPlus className="w-5 h-5" />
          </button>

          <button className="hidden sm:block hover:text-gray-300 transition-colors">
            <FiMail className="w-5 h-5" />
          </button>

          <button className="hidden sm:block hover:text-gray-300 transition-colors">
            <FiBell className="w-5 h-5" />
          </button>

          <div className="w-8 h-8 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-3">
          <div className="flex flex-col space-y-3">
            <span className="px-2 py-1 hover:bg-gray-700 rounded">Item 1</span>
            <span className="px-2 py-1 hover:bg-gray-700 rounded">Item 2</span>
            <span className="px-2 py-1 hover:bg-gray-700 rounded">Item 3</span>
            <span className="px-2 py-1 hover:bg-gray-700 rounded">Item 4</span>
            <span className="px-2 py-1 hover:bg-gray-700 rounded">Item 5</span>
          </div>
          {/* Mobile-only icons */}
          <div className="sm:hidden flex space-x-4 px-2 pt-3 border-t border-gray-700">
            <FiMail className="w-5 h-5" />
            <FiBell className="w-5 h-5" />
          </div>
        </div>
      )}
    </nav>
  );
}
