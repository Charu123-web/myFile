import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Add a CSS file for styling if needed

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout logic here, like clearing tokens or user data
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>User Name:</strong> Charu Mehta</p>
        <p><strong>User ID:</strong> charu</p>
        <p><strong>Address:</strong> Middleton Bae, Ldn</p>
        <p><strong>City:</strong> London</p>
        <p><strong>Country:</strong> United Kingdom</p>
      </div>
      <div className="profile-buttons">
      <button className="logout-button" onClick={() => navigate('/previousorders')}>Previous Orders</button>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
