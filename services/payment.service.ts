import { fetchWrapper } from "utils";

const END_POINT = "/payment";

async function postCreateNew(propObj: {
  deliveryAddress: String;
  products: Array<{
    quantity: Number;
    _id: String;
  }>;
}) {
  return fetchWrapper.post(`${END_POINT}/purchase-products`, propObj);
}

async function getPaymentHistory(query?: {
  sort?: String;
  sortBy?: String;
  limit?: Number;
  offset?: Number;
}) {
  return fetchWrapper.get(`/transactions/user/search`, query);
}

export const paymentService = {
  postCreateNew,
  getPaymentHistory,
};
