import { fetchWrapper } from "utils";

const END_POINT = "/user/performer-assets/videos";

async function getDetailsView(videoId: String) {
  return fetchWrapper.get(
    `${END_POINT}/${videoId}/view` /* Without "view" I think work too */
  );
}
async function postReaction(propObj: {
  action: "favourite" | "like" | "watch_later";
  objectId: String;
  objectType: String;
}) {
  return fetchWrapper.post(`/reactions`, propObj);
}

async function getListVideos(query?: {
  limit?: Number;
  offset?: Number;
  performerId?: String;
  isSaleVideo?: Boolean;
  sort?: String;
  sortBy?: String;
}) {
  return fetchWrapper.get(`${END_POINT}/search`, query);
}

// Performer managment/Videos

async function deleteVideo(videoId: String) {
  return fetchWrapper.delete(`${END_POINT}/${videoId}`);
}
async function getDetails(videoId: String) {
  return fetchWrapper.get(`${END_POINT}/${videoId}`);
}

async function putEdit(
  videoId: String,
  propObj: {
    description?: String;
    isSaleVideo?: Boolean;
    isSchedule?: Boolean;
    participantIds?: Array<String>;
    price?: Number;
    scheduledAt?: Date;
    status?: String;
    tags?: Array<String>;
    title?: String;
  }
) {
  return fetchWrapper.put(`${END_POINT}/${videoId}`, propObj);
}

async function postCreate(propObj: {
  title: String;
  price: Number;
  description: String;
  isSaleVideo: Boolean;
  isSchedule: Boolean;
  status: String;
  video: File;
}) {
  return fetchWrapper.post(`${END_POINT}/upload`, propObj);
}

export const videosService = {
  getDetails,
  getListVideos,
  postReaction,
  getDetailsView,
  deleteVideo,
  putEdit,
  postCreate,
};
