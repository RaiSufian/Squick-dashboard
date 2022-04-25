import React from 'react';
import Layout from '../../components/layout/layout';
import './home.scss';
import {Container, Row, Col} from "react-bootstrap";
import {BsArrowUpRight, BsArrowDownRight, BsThreeDots} from 'react-icons/bs';
import salesIcon from '../../img/Form 2.svg';
import persIcon from '../../img/Form 3.svg';
import returnIcon from '../../img/Form 4.svg';
import DemoLine from '../../components/salesAnalytics';
import salerImg from '../../img/profile-id.webp';
import {GrDocumentDownload} from 'react-icons/gr'
import InvoiceTable from '../../components/invoice-table';
const Home = () => {
  return (
    <Layout>
<div className="home-page mt-5">
        <Container>
          <Row>
            <Col lg={9}>
              <Row>
                <Col lg={4}>
                  <div className="details-div">
                      <div className="details-view d-flex align-items-center px-3">
                        <img src={salesIcon } alt="icon" />
                        <p class="up"><BsArrowUpRight/> +16,24 %</p>
                      </div>
                      <div className='details-totals pt-4'>
                        <p>TOTAL SALES</p>
                        <h3>£ 23,090.00</h3>
                        <span>Compared to (£19,340.00 last year)</span>
                      </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="details-div">
                      <div className="details-view d-flex align-items-center px-3">
                        <img src={persIcon} alt="icon" />
                        <p class="down"><BsArrowDownRight/> -10,82 %</p>
                      </div>
                      <div className='details-totals pt-4'>
                        <p>PURCHASES</p>
                        <h3>£ 14,850.00</h3>
                        <span>Compared to (£17,980.00 last year)</span>
                      </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="details-div">
                      <div className="details-view d-flex align-items-center px-3">
                        <img src={returnIcon} alt="icon" />
                        <p class="up"><BsArrowUpRight/> +7,33 %</p>
                      </div>
                      <div className='details-totals pt-4'>
                        <p>TOTAL SALES</p>
                        <h3>£ 23,090.00</h3>
                        <span>Compared to (£19,340.00 last year)</span>
                      </div>
                  </div>
                </Col>
              
              </Row>
              <Row>
                <Col>
                <div className='saleAnalytic p-4 my-4'>
                  <div className="d-flex justify-content-between">
                    <h2>Sales Analytics</h2>
                    <select name="" id="">
                      <option value="">This year</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                  <DemoLine/>
                </div>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>

              <div className="recent-sales">
                <div class="d-flex justify-content-end">
                  <BsThreeDots/>
                </div>
                <h2>Recent Sales</h2>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
                <div class="sales-details d-flex justify-content-between algin-items-center pt-4">
                  <div className='d-flex align-items-center'>
                    <img src={salerImg } alt="user-img" />
                    <div class="saler-details">
                      <h5>Henry Rashford</h5>
                      <span>5 minutes ago</span>
                    </div>
                  </div>
                  <p>£129.00</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='Invice'>
                  <div className="Invice-header d-flex justify-content-between align-items-center">
                    <h3>Latest Invoices</h3>
                    <div className='d-flex align-items-start'>
                      <button><GrDocumentDownload color="white"/> Generate Report</button>
                      <span className="mx-3"><BsThreeDots size="22px" /></span>
                    </div>
                  </div>
                  <InvoiceTable/>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    </Layout>
    
  )
}

export default Home;