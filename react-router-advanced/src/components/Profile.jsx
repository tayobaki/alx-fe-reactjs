import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li><Link to="/profile/details">Profile Details</Link></li>
          <li><Link to="/profile/settings">Profile Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<>Profile Page</>} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;