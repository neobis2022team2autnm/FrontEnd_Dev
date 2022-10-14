import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";

function SignIn() {
  const { googleSignIn, user } = UserAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/account");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  });

  return (
    <div>
      <h1 className="title">Sign In</h1>
      <div className="container">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}

export default SignIn;
