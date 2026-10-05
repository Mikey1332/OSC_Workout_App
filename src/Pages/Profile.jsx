import React, { useState } from 'react';
import '../App.css';
import './Profile.css';
import BottomNav from '../Components/BottomNav';
import Sidebar from '../Components/Sidebar';

function Profile({ onBegin }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="profile-root">
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
      <header className="profile-header">
        <h1 className="neon-title text">Profile</h1>
      </header>



      <main className="profile-main">
        {/* Begin Workout - Prominent at the top */}


      </main>

      <BottomNav />
{/*      <footer className="profile-footer text">© OSC Workout App</footer> */}
    </div>
  );
}

export default Profile;
