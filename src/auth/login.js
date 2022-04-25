import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import Logo from "../img/image 1.png";
import {  useNavigate  } from "react-router-dom";

import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useState } from "react";
const Login = () => {
  const  navigate  =  useNavigate ();
    const [passIcon, setPassicon] = useState(false);
    const [data, setdata] = useState({
        email: "",
        pass: ""
    });
    const [showError, setShowError] = useState(0);

    const GetDetail = (event) => {
      const { value, name } = event.target;
      setdata({ ...data, [name]: value });
      console.log("data", data)
  }
    const ErrorStyle = {
      opacity: showError,
      backgroundColor: "red",
      color: "#fff",
      padding: "5px 8px",
    }
const formSubmit =(e)=>{
  e.preventDefault();
  if(data.email === "admin@gmail.com" && data.pass === "12345678"){
    navigate("/deshboard");
  }
  else{
    setShowError(1);
    console.log("data", data)
  }
  
}
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
          <form onSubmit={formSubmit}>
            <div className="form-group mt-4">
              <label>
                <MailOutlined />
                Email Address:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter Email"
                onChange={GetDetail}
                name="email"
                value={setdata.email}
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
                onChange={GetDetail}
                name="pass"
                value={setdata.pass}
              />
              <span className="show-hide-pass" onClick={()=> setPassicon(!passIcon)}>{passIcon ? <EyeTwoTone/> : <EyeInvisibleOutlined/> }</span>
            </div>
            <div className="my-3" style={ErrorStyle}>
              <p>Please enter right email or password</p>
            </div>
                <button className=" form-control" >Login</button>
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
