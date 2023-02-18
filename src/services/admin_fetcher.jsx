import { apiFetch } from "./api_fetcher";

const AdminFetcher = (() => {
  return {
    login: (data) =>
      apiFetch(
        "/admin/login",
        "POST",
        { "Content-Type": "application/json", Accept: "application/json" },
        data
      ),

  };
})();

export default AdminFetcher;
