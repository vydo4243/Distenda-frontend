import React, { useEffect, useState, useCallback } from "react";

function FacebookLoginButton({ onSuccess, onFailure }) {
  const [isSDKReady, setIsSDKReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Nếu đã có FB và đã init → dùng luôn
    if (window.FB && window.FB.init && window.FB.getLoginStatus) {
      setIsSDKReady(true);
      return;
    }

    // Định nghĩa callback init
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: false,
        version: "v20.0", // Nâng cấp lên v20.0 (tính đến 2025)
      });

      // Chờ một chút để đảm bảo FB đã sẵn sàng hoàn toàn
      setTimeout(() => {
        setIsSDKReady(true);
        console.log("Facebook SDK initialized successfully");
      }, 300); // 300ms delay nhỏ để tránh race condition
    };

    // Load script chỉ 1 lần
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;

      script.onerror = () => {
        setError("Không tải được Facebook SDK");
        onFailure?.("Không tải được Facebook SDK");
      };

      document.body.appendChild(script);
    }

    // Cleanup (tùy chọn, nhưng tốt)
    return () => {
      window.fbAsyncInit = null; // Tránh ghi đè nếu component unmount/remount
    };
  }, [onFailure]);

  const handleFBLogin = useCallback(() => {
    if (error) {
      onFailure?.(error);
      return;
    }

    if (!window.FB || !isSDKReady) {
      onFailure?.("Facebook SDK chưa sẵn sàng. Vui lòng thử lại sau 2 giây.");
      return;
    }

    // Kiểm tra thêm trạng thái trước khi login
    window.FB.getLoginStatus((response) => {
      // Chỉ gọi login nếu chưa login hoặc cần refresh
      window.FB.login(
        (loginResponse) => {
          if (loginResponse.authResponse) {
            onSuccess(loginResponse.authResponse);
          } else {
            onFailure?.("Đăng nhập bị hủy hoặc chưa cấp quyền");
          }
        },
        { scope: "public_profile,email" }
      );
    });
  }, [isSDKReady, error, onSuccess, onFailure]);

  return (
    <button
      onClick={handleFBLogin}
      disabled={!isSDKReady || !!error}
      className={`flex text-[1.25rem] max-lg:text-[12px] items-center justify-center gap-2 px-[0.5rem] py-[0.8rem] bg-white text-black min-h-[40px] border border-gray-300 rounded-[4px] hover:bg-gray-100 ${!isSDKReady || error ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{ fontWeight: "450" }}
    >
      <img src="/Icon/FBicon.svg" alt="Facebook" className="w-[20px] h-[20px]" />
      Sign in with Facebook
    </button>
  );
}

export default FacebookLoginButton;