import { apiFetch } from "./api_fetcher.js";

export const LoginUsersFetcher = (function () {
  return {
    login: function (data) {
      const args = {
        endpoint: "/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      };
      return apiFetch(args);
    },
  };
})();
