import { apiFetch } from "./api_fetcher";

const AdminFetcher = (() => {
  return {
    login: (data) =>
      apiFetch(
        "/auth/admin/login",
        "POST",
        { "Content-Type": "application/json", Accept: "application/json" },
        data
      ),

  };
})();

export default AdminFetcher;
