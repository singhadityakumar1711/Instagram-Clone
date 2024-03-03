import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-pic-1">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="profile-details">
          <div className="detail-1">
            <p>r.y.u_k.e.n.d.o</p>
            <button className="profile-btn">Edit profile</button>
            <button className="profile-btn">View archive</button>
          </div>
          <div className="detail-2">
            <span>31 posts</span>
            <span>104 followers</span>
            <span>79 following</span>
          </div>
          <div className="profile-bio">
            <p>Aditya Kumar Singh</p>
            <p className="bio">
              NITDGP'24 ME <br />
              Photography♥️ <br />
              🎧Music Addicted🎶 <br />
              🏏Cricket🥎|🏸 Badminton <br />
              🎮Gamer🎮 <br />
              📈Trading📈
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
