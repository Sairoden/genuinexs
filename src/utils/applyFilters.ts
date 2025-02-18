// TYPES
import type { Candidate } from "@/types";

const applyFilters = (
  candidates: Candidate[],
  filters: {
    name: string;
    location: string;
    experience: string;
    dateApplied: string;
    roleFit: string;
  }
) => {
  let result = [...candidates];

  if (filters.name !== "none")
    result.sort((a, b) => {
      return filters.name === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  if (filters.location !== "all")
    result = result.filter(c => c.location === filters.location);

  if (filters.experience !== "none")
    result.sort((a, b) => {
      return filters.experience === "asc"
        ? a.experience - b.experience
        : b.experience - a.experience;
    });

  if (filters.dateApplied !== "none")
    result.sort((a, b) => {
      const dateA = new Date(a.dateApplied);
      const dateB = new Date(b.dateApplied);
      return filters.dateApplied === "latest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  if (filters.roleFit !== "all")
    result = result.filter(c => c.roleFit === filters.roleFit);

  return result;
};

export default applyFilters;
