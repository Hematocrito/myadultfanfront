import { fetchWrapper } from "utils";

const END_POINT = "/banners";

async function getSearch(queryObj?: { active?: String }) {
  return fetchWrapper.get(`${END_POINT}/search`, queryObj);
}

export const bannersService = {
  getSearch,
};
