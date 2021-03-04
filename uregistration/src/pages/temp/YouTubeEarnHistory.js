import React, { Component } from 'react';
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Helmet } from "react-helmet";
import adminEarningService from "../../services/adminEarningService";
import Sidebar from '../../components/Sidebar';

import { Link } from 'react-router-dom';

class YouTubeEarnHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


      service: [],
      customer: []

    }
  }


  componentDidMount() {
    adminEarningService.getSocialEarning("youtube").then(res => {

      this.setState({ service: res.data });

    });
    adminEarningService.getUserSocialEarning("youtube").then(res => {

      this.setState({ customer: res.data });

    });
  }

  componentDidUpdate() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
      $("#example2").DataTable();
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


          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
          <script src="https://code.highcharts.com/highcharts.js"></script>
          <script src="https://code.highcharts.com/modules/exporting.js"></script>
          <script src="https://code.highcharts.com/modules/export-data.js"></script>

          <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
          <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>


          <script src="/assetsadmin/js/maps.js"></script>

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
                      <li><span>Earn History</span></li>
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
                  <div className="card">
                    <div className="card-body">

                      <h4 className="header-title">Youtube Earn History </h4>
                      <div className="data-tables">
                        <div className="container">
                          <table id="example" class="display">
                            <thead>
                              <tr>
                                <th>Service type</th>
                                <th>Link</th>
                                <th>Engagement </th>

                              </tr>
                            </thead>
                            <tbody>
                              {this.state.service.map((data) => {
                                return (
                                  <tr>
                                    <td>{data.service}</td>
                                    <td>{data.url}</td>
                                    <td>{data.count}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* data table end */}


                {/* data table start */}
                <div className="col-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Customers Earning History </h4>
                      <div className="data-tables">
                        <div className="container">
                          <table id="example2" class="display">
                            <thead>
                              <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name </th>
                                <th>Earn  Point</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.customer.map((data) => {
                                return (
                                  <tr>
                                    <td>{data.email}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.lname}</td>
                                    <td>{data.earning}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* data table end */}
              </div>
            </div>
          </div>
          {/* main content area end */}

        </div>
        {/* page container area end */}
      </div>
    );
  }
}

export default YouTubeEarnHistory
