import React from 'react';
import './Dashboard.css';
import Header from '../components/Header.tsx';

// Importing icons for each section and tab
import dashboardIcon from '../assets/dashboard_icon.png';
import projectsIcon from '../assets/projects_icon.png';
import opportunitiesIcon from '../assets/opportunities_icon.png';
import aboutIcon from '../assets/about_icon.png';
import toolsIcon from '../assets/tools_icon.png';
import settingsIcon from '../assets/settings_icon.png';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <aside className="sidebar">
          {/* Dashboard Section */}
          <div className="sidebar-section">
            <label className="sidebar-label">
              <img src={dashboardIcon} alt="Dashboard Icon" className="sidebar-icon" />
              Dashboard
            </label>
          </div>

          {/* Manage Section */}
          <div className="sidebar-section">
            <label className="sidebar-label">
              Manage
            </label>
            <div className="sidebar-tabs">
              <span className="sidebar-tab">
                <img src={projectsIcon} alt="My Projects Icon" className="sidebar-icon" />
                My Projects
              </span>
              <span className="sidebar-tab">
                <img src={opportunitiesIcon} alt="Opportunities Icon" className="sidebar-icon" />
                Opportunities
              </span>
            </div>
          </div>

          {/* Set Up Section */}
          <div className="sidebar-section">
            <label className="sidebar-label">
              Set Up
            </label>
            <div className="sidebar-tabs">
              <span className="sidebar-tab">
                <img src={aboutIcon} alt="About Helpful Icon" className="sidebar-icon" />
                About Helpful
              </span>
              <span className="sidebar-tab">
                <img src={toolsIcon} alt="Tools Icon" className="sidebar-icon" />
                Tools
              </span>
              <span className="sidebar-tab">
                <img src={settingsIcon} alt="Settings Icon" className="sidebar-icon" />
                Settings
              </span>
            </div>
          </div>
        </aside>
        <main className="content">
          <div className="content-header">
            <h2>My Projects</h2>
            <div className="sort-by">
              <label htmlFor="sortBy">Sort by:</label>
              <select id="sortBy">
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
          <section className="dashboard-section">
            {/* Example cards */}
            <div className="card">
              <div className="card-header">
                <img src={projectsIcon} alt="Project Icon" className="project-icon" />
                <span className="project-title">Project Title 1</span>
                <span className="project-info">Author 1 • Date 1</span>
              </div>
              <div className="card-content">
                <ul className="card-points">
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
                <button className="join-now-button">Join Now</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={projectsIcon} alt="Project Icon" className="project-icon" />
                <span className="project-title">Project Title 2</span>
                <span className="project-info">Author 2 • Date 2</span>
              </div>
              <div className="card-content">
                <ul className="card-points">
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
                <button className="join-now-button">Join Now</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src={projectsIcon} alt="Project Icon" className="project-icon" />
                <span className="project-title">Project Title 3</span>
                <span className="project-info">Author 3 • Date 3</span>
              </div>
              <div className="card-content">
                <ul className="card-points">
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
                <button className="join-now-button">Join Now</button>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/*
      <footer className="dashboard-footer">
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
      */}
    </div>
  );
};

export default Dashboard;
