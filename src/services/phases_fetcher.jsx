import { apiFetch } from "./api_fetcher";

const PhaseOneFetcher = (() => {
  return {
    asdasd: () => {
      apiFetch("/phase1", "GET", { "Content-Type": "application/json" });
    },
  };
})();

export default PhaseOneFetcher;
