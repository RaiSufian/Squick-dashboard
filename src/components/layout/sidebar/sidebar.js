import React from "react";
import "./sidebar.scss";
import Logo from "../../../img/image 1.png";
import bashboardWhite from '../../../img/dashboard.png';
import salesIcon from '../../../img/sales.svg';
import productIcon from '../../../img/products.svg';
import customerIcon from '../../../img/customers.svg';
import profileIcon from '../../../img/profile.svg';
import settingIcon from '../../../img/settings.svg';

const Sidebar = () => {
  return (
    <div className="sidebar px-3">
      <div className="side-logo mt-4">
        <img src={Logo} alt="" className="img-fluid" />
      </div>
      <div className="main-menu my-3">
        <ul>
          <li>
            <div className="nav-items active">
              <img src={bashboardWhite} alt="icons" className="img-fluid"/> Dashboard</div>
          </li>
          <li>
            <div className="nav-items"><img src={salesIcon} alt="icons"  className="img-fluid" /> Sales</div>
          </li>
          <li>
            <div className="nav-items"><img src={productIcon} alt="icons"  className="img-fluid"/> Products</div>
          </li>
          <li>
            <div className="nav-items"><img src={customerIcon} alt="icons"  className="img-fluid"/> Customer</div>
          </li>
          <li>
            <div className="nav-items"><img src={profileIcon} alt="icons"  className="img-fluid"/> Profile</div>
          </li>
          <li>
            <div className="nav-items"><img src={settingIcon} alt="icons"  className="img-fluid"/> Settings</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
