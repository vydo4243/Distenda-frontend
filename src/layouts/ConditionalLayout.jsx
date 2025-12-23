
import React from "react";
import Cookies from "js-cookie";
import MainUser from "./private/MainUser";
import MainPublic from "./public/MainPublic";

const ConditionalLayout = () => {
  const token = Cookies.get("user_token");
  return token ? <MainUser /> : <MainPublic />;
};

export default ConditionalLayout;