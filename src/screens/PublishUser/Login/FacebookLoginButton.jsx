import React, { useEffect, useState, useCallback } from "react";

function FacebookLoginButton({ onSuccess, onFailure }) {
  const [isSDKReady, setIsSDKReady] = useState(false);

  useEffect(() => {
    const handleSDKReady = () => {
      if (window.FB && window.FB.init) {
        setIsSDKReady(true);
      }
    };

    if (window.FB && window.FB.init) {
      setIsSDKReady(true);
    } else {
      window.addEventListener('fb-sdk-ready', handleSDKReady);
    }

    return () => {
      window.removeEventListener('fb-sdk-ready', handleSDKReady);
    };
  }, []);

  const handleFBLogin = useCallback(() => {
    if (!window.FB || !isSDKReady) {
      onFailure?.("Facebook SDK chưa sẵn sàng. Vui lòng thử lại.");
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
      { scope: "public_profile,email" }
    );
  }, [isSDKReady, onSuccess, onFailure]);

  return (
        <button
      onClick={handleFBLogin}
      disabled={!isSDKReady}
      className="flex text-[1.25rem] max-lg:text-[12px] items-center justify-center gap-2 px-[0.5rem] py-[0.8rem] bg-white text-black min-h-[40px] border border-gray-300 rounded-[4px] hover:bg-gray-100"
      style={{ fontWeight: "450" }}
    >
      <img
        src="/Icon/FBicon.svg"
        alt="Facebook"
        className="w-[20px] h-[20px]"
      />
      Đăng nhập bằng Facebook
    </button>
  );
}

export default FacebookLoginButton;