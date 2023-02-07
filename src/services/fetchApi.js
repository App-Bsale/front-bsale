export const URL = "https://backend-bsale-production.up.railway.app";

export const getApi = async (endpoint) => {
  console.log(`${URL}/${endpoint}`);
  const response = await fetch(`${URL}/${endpoint}`);
  const dataResponse = await response.json();
  return dataResponse;
};

export const postApi = async (endpoint, data) => {
  const response = await fetch(`${URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataResponse = await response.json();
  return dataResponse;
};

export const putApi = async (endpoint, data) => {
  const response = await fetch(`${URL}/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataResponse = await response.json();
  return dataResponse;
};

export const deleteApi = async (endpoint, data) => {
  const response = await fetch(`${URL}/${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataResponse = await response.json();
  return dataResponse;
};
