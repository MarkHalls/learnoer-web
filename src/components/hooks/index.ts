import { useLocation } from "react-router-dom";

export const useSearchTerm = () => {
  return new URLSearchParams(useLocation().search).get("search") ?? "";
};
