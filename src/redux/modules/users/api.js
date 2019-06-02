import axios from "axios";

export function apiFetchUsers(params = {}) {
  const { page = 1 } = params;

  return axios.get("https://randomuser.me/api", {
    params: {
      results: 10,
      page
    }
  });
}
