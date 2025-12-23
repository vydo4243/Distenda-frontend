
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;

      // Gửi token sang backend
      const res = await axios.post("http://localhost:3000/auth/google", { token }, { withCredentials: true });

      if (res.data.code === 200) {
        // Đăng nhập thành công → chuyển hướng
        navigate("/courses");
      }
    } catch (error) {
      console.error("Login Google failed:", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;