import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          className="sidebar-overlay"
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2>Choices</h2>

          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <button className="sidebar-action">
          <span className="sidebar-action-title">Previous Workout</span>
          <span className="sidebar-action-description">View your latest stats</span>
        </button>

        <button className="sidebar-action">
          <span className="sidebar-action-title">Aura Board</span>
          <span className="sidebar-action-description">See your current aura</span>
        </button>

        <button className="sidebar-action">
          <span className="sidebar-action-title">Settings</span>
          <span className="sidebar-action-description">Adjust the application</span>
        </button>
      </aside>
    </>
  );
}

export default Sidebar;