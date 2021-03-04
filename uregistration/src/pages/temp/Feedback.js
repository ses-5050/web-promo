import React, { Component } from 'react';
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Sidebar from '../../components/Sidebar';

class Feedback extends React.Component {
  componentDidMount() {
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
                      <li><span>Feedback</span></li>
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
                      <h4 className="header-title">Feedback</h4>
                      <div className="data-tables">
                        <table id="example" class="display">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Subject</th>
                              <th>Question Type</th>
                              <th>View</th>
                              <th>Date</th>

                            </tr>
                          </thead>
                          <tbody>




                            <tr>
                              <td>Praveen</td>
                              <td>Praveen@gmail.com</td>
                              <td>Youtube Views</td>
                              <td>Cancel Order</td>
                              <td>
                                <i
                                  class="ti-eye"
                                  data-toggle="modal"
                                  data-target="#exampleModalLong"
                                ></i>
                              </td>
                              <td>2020-10-12</td>
                            </tr>






                          </tbody>

                        </table>
                      </div>
                    </div>
                    {/* Vertically centered modal start */}
                    <div className="col-lg-6 mt-5">
                      {/* Modal */}
                      <div className="modal fade" id="exampleModalLong">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Feedback</h5>
                              <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                            </div>
                            <div className="modal-body">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since
                              the 1500s,
                              when an unknown printer took a galley of type and scrambled it to
                              make a type specimen book.
                                  </p>
                              <br />
                              <div className="row">
                                <div className="col-sm">
                                  <label htmlFor="lname">Reply : </label><br />
                                  <textarea id="w3review" name="w3review" rows={4} cols={50} style={{border:"solid 2px"}}/>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-primary" data-dismiss="modal">Send</button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Vertically centered modal end */}
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


export default Feedback
