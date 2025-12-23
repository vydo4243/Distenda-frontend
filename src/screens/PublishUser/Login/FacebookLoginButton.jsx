import React, { useEffect, useState, useCallback } from "react";

function FacebookLoginButton({ onSuccess, onFailure }) {
  const [isSDKReady, setIsSDKReady] = useState(false);

  useEffect(() => {
    if (window.FB && window.FB.init) {
      setIsSDKReady(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: false,
        version: "v18.0", 
      });

      setIsSDKReady(true);
      console.log("Facebook SDK đã init xong");
    };

    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;

      script.onerror = () => {
        onFailure?.("Không thể tải Facebook SDK");
      };

      document.body.appendChild(script);
    }
  }, [onFailure]);

  const handleFBLogin = useCallback(() => {
    if (!window.FB || !isSDKReady) {
      onFailure?.("Facebook SDK chưa sẵn sàng. Vui lòng thử lại sau vài giây.");
      return;
    }

    window.FB.login(
      (response) => {
        if (response.authResponse) {
          onSuccess(response.authResponse);
        } else {
          onFailure?.("Đăng nhập bị hủy hoặc chưa cấp quyền");
        }
      },
      {
        scope: "public_profile,email",
      }
    );
  }, [isSDKReady, onSuccess, onFailure]);

  return (
    <button
      onClick={handleFBLogin}
      disabled={!isSDKReady}
      className={`flex text-[1.25rem] max-lg:text-[12px] items-center justify-center gap-2 
        px-[0.5rem] py-[0.8rem] bg-white text-black min-h-[40px] border border-gray-300 
        rounded-[4px] hover:bg-gray-100 ${!isSDKReady ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{ fontWeight: "450" }}
    >
      <img src="/Icon/FBicon.svg" alt="Facebook" className="w-[20px] h-[20px]" />
      Sign in with Facebook
    </button>
  );
}

export default FacebookLoginButton;