import { apiFetch } from "./api_fetcher.jsx";

export const UsersFetcher = (function () {
  return {
    login: (data) =>
      apiFetch(
        "/auth/login",
        "POST",
        { "Content-Type": "application/json", Accept: "application/json" },
        data
      ),
    all: () =>
      apiFetch(
        "/auth",
        "GET",
        { "Content-Type": "application/json" }
      ),
    delete: (id) =>
      apiFetch(
        `/auth/${id}`,
        "DELETE",
        { "Content-Type": "application/json" }
      ),
    post: (body) =>
        apiFetch(
          "/auth/signup",
          "POST",
          { "Content-Type": "application/json", Accept: "application/json" },
          body
        ),
    update: (data) =>
      apiFetch(
        `/auth/update/${data.uid}`,
        "PUT",
        { "Content-Type": "application/json", Accept: "application/json" },
        {
          name: data.name,
          email: data.email,
          password: data.password,
          status: data.status
        }

      )
  };
})();
