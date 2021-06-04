import Cookies from "js-cookie";

export const options = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
};

export const contentType = { "Content-Type": "application/json" };

export const URL = "http://localhost:8080/";

export const getTokenCookie = () => {
  return Cookies.get("authenticatedUser");
};
