import React from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <div className="card-header">
          <div className="profile-pic">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="p1"
            />
          </div>
          <h5 className="card-author">r.y.u_k.e.n.d.o</h5>
        </div>
        <div className="card-img">
          <img
            src="https://images.unsplash.com/photo-1641202905211-1c82ff51f6e3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="card-icons">
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">tooltip</span>
          <span className="material-symbols-outlined">send</span>
        </div>
        <div className="card-content">
          <p className="likes">1 Like</p>
          <span className="card-author">r.y.u_k.e.n.d.o</span>
          <span className="caption">Mercedes Maybach....</span>
        </div>
        <div className="card-comment">
          <TextField
            id="standard-multiline-flexible"
            label="Add a comment"
            multiline
            maxRows={4}
            variant="standard"
            name="email"
            fullWidth
            className="card-input"
            sx={{ mt: 0.5 }}
          />
          <button className="post-button">POST</button>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="profile-pic">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="p1"
            />
          </div>
          <h5 className="card-author">r.y.u_k.e.n.d.o</h5>
        </div>
        <div className="card-img">
          <img
            src="https://images.unsplash.com/photo-1641202905211-1c82ff51f6e3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="card-icons">
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">tooltip</span>
          <span className="material-symbols-outlined">send</span>
        </div>
        <div className="card-content">
          <p className="likes">1 Like</p>
          <span className="card-author">r.y.u_k.e.n.d.o</span>
          <span className="caption">Mercedes Maybach....</span>
        </div>
        <div className="card-comment">
          <TextField
            id="standard-multiline-flexible"
            label="Add a comment"
            multiline
            maxRows={4}
            variant="standard"
            name="email"
            fullWidth
            className="card-input"
            sx={{ mt: 0.5 }}
          />
          <button className="post-button">POST</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
