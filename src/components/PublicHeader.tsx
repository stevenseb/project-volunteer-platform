import helpfulIcon from "../assets/helpful_icon.png";
import profileIcon from "../assets/profile_icon.png";
import SignupButton from "../auth0/signup";
import "./styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo-section">
          <img src={helpfulIcon} alt="Helpful Icon" className="helpful-icon" />
          {/* <span className="logo-text">YourLogo</span> */}
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
          <SignupButton />
          <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
