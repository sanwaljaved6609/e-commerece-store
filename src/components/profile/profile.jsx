import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import "./profile.css";

function ProfilePage() {
  const { currentUser, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser.displayName || "");
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL || "");
  const [editing, setEditing] = useState(false);

  const handleSave = async () => {
    await updateUserProfile(displayName, photoURL);
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <img
          src={photoURL || "/default-avatar.png"}
          alt="Profile"
          className="profile-img"
        />
        {editing ? (
          <>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Profile Picture URL"
            />
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <h3>{currentUser.email}</h3>
            <h4>{displayName || "No Display Name"}</h4>
            <button className="edit-button" onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
