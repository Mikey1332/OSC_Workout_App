import React, { useState } from 'react';
import '../App.css';
import './Workouts.css';
import BottomNav from '../Components/BottomNav';
import Sidebar from '../Components/Sidebar';

function Workouts({ onBegin }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="workouts-root">
      <button
        className="sidebar-menu-button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <header className="workouts-header">
        <h1 className="neon-title text">Workouts</h1>
      </header>



      <main className="workouts-main">
        {/* Begin Workout - Prominent at the top */}


      </main>

      <BottomNav />
{/*      <footer className="workouts-footer text">© OSC Workout App</footer> */}
    </div>
  );
}

export default Workouts;
