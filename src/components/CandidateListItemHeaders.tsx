"use client";

export default function CandidateListItemHeaders() {
  return (
    <div className="hidden md:grid md:grid-cols-6 gap-4 py-3 px-4 bg-[#E1E1E1] rounded-t-lg text-sm font-bold text-[#2A3447] mt-2">
      <div className="col-span-1">Name</div>
      <div className="col-span-1">Location</div>
      <div className="col-span-1">Experience</div>
      <div className="col-span-1">Date Applied</div>
      <div className="col-span-1">Role Fit</div>
      <div className="col-span-1"></div>
    </div>
  );
}
