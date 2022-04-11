import React from "react";
import "./header.scss";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../img/profile-id.webp";
import flagImg from "../../img/flag.webp";
import bellIcon from "../../img/notification.png";
import {FiSearch} from 'react-icons/fi'
const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={5} xl={6}>
            <div className="header-heading">
              <h2>Dashboard Overview</h2>
              <span>12:15 PM at 19th November 2020</span>
            </div>
          </Col>
          <Col lg={7} xl={6}>
            <div className="header-items">
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search..."
                />
                <button className="search-btn"><FiSearch/></button>
              </div>
              <div className="time-perid">
                <select className="form-select">
                  <option selected>This Year</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2022</option>
                </select>
              </div>
              <div className="notification">
                <div className="noti-icon"></div>
                <img src={bellIcon} alt="language-img" />
              </div>

              <div className="language-icons">
                <img src={flagImg} alt="language-img" />
              </div>

              <div className="profile-img">
                <img src={profile} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
