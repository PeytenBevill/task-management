import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogo } from "@phosphor-icons/react";
import "./login.css";

const Login = ({ setDemoClicked }) => {
  const navigate = useNavigate();

  const handleDemo = () => {
    setDemoClicked(true);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="buttonContainer">
        <button className="sign-up">Sign-Up! (It's free)</button>
        <button className="sign-in">
          <GoogleLogo size={22} />
          Sign-in with Google
        </button>
        <button className="demo" onClick={() => handleDemo()}>
          View Demo Account
        </button>
      </div>
    </>
  );
};

export default Login;
