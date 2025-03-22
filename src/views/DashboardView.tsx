import React from 'react';
import Card from '../components/Card'; // Import the Card component
import dashboardIcon from '../assets/dashboard_icon.png'; // Icon for project updates
import dashboardImage from '../assets/dashboard_image.png'; // The single dashboard image
import './DashboardView.css'; // Styling for DashboardView

const DashboardView: React.FC = () => {
  return (
    <main className="dashboard-view-content">
      {/* Wide Container Section */}
      <div className="wide-container">
        <div className="wide-container-left">
          <h2>Empower Change: Lead or Contribute with Helpful!</h2>
          <p>
            Welcome to the Helpful project page! Explore opportunities to lead or contribute to projects,
            advance designs for commercialization, or bring external projects for support, resources, and visibility.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="wide-container-right">
          <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
        </div>
      </div>

      {/* Project Updates Section */}
      <div className="content-header">
        <h2>Project Updates</h2>
        <div className="sort-by">
          <label htmlFor="sortBy">Sort by:</label>
          <select id="sortBy">
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <section className="dashboard-section">
        {/* Use the Card component */}
        <Card
          title="Update Title 1"
          info="Team Member 1 • Date 1"
          points={['Update Point 1', 'Update Point 2', 'Update Point 3']}
          icon={dashboardIcon}
        />
        <Card
          title="Update Title 2"
          info="Team Member 2 • Date 2"
          points={['Update Point 1', 'Update Point 2', 'Update Point 3']}
          icon={dashboardIcon}
        />
        <Card
          title="Update Title 3"
          info="Team Member 3 • Date 3"
          points={['Update Point 1', 'Update Point 2', 'Update Point 3']}
          icon={dashboardIcon}
        />
      </section>
    </main>
  );
};

export default DashboardView;