import React, { useEffect } from "react";

function LoginButton({ onSuccess, onFailure }) {
  useEffect(() => {
    const initializeGoogle = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: onSuccess,
        });

      window.google.accounts.id.renderButton(
          document.getElementById("g_id_signin"),
          {
            theme: "outline",
            size: "large",
            shape: "square",
            text: "signin_with",
            logo_alignment: "center",
            cancel_on_tap_outside: true,
          }
        );
      } else {
        console.warn("Google API chưa sẵn sàng");
      }
    };
    initializeGoogle();
  }, [onSuccess]);

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-callback={onSuccess}
        data-auto_prompt="false"
      ></div>
      <div id="g_id_signin" className="g_id_signin" />
    </div>
    //     <button
    //       type="submit"
    //       className="flex flex-wrap gap-1 justify-center items-center py-3 px-16 max-lg:px-[64px] max-sm:px-[32px] min-h-[40px] w-full bg-white/15 max-lg:max-w-full mt-[10px]"
    //     >
    //       <img
    //         loading="lazy"
    //         src={iconSrc}
    //         alt=""
    //         className="object-cover shrink-0  self-stretch my-auto aspect-square w-[24px]"
    //       />
    //       <span className="gap-2.5 self-stretch my-auto min-w-[240px] text-[1.25rem] max-lg:text-[12px] max-lg:min-w-[180px]">
    //         Tiếp tục với {provider}
    //       </span>
    //     </button>
  );
}

export default LoginButton;
