import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

function BottomNav() {
  const getLinkClass = ({ isActive }) =>
    isActive ? 'bottom-nav-link active' : 'bottom-nav-link';

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <NavLink to="/workouts" className={getLinkClass}>
        <span className="nav-icon" aria-hidden="true">💪</span>
        <span className="nav-label">Workouts</span>
      </NavLink>

      <NavLink to="/calendar" className={getLinkClass}>
        <span className="nav-icon" aria-hidden="true">▦</span>
        <span className="nav-label">Calendar</span>
      </NavLink>

      <NavLink to="/" className={getLinkClass}>
        <span className="nav-icon" aria-hidden="true">⌂</span>
        <span className="nav-label">Home</span>
      </NavLink>
      <NavLink to="/profile" className={getLinkClass}>
        <span className="nav-icon" aria-hidden="true">👤</span>
        <span className="nav-label">Profile</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;