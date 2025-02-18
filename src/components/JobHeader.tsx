"use client";

// NEXT
import Image from "next/image";

// STYLES
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function JobHeader() {
  return (
    <>
      <div className="flex flex-col -space-y-10">
        <div className="px-6 py-6">
          <button className="flex items-center text-gray-600 hover:text-gray-800 text-2xl">
            <MdOutlineKeyboardArrowLeft className="w-8 h-8 mr-2" />
            Back to Job List
          </button>
        </div>

        <div className="px-6 -space-y">
          <div className="flex flex-col -space-y-8">
            <div className="mb-1">
              <Image
                src="/meta-logo.png"
                width={150}
                height={150}
                alt="Meta logo"
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Cybersecurity Engineer
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 border-b">
        <div className="flex space-x-8 font-bold">
          <button
            className="py-4 text-gray-500 cursor-default"
            aria-disabled="true"
          >
            Job Description
          </button>

          <button className="py-4 border-b-2 border-gray-800">
            Candidates
          </button>
        </div>
      </div>
    </>
  );
}
