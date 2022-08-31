import { fetchWrapper } from "utils";

const END_POINT = "/orders";

async function getList(query?: {
  limit?: Number;
  offset?: Number;
  sort?: String;
  sortBy?: String;
}) {
  return fetchWrapper.get(`${END_POINT}/search`, query);
}
async function getDetails(
  orderId: String,
  query?: {
    limit?: Number;
    offset?: Number;
    sort?: String;
    sortBy?: String;
    createdAt?: Date;
  }
) {
  return fetchWrapper.get(`${END_POINT}/${orderId}`, query);
}

async function putUpdate(
  orderId: String,
  propObj: {
    deliveryStatus: String;
    shippingCode: String;
  }
) {
  return fetchWrapper.put(`${END_POINT}/${orderId}/update`, propObj);
}

export const ordersService = {
  getList,
  getDetails,
  putUpdate,
};
