import React from "react";

import "./Profile.css";
const Profile = () => {
  const images = [
    "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709349714908-e1f49cbca183?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709311983950-ee0d11ec47bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1709311451457-21d7fb4638c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709393361159-b915b32b061a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709065396771-72494e569cb0?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  

  

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
      <div className="highlights">
        <div className="highlight">
          <img
            src="https://images.unsplash.com/photo-1709377059113-3c429b2e0796?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="highlight">
          <img
            src="https://images.unsplash.com/photo-1709416618667-0d745351ad02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="highlight">
          <img
            src="https://images.unsplash.com/photo-1709432450714-5baf0d400e9f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="highlight">
          <img
            src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="highlight">
          <img
            src="https://plus.unsplash.com/premium_photo-1675615649455-d72efb381550?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="highlight">
          <img
            src="https://images.unsplash.com/photo-1706443930469-663f42523dc9?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="highlight">
          <img
            src="https://images.unsplash.com/photo-1708947567920-316933385c73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="thumbnail"
          />
        </div>
      </div>
      <div className="posts">
        <div className="post-categories">
          <span className="material-symbols-outlined">post</span>
          <span className="categories">POSTS</span>
          <span className="material-symbols-outlined">bookmark</span>
          <span className="categories">SAVED</span>
          <span className="material-symbols-outlined">sell</span>
          <span className="categories">TAGGED</span>
        </div>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Image ${index + 1}`} className="images" />
            </div>
          ))}
        </div>
      </div>
      <footer>
        <h4>© 2024 Instagram from Meta</h4>
      </footer>
    </div>
  );
};

export default Profile;
