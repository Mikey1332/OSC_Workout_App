import React from 'react';
import './Chart.css';

function Chart() {
  return (
    <section className="chart-container">
      <h2 className="chart-title">Workout Activity</h2>

      <div className="chart" aria-label="Workout activity chart">
        <div className="chart-bar chart-bar-one" />
        <div className="chart-bar chart-bar-two" />
        <div className="chart-bar chart-bar-three" />
        <div className="chart-bar chart-bar-four" />
        <div className="chart-bar chart-bar-five" />
      </div>
    </section>
  );
}

export default Chart;