import getConfig from "next/config";

import { authService } from "services";

const { publicRuntimeConfig } = getConfig();

// console.log(getConfig());

const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export const getQueryFromObj = (params: any) => {
  let query = "";
  if (params && typeof params === "object") {
    query = "?";
    const arrKeys = Object.keys(params);
    arrKeys.forEach((item, index) => {
      query += `${item}=${params[item]}`;
      if (index < arrKeys.length - 1) query += "&";
    });
  }
  return query;
};

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url: RequestInfo, query?: any) {
  console.log("GET TO URL => " + baseUrl + url + getQueryFromObj(query));
  const requestOptions: RequestInit = {
    method: "GET",
    headers: { ...authHeader(url), mode: "cors" },
  };
  return fetch(baseUrl + url + getQueryFromObj(query), requestOptions).then(
    handleResponse
  );
}

async function post(url: RequestInfo, body: any) {
  console.log("POST TO URL => " + baseUrl + url);
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(url),
      mode: "cors",
    },
    // credentials: "include",
    body: JSON.stringify(body),
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
}

function put(url: RequestInfo, body: any) {
  console.log("PUT TO URL => " + baseUrl + url);
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(url),
    },
    body: JSON.stringify(body),
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: RequestInfo) {
  console.log("DELETE TO URL => " + baseUrl + url);
  const requestOptions = {
    method: "DELETE",
    headers: { ...authHeader(url), mode: "cors" },
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url: any): HeadersInit {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = authService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response: Response) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && authService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        authService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
