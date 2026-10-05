import React, { useState } from 'react';
import '../App.css';
import './Calendar.css';
import BottomNav from '../Components/BottomNav';
import Sidebar from '../Components/Sidebar';

function Calendar({ onBegin }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="calendar-root">
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
      <header className="calendar-header">
        <h1 className="neon-title text">Calendar</h1>
      </header>



      <main className="calendar-main">
        {/* Begin Workout - Prominent at the top */}


      </main>

      <BottomNav />
{/*      <footer className="calendar-footer text">© OSC Workout App</footer> */}
    </div>
  );
}

export default Calendar;
