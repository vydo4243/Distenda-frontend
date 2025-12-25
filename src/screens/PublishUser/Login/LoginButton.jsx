import React, { useEffect, useRef } from "react";
import { GoogleLogin } from '@react-oauth/google';

function LoginButton({ onSuccess, onFailure }) {
  const buttonDivRef = useRef(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    if (isScriptLoaded.current) {
      renderGoogleButton();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      isScriptLoaded.current = true;
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: onSuccess,
        });
        renderGoogleButton();
      }
    };

    script.onerror = () => {
      console.error("Không tải được Google Identity Services script");
      onFailure?.({ error: "Failed to load Google script" });
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [onSuccess]);

  const renderGoogleButton = () => {
    if (!buttonDivRef.current || !window.google?.accounts?.id) return;

    buttonDivRef.current.innerHTML = "";

    window.google.accounts.id.renderButton(
      buttonDivRef.current,
      {
        theme: "outline",
        size: "large",
        shape: "rectangular",
        text: "signin_with",
        logo_alignment: "left",
        width: "100%",
      }
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div ref={buttonDivRef} className="w-full" />
    </div>
  );
}

export default LoginButton;