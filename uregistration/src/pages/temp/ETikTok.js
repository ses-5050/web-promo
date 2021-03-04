
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PackageService from "../../services/packageService";
import toast from 'toast-me';
import { Helmet } from "react-helmet";
import Sidebar from '../../components/Sidebar';


class ETikTok extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      tfollowmin: 0,
      tfollowmax: 0,
      tlikemin: 0,
      tlikemax: 0,
      tfpackqty: '',
      tfpackprice: '',
      tfpackcountry: '',
      tlpackqty: '',
      tlpackprice: '',
      tlpackcountry: '',
      tfollowdata: [],
      tlikedata: []

    }
  }

  componentDidMount() {
    PackageService.getPackageMinMax("tiktok", "followers").then(res => {

      if (JSON.stringify(res.data.social_name) != null) {
        this.setState(
          {
            tfollowmin: res.data.min,
            tfollowmax: res.data.max
          }
        );
      }
    });

    PackageService.getPackageMinMax("tiktok", "likes").then(res => {

      if (JSON.stringify(res.data.social_name) != null) {
        this.setState(
          {
            tlikemin: res.data.min,
            tlikemax: res.data.max
          }
        );
      }
    });

    PackageService.getPackageData("tiktok", "followers").then(res => {

      this.setState({ tfollowdata: res.data });
    });

    PackageService.getPackageData("tiktok", "likes").then(res => {

      this.setState({ tlikedata: res.data });

    });
  }

  saveTfollowersMinMax(social, service) {
    let settings = { social_name: social, service: service, min: this.state.tfollowmin, max: this.state.tfollowmax }
    PackageService.createPackageMinMax(settings)
      .then(res => {
        toast(res.data)
      });
  }

  saveTlikeMinMax(social, service) {
    let settings = { social_name: social, service: service, min: this.state.tlikemin, max: this.state.tlikemax }
    PackageService.createPackageMinMax(settings)
      .then(res => {
        toast(res.data)
      });
  }

  saveTfollowPackage = event => {
    let settings = { social_name: "tiktok", service: "followers", min: this.state.tfollowmin, max: this.state.tfollowmax, count: this.state.tfpackqty, price: this.state.tfpackprice, country: this.state.tfpackcountry }
    PackageService.saveInsPackage(settings)
      .then(res => {
        toast(res.data)
      });
  };

  saveTlikePackage = event => {
    let settings = { social_name: "tiktok", service: "likes", min: this.state.tlikemin, max: this.state.tlikemax, count: this.state.tlpackqty, price: this.state.tlpackprice, country: this.state.tlpackcountry }
    PackageService.saveInsPackage(settings)
      .then(res => {
        toast(res.data)
      });
  };

  changeTFollowMin = event => {
    this.setState({ tfollowmin: event.target.value });
  };

  changeTFollowMax = event => {
    this.setState({ tfollowmax: event.target.value });
  };

  changeTLikeMin = event => {
    this.setState({ tlikemin: event.target.value });
  };

  changeTLikeMax = event => {
    this.setState({ tlikemax: event.target.value });
  };

  changeTLikeMax = event => {
    this.setState({ tlikemax: event.target.value });
  };

  changeTFpackQty = event => {
    this.setState({ tfpackqty: event.target.value });
  };

  changeTFpackPrice = event => {
    this.setState({ tfpackprice: event.target.value });
  };

  changeTFpackCountry = event => {
    this.setState({ tfpackcountry: event.target.value });
  };

  changeTlpackQty = event => {
    this.setState({ tlpackqty: event.target.value });
  };

  changeTlpackPrice = event => {
    this.setState({ tlpackprice: event.target.value });
  };

  changeTlpackCountry = event => {
    this.setState({ tlpackcountry: event.target.value });
  };

  render() {

    return (
      <div>
        <div id="preloader">
          <div className="loader" />
        </div>
        {/* preloader area end */}
        {/* page container area start */}
        <div className="page-container">
          {/* sidebar menu area start */}
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
          {/* sidebar menu area end */}
          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <div className="header-area">
              <div className="row align-items-center">
                {/* nav and search button */}
                <div className="col-md-6 col-sm-8 clearfix">
                  <div className="nav-btn pull-left">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="search-box pull-left">
                    <input type="text" name="search" placeholder="Search..." required />
                    <i className="ti-search" />
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
                      <li><span>TikTok</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <h4 className="header-title1" style={{ textAlign: 'center', fontSize: '50px', padding: '10px' }}>TikTok</h4>
              <div className="row">
                {/* table primary start */}
                <div className="col-lg-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Followers</h4>
                      {/* Button */}
                      <div className="row">
                        <div className="col-sm text-right">
                          <button type="button" className="btn btn-success" style={{ width: '20%' }} data-toggle="modal" data-target="#addtfmodal">Add</button>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="single-table">
                        <div className="table-responsive">
                          <br /><table className="table text-center">
                            <thead className="text-uppercase bg-primary">
                              <tr className="text-white">
                                <th scope="col">Followers</th>
                                <th scope="col" style={{ textAlign: 'center' }}>price</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Country</th>
                                <th scope="col" style={{ textAlign: 'center' }}>action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.tfollowdata.map((data) => {
                                return (
                                  <tr>
                                    <th scope="row">{data.count}</th>
                                    <td>${data.price}</td>
                                    <td>{data.country}</td>

                                    <td>
                                      <i
                                        class="ti-pencil"
                                        data-toggle="modal"
                                        data-target="#exampleModalLong"
                                      ></i>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Vertically centered modal start */}
                    <div className="col-lg-6 mt-5">
                      {/* Modal */}
                      <div className="modal fade" id="addtfmodal">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">TikTok Follow Settings</h5>
                              <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                                  <input style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                    type="text"
                                    name="lname"
                                    value={this.state.tfpackqty}
                                    onChange={this.changeTFpackQty} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Price : </label>
                                  <input
                                    type="text"
                                    style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                    name="lname"
                                    value={this.state.tfpackprice}
                                    onChange={this.changeTFpackPrice}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div class="form-group">
                                  <label for="lname">Country : </label>
                                  <select class="form-select" id="i_f_country" value={this.state.tfpackcountry}
                                    onChange={this.changeTFpackCountry} aria-label="Default select example">
                                    <option selected>--Select--</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="GE">Georgia</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IL">Israel</option>
                                    <option value="JP">Japan</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="MM">Myanmar (Burma)</option>
                                    <option value="NP">Nepal</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PH">Philippines</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SG">Singapore</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TP">East Timor</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="YE">Yemen</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-success" onClick={this.saveTfollowPackage}>Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Vertically centered modal end */}
                  </div>
                </div>
                {/* table primary end */}
                {/* 2nd table */}
                {/* basic table start */}
                <div className="col-lg-6 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Followers Min - Max</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <thead className="text-uppercase">
                              <tr>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label htmlFor="fname">Min:</label><br />
                                  <input
                                    type="text"
                                    name="fname"
                                    placeholder="ex:Min 10"
                                    style={{ border: "1px solid black", textAlign: "center" }}
                                    value={this.state.tfollowmin}
                                    onChange={this.changeTFollowMin}
                                  />
                                  <br />
                                  <label htmlFor="lname">Max:</label><br />
                                  <input
                                    type="text"
                                    name="lname"
                                    placeholder="ex:Max 100000"
                                    style={{ border: "1px solid black", textAlign: "center" }}
                                    value={this.state.tfollowmax}
                                    onChange={this.changeTFollowMax}
                                  />
                                  <br />
                                  <br />
                                  <button
                                    type="submit"
                                    class="btn btn-success"
                                    onClick={() => this.saveTfollowersMinMax("tiktok", "followers")}
                                  >Save</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main content area end */}
          {/* table primary start */}
          <div className="col-lg-12 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Like</h4>
                {/* Button */}
                <div className="row">
                  <div className="col-sm text-right">
                    <button type="button" className="btn btn-success" style={{ width: '20%' }} data-toggle="modal" data-target="#addtlmodal">Add</button>
                  </div>
                </div>
                {/* Button */}
                <div className="single-table">
                  <div className="table-responsive">
                    <br /><table className="table text-center">
                      <thead className="text-uppercase bg-primary">
                        <tr className="text-white">
                          <th scope="col">Like</th>
                          <th scope="col" style={{ textAlign: 'center' }}>price</th>
                          <th scope="col" style={{ textAlign: 'center' }}>Country</th>
                          <th scope="col" style={{ textAlign: 'center' }}>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.tlikedata.map((data) => {
                          return (
                            <tr>
                              <th scope="row">{data.count}</th>
                              <td>${data.price}</td>
                              <td>{data.country}</td>

                              <td>
                                <i
                                  class="ti-pencil"
                                  data-toggle="modal"
                                  data-target="#exampleModalLong"
                                ></i>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Vertically centered modal start */}
              <div className="col-lg-6 mt-5">
                {/* Modal */}
                <div className="modal fade" id="addtlmodal">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Tiktok Like Settings</h5>
                        <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                            <input style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                              type="text"
                              name="lname"
                              value={this.state.tlpackqty}
                              onChange={this.changeTlpackQty} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm"> <label htmlFor="lname">Price : </label>
                            <input
                              type="text"
                              style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                              name="lname"
                              value={this.state.tlpackprice}
                              onChange={this.changeTlpackPrice}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div class="form-group">
                            <label for="lname">Country : </label>
                            <select class="form-select" id="i_f_country" value={this.state.tvpackcountry}
                              onChange={this.changeTvpackCountry} aria-label="Default select example">
                              <option selected>--Select--</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AM">Armenia</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BT">Bhutan</option>
                              <option value="IO">British Indian Ocean Territory</option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="KH">Cambodia</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">Cocos (Keeling) Islands</option>
                              <option value="GE">Georgia</option>
                              <option value="HK">Hong Kong</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IL">Israel</option>
                              <option value="JP">Japan</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KP">Korea, Democratic People's Republic of</option>
                              <option value="KR">Korea, Republic of</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Lao</option>
                              <option value="LB">Lebanon</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="MN">Mongolia</option>
                              <option value="MM">Myanmar (Burma)</option>
                              <option value="NP">Nepal</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PH">Philippines</option>
                              <option value="QA">Qatar</option>
                              <option value="RU">Russian Federation</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SG">Singapore</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SY">Syria</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TH">Thailand</option>
                              <option value="TP">East Timor</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VN">Vietnam</option>
                              <option value="YE">Yemen</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" onClick={this.saveTlikePackage}>Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vertically centered modal end */}
              {/* Editbuttonpopbox */}
              {/* Vertically centered modal start */}
              <div className="col-lg-6 mt-5">
                {/* Modal */}
                <div className="modal fade" id="exampleModalLong">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title"> Edit</h5>
                        <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                            <input type="text" id="lname" name="lname" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm"> <label htmlFor="lname">Price : </label>
                            <input type="text" style={{ marginLeft: '27px' }} id="lname" name="lname" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm"> <label htmlFor="lname">Country : </label>
                            <select style={{ marginLeft: '3px' }} name="Country" id="Country">
                              <option value="volvo">Srilanka</option>
                              <option value="saab">Miyanmar</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vertically centered modal end */}
              {/* Editbuttonpopbox-end */}
            </div>
          </div>
          {/* table primary end */}
          {/* 2nd table */}
          {/* basic table start */}
          <div className="col-lg-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Like Min - Max</h4>
                <div className="single-table">
                  <div className="table-responsive">
                    <table className="table text-center">
                      <thead className="text-uppercase">
                        <tr>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label for="fname">Min:</label>
                            <br />
                            <input
                              type="text"
                              name="fname"
                              placeholder="ex:Min 1000"
                              style={{ border: "1px solid black", textAlign: "center" }}
                              value={this.state.tlikemin}
                              onChange={this.changeTLikeMin}
                            />
                            <br />
                            <label for="lname">Max:</label>
                            <br />
                            <input
                              type="text"
                              name="lname"
                              placeholder="ex:Max 100000"
                              style={{ border: "1px solid black", textAlign: "center" }}
                              value={this.state.tlikemax}
                              onChange={this.changeTLikeMax}
                            />
                            <br />
                            <br />
                            <button
                              type="submit"
                              class="btn btn-success"
                              onClick={() => this.saveTlikeMinMax("tiktok", "likes")}
                            >Save</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* basic table end */}
          {/* 2nd table */}
        </div>
      </div>

    );
  }
}

export default ETikTok

