import { fetchWrapper } from "utils";

const END_POINT = "/menus/admin";

async function postCreate(propObj: {
  title: String;
  path: String;
  internal: Boolean;
  parentId: any;
  help: String;
  section: String;
  public: Boolean;
  isPage: Boolean;
  ordering: Number;
}) {
  return fetchWrapper.post(`${END_POINT}`, propObj);
}

async function putUpdate(
  menuId: String,
  propObj: {
    title?: String;
    path?: String;
    internal?: Boolean;
    parentId?: any;
    help?: String;
    section?: String;
    public?: Boolean;
    isPage?: Boolean;
    ordering?: Number;
  }
) {
  return fetchWrapper.put(`${END_POINT}/${menuId}`, propObj);
}

export const menuService = {
  postCreate,
  putUpdate,
};
