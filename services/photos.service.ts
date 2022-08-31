import { fetchWrapper } from "utils";

const END_POINT = "/user/performer-assets";
const END_POINT_PHOTOS = "/performer/performer-assets/photos";

async function getPerformerList(
  performerId: String,
  query?: {
    galleryId?: String;
  }
) {
  return fetchWrapper.get(`${END_POINT}/${performerId}/photos`, query);
}

// Performer managment/Photos

async function deletePhoto(photoId: String) {
  return fetchWrapper.delete(`${END_POINT_PHOTOS}/${photoId}`);
}

async function getListPhotos(query?: { galleryId?: String }) {
  return fetchWrapper.get(`${END_POINT_PHOTOS}/search`, query);
}

async function postUploadPhoto(propObj: {
  galleryId: String;
  status: String;
  photo: File;
}) {
  return fetchWrapper.post(`${END_POINT_PHOTOS}/upload`, propObj);
}

export const photosService = {
  getPerformerList,
  deletePhoto,
  getListPhotos,
  postUploadPhoto,
};
