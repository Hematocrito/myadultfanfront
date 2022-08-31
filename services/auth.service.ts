import { fetchWrapper } from "utils";
import { BehaviorSubject } from "rxjs";
import Router from "next/router";

let user: any;
if (typeof window !== "undefined") {
  // Perform localStorage action
  user = localStorage.getItem("user");
}
const userSubject: any = new BehaviorSubject<any>(
  process.browser && JSON.parse(user)
);

async function login(email: String, password: String) {
  return fetchWrapper
    .post(`/auth/login/email`, { email, password })
    .then((user: any) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));
      Router.push({
        pathname: "/feedusr",
      });
      return user;
    })
    .catch((errors: any) => {
      console.log("errors :>> ", errors);
      alert(errors);
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/login/fans");
}

function register(user: any) {
  user.gender = user.gender.toLowerCase();
  return fetchWrapper.post(`/auth/users/register`, user);
}

export const authService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  register,
};
