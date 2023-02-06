import { BASE_URL } from "../constants.js";

export const apiFetch = async function (
  endpoint,
  method = "GET",
  headers,
  body
) {

  console.log(endpoint)

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }

  if (response.status === 204) return {};
  const dataRes = await response.json();
  console.log(dataRes)
};
