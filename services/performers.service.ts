import { fetchWrapper } from "utils";

const END_POINT = "/performers";

async function putBlockCountries(propObj: {
  countries: Array<String>;
  performerId: String;
}) {
  return fetchWrapper.put(
    `${END_POINT}/${propObj.performerId}/block-countries-settings`,
    propObj
  );
}

async function getDetails(performer_username: String) {
  return fetchWrapper.get(`${END_POINT}/${performer_username}`);
}

async function getTop(queryObj?: { offset?: Number; limit?: Number }) {
  return fetchWrapper.get(`${END_POINT}/top`, queryObj);
}

async function postIncreaseView(performer_username: String) {
  return fetchWrapper.post(`${END_POINT}/${performer_username}/inc-view`, {});
}

async function getSearch(queryObj?: {
  offset?: Number;
  limit?: Number;
  active?: String;
}) {
  return fetchWrapper.get(`${END_POINT}/search`, queryObj);
}

// Performer managment/Earnings

async function getEaringList(query?: {
  limit?: Number;
  offset: Number;
  sort?: String;
  sortBy?: String;
  sourceType?: any;
}) {
  return fetchWrapper.get(`/earning/performer/search`, query);
}

async function getEaringStat(query?: { sourceType?: any }) {
  return fetchWrapper.get(`/earning/performer/stats`, query);
}

// Performer managment/My Subscribers

async function postBlockUser(propObj: { userId: String }) {
  return fetchWrapper.post(`${END_POINT}/performers/blocked-users`, propObj);
}

async function deleteUnblockUser(userId: String) {
  return fetchWrapper.delete(`${END_POINT}/performers/blocked-users/${userId}`);
}

async function getListMySubscribers(query?: {
  limit?: Number;
  offset: Number;
  sort?: String;
  sortBy?: String;
}) {
  return fetchWrapper.get(`/subscriptions/performer/search`, query);
}

export const performersService = {
  putBlockCountries,
  getDetails,
  getTop,
  postIncreaseView,
  getSearch,
  /* Earnings methods */
  getEaringList,
  getEaringStat,
  /* My Subscribers methods */
  postBlockUser,
  deleteUnblockUser,
  getListMySubscribers,
};
