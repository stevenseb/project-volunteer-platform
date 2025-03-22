import React from 'react';
import Card from '../components/Card'; // Import the Card component
import projectsIcon from '../assets/projects_icon.png'; // Import the icon for the cards
import './MyProjects.css'; // Optional: Add any specific styles for MyProjects here

const MyProjects: React.FC = () => {
  return (
    <main className="my-projects-content">
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
        {/* Use the Card component */}
        <Card
          title="Project Title 1"
          info="Author 1 • Date 1"
          points={['Point 1', 'Point 2', 'Point 3']}
          icon={projectsIcon}
        />
        <Card
          title="Project Title 2"
          info="Author 2 • Date 2"
          points={['Point 1', 'Point 2', 'Point 3']}
          icon={projectsIcon}
        />
        <Card
          title="Project Title 3"
          info="Author 3 • Date 3"
          points={['Point 1', 'Point 2', 'Point 3']}
          icon={projectsIcon}
        />
      </section>
    </main>
  );
};

export default MyProjects;