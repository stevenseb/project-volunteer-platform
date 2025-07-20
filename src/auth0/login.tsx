import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="login-button header-button">Log In</button>;
};

export default LoginButton;
