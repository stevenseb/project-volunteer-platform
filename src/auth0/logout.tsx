import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="logout-button header-button"
              >
                Log Out
              </button>
};

export default LogoutButton;
