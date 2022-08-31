import { fetchWrapper } from "utils";

const END_POINT = "/contact";

async function postContact(propObj: {
  email: String;
  message: String;
  name: String;
}) {
  return fetchWrapper.post(`${END_POINT}`, propObj);
}

export const contactsService = {
  postContact,
};
