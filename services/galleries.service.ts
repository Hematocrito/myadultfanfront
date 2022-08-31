import { fetchWrapper } from "utils";

const END_POINT = "/user/performer-assets/galleries";

async function getListGalleries(query?: {
  limit?: Number;
  performerId?: String;
}) {
  return fetchWrapper.get(`${END_POINT}/search`, query);
}

async function postCreateNew(propObj?: {
  description: String;
  name: String;
  status: String;
}) {
  return fetchWrapper.post(`${END_POINT}`, propObj);
}

async function deleteGallery(galleryId: String) {
  return fetchWrapper.delete(`${END_POINT}/${galleryId}`);
}

async function getDetails(galleryId: String) {
  return fetchWrapper.get(`${END_POINT}/${galleryId}/view`);
}

async function putEdit(
  galleryId: String,
  propObj?: {
    description?: String;
    name?: String;
    status?: String;
  }
) {
  return fetchWrapper.put(`${END_POINT}/${galleryId}`, propObj);
}

export const galleriesService = {
  getListGalleries,
  postCreateNew,
  deleteGallery,
  getDetails,
  putEdit,
};
