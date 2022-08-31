import { fetchWrapper } from "utils";

const END_POINT = "/user/performer-assets/products";

async function getListProducts(query?: {
  performerId?: String;
  limit?: Number;
  offset?: Number;
  sort?: String;
  sortBy?: String;
}) {
  return fetchWrapper.get(`${END_POINT}/search`, query);
}

async function postCreate(propObj: {
  name: String;
  price: Number;
  stock: Number;
  type: String;
  status: String;
  description: String;
  image: File;
}) {
  return fetchWrapper.post(`${END_POINT}`, propObj);
}
async function deleteProduct(productId: String) {
  return fetchWrapper.delete(`${END_POINT}/${productId}`);
}
async function getDetails(productId: String) {
  return fetchWrapper.get(`${END_POINT}/${productId}`);
}
async function putEdit(
  productId: String,
  propObj: {
    name?: String;
    price?: Number;
    stock?: Number;
    type?: String;
    status?: String;
    description?: String;
    image?: File;
  }
) {
  return fetchWrapper.put(`${END_POINT}/${productId}`, propObj);
}

export const productsService = {
  getListProducts,
  postCreate,
  deleteProduct,
  getDetails,
  putEdit,
};
