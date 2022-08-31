import { fetchWrapper } from "utils";

const END_POINT = "/feeds";

async function postAddFeed(propObj: {
  type: String;
  text: String;
  fileIds?: Array<String>;
}) {
  return fetchWrapper.post(`${END_POINT}`, propObj);
}

async function getMyFeeds() {
  return fetchWrapper.get(`${END_POINT}/performers`);
}

async function getPerformerFeeds(performerId: String) {
  return fetchWrapper.get(`${END_POINT}/performers/${performerId}`);
}

async function postUploadImage(propObj: { file: File }) {
  return fetchWrapper.post(`${END_POINT}/performers/photo/upload`, propObj);
}

async function postUploadVideo(propObj: { file: File }) {
  return fetchWrapper.post(`${END_POINT}/performers/video/upload`, propObj);
}

export const feedsService = {
  postAddFeed,
  getMyFeeds,
  getPerformerFeeds,
  postUploadImage,
  postUploadVideo,
};
