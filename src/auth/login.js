import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import Logo from "../img/image 1.png";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useState } from "react";
const Login = () => {
    const [passIcon, setPassicon] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        pass: ""
    });

  return (
    <div className="login-page">
      <div className="login-section">
        <div className="logo text-center">
          <img src={Logo} alt="site-logo" />
        </div>
        <div className="welcome-note text-center mt-4">
          <h3>Welcome Back</h3>
          <h4>Sign In</h4>
        </div>
        <div className="login-form my-4">
            
          <form>
            <div className="form-group mt-4">
              <label>
                <MailOutlined />
                Email Address:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter Email"
              />
            </div>
            <div className="form-group mt-4">
              <label>
                <LockOutlined />
                Password:
              </label>
              <input
                type={passIcon ? "text" : "password" }
                className="form-control"
                placeholder="Please Enter Password"
              />
              <span className="show-hide-pass" onClick={()=> setPassicon(!passIcon)}>{passIcon ? <EyeTwoTone/> : <EyeInvisibleOutlined/> }</span>
            </div>
            <Link to="/deshboard">
                <button className="mt-4 form-control">Login</button>
            </Link>
            
          </form>
          <div className="mt-3 forgot-pass">
            <span>
              <Link to="/" className="">
                Forgot password?
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
