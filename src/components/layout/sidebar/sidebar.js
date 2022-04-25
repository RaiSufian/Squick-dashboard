import React from "react";
import "./sidebar.scss";
import Logo from "../../../img/image 1.png";
import bashboardWhite from '../../../img/dashboard.png';
import {BiWalletAlt} from 'react-icons/bi'
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {CgShoppingBag} from 'react-icons/cg';
import {BiUser} from "react-icons/bi";
import {FiSettings} from "react-icons/fi"
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
            <div className="nav-items"><BiWalletAlt/> Sales</div>
          </li>
          <li>
            <div className="nav-items"><HiOutlineShoppingBag/> Products</div>
          </li>
          <li>
            <div className="nav-items"><CgShoppingBag/> Customer</div>
          </li>
          <li>
            <div className="nav-items"><BiUser/> Profile</div>
          </li>
          <li>
            <div className="nav-items"><FiSettings/> Settings</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
