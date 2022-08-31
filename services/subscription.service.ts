import { fetchWrapper } from "utils";

async function postCancelSuscription(performerId: String) {
  return fetchWrapper.post(
    `/payment/ccbill/cancel-subscription/${performerId}`,
    {}
  );
}

async function postCheckSuscription(performerId: String) {
  return fetchWrapper.post(`/performers/${performerId}/check-subscribe`, {});
}

async function getMySubscriptions(query?: {
  sort?: String;
  sortBy?: String;
  limit?: Number;
  offset?: Number;
}) {
  return fetchWrapper.get(`/subscriptions/user/search`, query);
}

async function postSubscribePerformer(objProp: {
  performerId: String;
  type: String;
}) {
  return fetchWrapper.post(`/payment/subscribe/performers`, objProp);
}

export const subscriptionService = {
  postCancelSuscription,
  postCheckSuscription,
  getMySubscriptions,
  postSubscribePerformer,
};
