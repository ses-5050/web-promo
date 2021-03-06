
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import Sidebar from '../../components/Sidebar';
import { Helmet } from "react-helmet";
import paymentService from '../../services/paymentService';

class AdminPaymentAnagement extends React.Component {

  constructor(props) {
    super(props)
    this.state = {


      pending: []

    }
  }

  componentDidMount() {
    //initialize datatable
    var completediv = document.getElementById("completediv");
    completediv.setAttribute("style", "display:none");
    paymentService.getPending().then(res => {
      this.setState({ pending: res.data });
    });
  }

  componentDidUpdate() {
    $(document).ready(function () {
      $("#example").DataTable();
      $("#example2").DataTable();
    });
  }

  changePaymentType = (e) => {
    var pendingdiv = document.getElementById("pendingdiv");
    var completediv = document.getElementById("completediv");
    var downloadbtn = document.getElementById("downloadbtn");
    if (e.target.id == "pending") {
      pendingdiv.setAttribute("style", "display:");
      completediv.setAttribute("style", "display:none");
      downloadbtn.setAttribute("style", "display:");
    } else {
      pendingdiv.setAttribute("style", "display:none");
      completediv.setAttribute("style", "display:");
      downloadbtn.setAttribute("style", "display:none");
    }
  }

  generatePaymentExcel = (e) => {
    paymentService.generatePayment().then(response => {
      let fileName = response.headers["content-disposition"].split("filename=")[1];
      if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE variant
        window.navigator.msSaveOrOpenBlob(new Blob([response.data], { type: 'application/octet-stream' }),
          fileName);
      } else {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/octet-stream' }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', response.headers["content-disposition"].split("filename=")[1]);
        document.body.appendChild(link);
        link.click();
      }

    });
  }


  render() {

    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/util1.css" />
          <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/main1.css" />
          <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

          <link rel="stylesheet" href="/assetsadmin/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/themify-icons.css" />
          <link rel="stylesheet" href="/assetsadmin/css/metisMenu.css" />
          <link rel="stylesheet" href="/assetsadmin/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/slicknav.min.css" />


          <link rel="stylesheet" href="/assetsadmin/css/typography.css" />

          <link rel="stylesheet" href="/assetsadmin/css/styles.css" />
          <link rel="stylesheet" href="/assetsadmin/css/responsive.css" />
          <script src="/assetsadmin/js/vendor/modernizr-2.8.3.min.js"></script>

          <script src="/assetsadmin/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="/assetsadmin/js/popper.min.js"></script>
          <script src="/assetsadmin/js/bootstrap.min.js"></script>
          <script src="/assetsadmin/js/owl.carousel.min.js"></script>
          <script src="/assetsadmin/js/metisMenu.min.js"></script>
          <script src="/assetsadmin/js/jquery.slimscroll.min.js"></script>
          <script src="/assetsadmin/js/jquery.slicknav.min.js"></script>


          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
          <script src="https://code.highcharts.com/highcharts.js"></script>
          <script src="https://code.highcharts.com/modules/exporting.js"></script>
          <script src="https://code.highcharts.com/modules/export-data.js"></script>

          <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
          <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>


          <script src="/assetsadmin/js/maps.js"></script>








          <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css" />
          <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" />
          <link rel="stylesheet" type="text/css"
            href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css" />
          <link rel="stylesheet" type="text/css"
            href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css" />



        </Helmet>
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
                    <div className="col-4 col-sm-4 col-md-3">Pending Payment <input id="pending" defaultChecked type="radio" name="answer" defaultValue="completepay" onClick={this.changePaymentType} /></div>
                    <div className="col-4 col-sm-4 col-md-3">Complete Payment<input id="completed" type="radio" name="answer" defaultValue="Pennding" onClick={this.changePaymentType} />
                    </div>
                    <div className="col-4 col-sm-4 col-md-3" style={{ position: "absolute", right: "0px", paddingLeft: "10px" }} >
                      <div id="downloadbtn">
                        <button className="button button-success" style={{ border: "2px solid", padding: "10px", borderRadius: "5px", backgroundColor: "blue", color: "white" }} onClick={this.generatePaymentExcel}><i class="fa fa-download"></i>Generate Payment List</button>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5" id="pendingdiv">

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
                              {/* <th>Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.pending.map((data) => {
                              return (
                                <tr>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>{data.amount}</td>
                                  <td>{data.currency}</td>
                                </tr>
                              );
                            })}
                            {/* <tr>
                              <td>Praveen</td>
                              <td> hello@gmail.com </td>
                              <td>$50</td>
                              <td>Doller</td>
                              <td>
                                <button type="button" className="btn btn-success">
                                  Pay
                  </button>
                              </td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>

                    </div>
                  </div>
                </div>
                {/* data table end */}
                {/* Primary table start */}
                <div className="col-12 mt-5" id="completediv">
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

