//import React and additional dependencies
import { useEffect, useRef } from "react";

//import components
import { LoginByGoogle } from "../../port/index";

export const Signin = ({ status }) => {
  const googleBtn = useRef(null);

  const handleCallbackResponse = (response) => {
    LoginByGoogle(response.credential);
    console.log(response);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "389304183889-m72ksip97kttaov9jkd86anlkkgiphgh.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(googleBtn.current, {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <form>
      <div className={"google_login"}>
        <div ref={googleBtn} />
      </div>
    </form>
  );
};

export default Signin;
