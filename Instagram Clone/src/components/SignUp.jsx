import React from "react";
import "./SignUp.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameText, setUsernameText] = useState("");
  const handleEmailChange = (event) => {
    const newText = event.target.value;
    setEmailText(newText);
    // Validate the entered text (e.g., check if it's empty)
    if (newText.trim() === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleUsernameChange = (event) => {
    const newText = event.target.value;
    setUsernameText(newText);
    // Validate the entered text (e.g., check if it's empty)
    if (newText.trim() === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);
  const postData = () => {
    fetch("http://localhost:5000/sign-up", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        password: password,
        userName: usernameText,
        email: emailText,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) notifySuccess(data.message);
        else {
          notifyError(data.error);
        }
      });
  };
  useEffect(() => {
    // Once the component mo unts, set isVisible to true after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay time as needed

    // Clear the timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="bg-signup">
        <div className={`signUp ${isVisible ? "visible" : ""}`}>
          <img src="/assets/insta-logo-2.jpg" alt="insta-logo-2" />
          <h1 className="signUpText">Create Account</h1>
          <h3 className="h3">to continue to Instagram</h3>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              fullWidth
              className="input"
              value={emailText}
              onChange={handleEmailChange}
              error={emailError} // Set error prop based on the state
              helperText={emailError ? "Email cannot be empty" : ""}
              sx={{ m: 1, width: "31ch" }}
            />
            <FormControl
              variant="outlined"
              fullWidth
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              sx={{ m: 1, width: "31ch" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Username"
              name="username"
              fullWidth
              className="input"
              value={usernameText}
              onChange={handleUsernameChange}
              error={usernameError} // Set error prop based on the state
              helperText={usernameError ? "Username cannot be empty" : ""}
              sx={{ m: 1, width: "31ch" }}
            />
            <TextField
              id="outlined-basic"
              label="Fullname"
              name="fullname"
              fullWidth
              className="input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              sx={{ m: 1, width: "31ch" }}
            />
          </div>
          <p>
            By selecting Create Account, I agree to the Instagram{" "}
            <Link to="/terms" id="terms">
              Terms & Conditions
            </Link>
          </p>
          <Button
            variant="contained"
            fullWidth
            className="btn"
            sx={{ m: 1 }}
            onClick={() => {
              postData();
            }}
          >
            Create Account
          </Button>
        </div>
        <div className={`signUp ${isVisible ? "visible" : ""}`}>
          <p>
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
