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

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Once the component mounts, set isVisible to true after a short delay
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
          <h1 className="signUpText">Login</h1>
          <h3 className="h3">to continue to Instagram</h3>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              fullWidth
              className="input"
              sx={{ m: 1, width: "31ch" }}
            />
            <FormControl
              variant="outlined"
              fullWidth
              className="input"
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
          </div>
          <p>
            By selecting Create Account, I agree to the Instagram{" "}
            <Link to="/terms" id="terms">
              Terms & Conditions
            </Link>
          </p>
          <Button variant="contained" fullWidth className="btn" sx={{ m: 1 }}>
            Login
          </Button>
        </div>
        <div className={`signUp ${isVisible ? "visible" : ""}`}>
          <p>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
