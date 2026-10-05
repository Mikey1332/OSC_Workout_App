import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <section className="stats-container">
      <h2 className="stats-title">Workout Summary</h2>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">--</span>
          <span className="stat-label">Total Sessions</span>
        </div>

        <div className="stat-item">
          <span className="stat-value">--</span>
          <span className="stat-label">Weight Lifted</span>
        </div>

        <div className="stat-item">
          <span className="stat-value">--</span>
          <span className="stat-label">PRs Hit</span>
        </div>
      </div>
    </section>
  );
}

export default Stats;