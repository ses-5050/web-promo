
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import { Helmet } from "react-helmet";
import moment from 'moment'
import OrderService from "../../services/orderService";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import $ from 'jquery';
import Sidebar from '../../components/Sidebar';

class AdminManageOrders extends React.Component {


  constructor(props) {
    super(props)
    this.state = {

      status: '',
      orderdata: []

    }
  }

  componentDidMount() {
    OrderService.getOrderData().then(res => {

      this.setState({ orderdata: res.data });

    });
  }

  componentDidUpdate() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
      $("#example2").DataTable();
    });
  }

  confirmOrder(order) {
    OrderService.confirmOrder(order.oid).then(res => {

      OrderService.getOrderData().then(res => {

        this.setState({ orderdata: res.data });

      });

    });
  }

  stopOrder(order) {
    OrderService.stopOrder(order.oid).then(res => {

      OrderService.getOrderData().then(res => {

        this.setState({ orderdata: res.data });

      });

    });
  }

  endOrder(order) {
    OrderService.endOrder(order.oid).then(res => {

      OrderService.getOrderData().then(res => {

        this.setState({ orderdata: res.data });

      });

    });
  }
  render() {
    //Datatable HTML

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



        </Helmet>
        <Sidebar />
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
                      <li><span>Manage Orders</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <div className="row">

                {/* testtable */}
                <div className="MainDiv">


                  <div className="container">

                    <div className="col-12 mt-5">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="header-title">Manage Orders</h4>
                          <div className="data-tables">
                            <div className="container">
                              <table id="example" class="display">
                                <thead>
                                  <tr>
                                    <th>Order ID</th>
                                    <th>Name</th>
                                    <th>Network type</th>
                                    <th>Date</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                    <th>Payment methods</th>
                                    <th>View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.orderdata.map((data) => {
                                    return (
                                      // <tr>
                                      //   <th scope="row">{data.count}</th>
                                      //   <td>${data.price}</td>
                                      //   <td>{data.country}</td>

                                      //   <td>
                                      //     <i
                                      //       class="ti-pencil"
                                      //       data-toggle="modal"
                                      //       data-target="#exampleModalLong"
                                      //     ></i>
                                      //   </td>
                                      // </tr>
                                      <tr>
                                        <td>{data.id}</td>
                                        <td>{data.user.fname} {data.user.lname}</td>
                                        <td>{data.social}</td>
                                        <td>{moment(data.date).format('DD/MM/YYYY')}</td>
                                        <td>{data.cost}</td>
                                        <td>{data.status}</td>
                                        <td>{data.pay_method}</td>
                                        <td><i className="ti-eye" data-toggle="modal" data-target={"#" + data.id} /></td>
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




                    {/* <table id="example" class="display">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Name</th>
                          <th>Network type</th>
                          <th>Date</th>
                          <th>Cost</th>
                          <th>Status</th>
                          <th>Payment methods</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>




                        <tr>
                          <td>001</td>
                          <td>Praveen</td>
                          <td>Youtube</td>
                          <td>2020-10-12</td>
                          <td>500$</td>
                          <td>Pendding</td>
                          <td><i className="ti-eye" data-toggle="modal" data-target="#exampleModalLong" /></td>
                          <td>Credite Crad</td>
                        </tr>






                      </tbody>

                    </table> */}


                  </div>



                  {/* data table start */}


                  {/* Modal */}

                  {this.state.orderdata.map((data) => {

                    return (
                      <div className="modal fade" id={data.id}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Manage Orders Views</h5>
                              <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Social Media: {data.social} </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Service type: {data.service} </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Link : {data.social_link}</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Quantity : {data.qty} </label>
                                </div>
                              </div>
                              <div className="row">
                                {(() => {
                                  if (data.status === "pending release") {
                                    return (
                                      <div className="col-sm"> <label htmlFor="lname">
                                        <button class="button button-primary" data-dismiss="modal" onClick={() => this.confirmOrder({ oid: data.id })} style={{ padding: "5px", border: "solid 1px", borderRadius: "10px", backgroundColor: "#33BBFF", color: "white" }}>Accept</button>
                                      </label>
                                      </div>
                                    )
                                  } else if (data.status === "blocked") {
                                    return (
                                      <div className="col-sm" > <label htmlFor="lname">
                                        <button class="button button-primary" data-dismiss="modal" onClick={() => this.confirmOrder({ oid: data.id })} style={{ padding: "5px", border: "solid 1px", borderRadius: "10px", backgroundColor: "#33BBFF", color: "white" }}>Active Again</button>
                                      </label>
                                      </div>
                                    )
                                  } else if (data.status === "confirmed") {
                                    return (
                                      <div className="col-sm">
                                        <label htmlFor="lname">
                                          <button class="button button-danger" data-dismiss="modal" onClick={() => this.stopOrder({ oid: data.id })} style={{ padding: "8px", border: "solid 1px", borderRadius: "10px", backgroundColor: "red", color: "white" }}>Stop</button>
                                          <button class="button button-primary" data-dismiss="modal" onClick={() => this.endOrder({ oid: data.id })} style={{ padding: "8px", border: "solid 1px", borderRadius: "10px", backgroundColor: "#667FFF", color: "white" }}>Complete</button>
                                        </label>
                                      </div>
                                    )
                                  } else {
                                    return (
                                      <div className="col-sm" > <label htmlFor="lname">
                                        <button class="button button-primary" disabled="disable" data-dismiss="modal" style={{ padding: "5px", border: "solid 1px", borderRadius: "10px", backgroundColor: "gray", color: "white" }}>Order Completed</button>
                                      </label>
                                      </div>
                                    )
                                  }

                                })()}

                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}



                </div>
                {/* data table end */}
              </div>
            </div>
          </div>
          {/* main content area end */}

        </div>
        {/* page container area end */}
      </div >

    );
  }
}


export default AdminManageOrders

