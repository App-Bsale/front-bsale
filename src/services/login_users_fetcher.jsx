import { apiFetch } from "./api_fetcher.jsx";

export const LoginUsersFetcher = (function () {
  return {
    login: (data) =>
      apiFetch(
        "/auth/login",
        "POST",
        { "Content-Type": "application/json", Accept: "application/json" },
        data
      ),
  };
})();
