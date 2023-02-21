import { apiFetch } from "./api_fetcher";

export const Phase1Fetcher = (function () {
  return {
    getPhase: () => apiFetch("/phase1", "GET"),
    getQuestion: () => apiFetch("/phase1/question", "GET"),
  };
})();
