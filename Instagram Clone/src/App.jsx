import React from "react";
import Navbar from "./components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
