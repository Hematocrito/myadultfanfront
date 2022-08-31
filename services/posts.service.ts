import { fetchWrapper } from "utils";

const END_POINT = "/posts";

async function getDetails(slug: String) {
  return fetchWrapper.get(`${END_POINT}/${slug}`);
}

export const postsService = {
  getDetails,
};
