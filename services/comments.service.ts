import { fetchWrapper } from "utils";

const END_POINT = "/comments";

async function getSearch(queryObj?: { active?: String }) {
  return fetchWrapper.get(`${END_POINT}/search`, queryObj);
}

async function postComment(propObj: { content: String; objectId: String }) {
  return fetchWrapper.post(`${END_POINT}`, propObj);
}

export const commentsService = {
  getSearch,
  postComment,
};
