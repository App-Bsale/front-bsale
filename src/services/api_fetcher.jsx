// import { createGlobalStyle } from "styled-components";
import { BASE_URL } from "../constants";



export const apiFetch = async function (
  endpoint,
  method = "GET",
  headers,
  body
) {

  console.log(endpoint, method, headers, body)

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });


  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }

  if (response.status === 204) return {};
  const devolution  = await response.json();
  // console.log(devolution)
  return devolution
};
