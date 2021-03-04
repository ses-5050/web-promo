
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import Sidebar from '../../components/Sidebar';

class AdminPaymentAnagement extends React.Component{
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
      $("#example2").DataTable();
    });
  }
    render(){

        return(
            <div>
              <Sidebar />
        <div id="preloader">
          <div className="loader" />
        </div>
        {/* preloader area end */}
        {/* page container area start */}
        <div className="page-container">
         
          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <div className="header-area">
              <div className="row align-items-center">
                {/* nav and search button */}
                <div className="col-md-6 col-sm-8 clearfix">
              
                  <div className="search-box pull-left">
                    <form action="#">
                      <input type="text" name="search" placeholder="Search..." required />
                      <i className="ti-search" />
                    </form>
                  </div>
                </div>
                {/* profile info & task notification */}
              </div>
            </div>
            {/* header area end */}
            {/* page title area start */}
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Dashboard</h4>
                    <ul className="breadcrumbs pull-left">
                    <li> <Link to="/admindash" > <a >Home</a> </Link></li>
                      <li><span>Payment anagement </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <div className="row">
                {/* data table start */}
                <div className="col-12 mt-5">
                  <div className="row">
                    <div className="col-3">Pending Payment <input type="radio" name="answer" defaultValue="completepay" /></div>
                    <div className="col-3">Complete Payment<input type="radio" name="answer" defaultValue="Pennding" />
                    </div>
                  </div>
                  <br />
                  <div className="card">
                    <div className="card-body" id="paymenttable">
                      <h4 className="header-title">Pennding Payment</h4>
                      <div className="data-tables">
                      <table id="example" class="display">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount </th>
                <th>Currency</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Praveen</td>
                <td> hello@gmail.com </td>
                <td>$50</td>
                <td>Doller</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Pay
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* data table end */}
                {/* Primary table start */}
                <div className="col-12 mt-5">
                  <div className="card">
                    <div className="card-body" id="Completetable">
                      <h4 className="header-title">Complete Payment</h4>
                   
                      <table id="example2" class="display">
            <thead>
              <tr>
                <th>ID </th>
                <th>Name</th>
                <th>Email </th>
                <th>Date</th>
                <th>Payment Method</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td> parveen </td>
                <td>praveem@gmail.com</td>
                <td>2020.30.30</td>
                <td> card  </td>
                <td> 500$  </td>
                 
              
              </tr>
            </tbody>
          </table>
                      
                    </div>
                  </div>
                </div>
                {/* Primary table end */}
              </div>
            </div>
          </div>
          {/* main content area end */}
  
        </div>
       
      </div>
      );
    }
  }

export default AdminPaymentAnagement

