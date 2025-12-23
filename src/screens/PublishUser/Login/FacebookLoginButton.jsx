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
      className={`... ${!isSDKReady ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      Sign in with Facebook
    </button>
  );
}

export default FacebookLoginButton;