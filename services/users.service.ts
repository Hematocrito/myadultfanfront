import { fetchWrapper } from "utils";

const END_POINT = "/users";

async function getMe() {
  return fetchWrapper.get(`${END_POINT}/me`);
}

async function getMyFavouriteVideos(query?: { limit?: Number; offset?: Number }) {
  return fetchWrapper.get(`/reactions/videos/favourites`, query);
}

async function getMyWishlistVideos(query?: { limit?: Number; offset?: Number }) {
  return fetchWrapper.get(`/reactions/videos/watch-later`, query);
}

async function putUpdatePassword(propObj?: { password: String }) {
  return fetchWrapper.put(`/auth/users/me/password`, propObj);
}

async function putUpdateProfile(propObj?: {
  email?: String;
  firstName?: String;
  gender?: String;
  lastName?: String;
  username?: String;
}) {
  return fetchWrapper.put(`${END_POINT}`, propObj);
}

export const usersService = {
  getMe,
  getMyFavouriteVideos,
  getMyWishlistVideos,
  putUpdatePassword,
  putUpdateProfile,
};
