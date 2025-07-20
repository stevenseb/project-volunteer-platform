import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import helpfulIcon from "../assets/helpful_icon.png";
import profileIcon from "../assets/profile_icon.png";
import SignupButton from "../auth0/signup";
import LogoutButton from "../auth0/logout";
import LoginButton from "../auth0/login";
import "./styles/Header.css";

interface HeaderProps {
  onProfileClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onProfileClick }) => {
  const {
    isAuthenticated,
    isLoading,
    user,
  } = useAuth0();

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo-section">
          <img src={helpfulIcon} alt="Helpful Icon" className="helpful-icon" />
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#research">Research</a>
          <a href="#events">Events</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          {!isLoading && !isAuthenticated && (
            <>
              <LoginButton />
              <SignupButton />
            </>
          )}

          {!isLoading && isAuthenticated && (
            <>
              <LogoutButton />
            </>
          )}

          <img
            src={isAuthenticated && user?.picture ? user.picture : profileIcon}
            alt="Profile Icon"
            className="profile-icon"
            onClick={onProfileClick}
            style={{ cursor: onProfileClick ? "pointer" : "default" }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
