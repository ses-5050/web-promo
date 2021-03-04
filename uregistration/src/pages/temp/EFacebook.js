
import React from 'react';

import { Link } from 'react-router-dom';
import PackageService from "../../services/packageService";
import toast from 'toast-me';
import { Helmet } from "react-helmet";
import Sidebar from '../../components/Sidebar';

class EFacebook extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            fpalmin: 0,
            fpalmax: 0,
            fpolmin: 0,
            fpolmax: 0,
            fsharemin: 0,
            fsharemax: 0,
            fpalpackqty: '',
            fpalpackprice: '',
            fpalpackcountry: '',
            fpolpackqty: '',
            fpolpackprice: '',
            fpolpackcountry: '',
            fshpackqty: '',
            fshpackprice: '',
            fshpackcountry: '',
            fpaldata: [],
            fpoldata: [],
            fshdata: []

        }
    }

    componentDidMount() {
        PackageService.getPackageMinMax("facebook", "page like").then(res => {

            if (JSON.stringify(res.data.social_name) != null) {
                this.setState(
                    {
                        fpalmin: res.data.min,
                        fpalmax: res.data.max
                    }
                );
            }
        });

        PackageService.getPackageMinMax("facebook", "post like").then(res => {

            if (JSON.stringify(res.data.social_name) != null) {
                this.setState(
                    {
                        fpolmin: res.data.min,
                        fpolmax: res.data.max
                    }
                );
            }
        });

        PackageService.getPackageMinMax("facebook", "share").then(res => {

            if (JSON.stringify(res.data.social_name) != null) {
                this.setState(
                    {
                        fsharemin: res.data.min,
                        fsharemax: res.data.max
                    }
                );
            }
        });

        PackageService.getPackageData("facebook", "page like").then(res => {

            this.setState({ fpaldata: res.data });
        });

        PackageService.getPackageData("facebook", "post like").then(res => {

            this.setState({ fpoldata: res.data });
        });

        PackageService.getPackageData("facebook", "share").then(res => {

            this.setState({ fshdata: res.data });
        });

    }

    saveFpalMinMax(social, service) {
        let settings = { social_name: social, service: service, min: this.state.fpalmin, max: this.state.fpalmax }
        PackageService.createPackageMinMax(settings)
            .then(res => {
                toast(res.data)
            });
    }

    saveFpolMinMax(social, service) {
        let settings = { social_name: social, service: service, min: this.state.fpolmin, max: this.state.fpolmax }
        PackageService.createPackageMinMax(settings)
            .then(res => {
                toast(res.data)
            });
    }

    saveFshareMinMax(social, service) {
        let settings = { social_name: social, service: service, min: this.state.fsharemin, max: this.state.fsharemax }
        PackageService.createPackageMinMax(settings)
            .then(res => {
                toast(res.data)
            });
    }

    saveFpalPackage = event => {
        let settings = { social_name: "facebook", service: "page like", min: this.state.fpalmin, max: this.state.fpalmax, count: this.state.fpalpackqty, price: this.state.fpalpackprice, country: this.state.fpalpackcountry }
        PackageService.saveInsPackage(settings)
            .then(res => {
                toast(res.data)
            });
    };

    saveFpolPackage = event => {
        let settings = { social_name: "facebook", service: "post like", min: this.state.fpolmin, max: this.state.fpolmax, count: this.state.fpolpackqty, price: this.state.fpolpackprice, country: this.state.fpolpackcountry }
        PackageService.saveInsPackage(settings)
            .then(res => {
                toast(res.data)
            });
    };

    saveFsharePackage = event => {
        let settings = { social_name: "facebook", service: "share", min: this.state.fsharemin, max: this.state.fsharemax, count: this.state.fshpackqty, price: this.state.fshpackprice, country: this.state.fshpackcountry }
        PackageService.saveInsPackage(settings)
            .then(res => {
                toast(res.data)
            });
    };

    changeFpalMin = event => {
        this.setState({ fpalmin: event.target.value });
    };

    changeFpalMax = event => {
        this.setState({ fpalmax: event.target.value });
    };

    changeFpolMin = event => {
        this.setState({ fpolmin: event.target.value });
    };

    changeFpolMax = event => {
        this.setState({ fpolmax: event.target.value });
    };

    changeFshareMin = event => {
        this.setState({ fsharemin: event.target.value });
    };

    changeFshareMax = event => {
        this.setState({ fsharemax: event.target.value });
    };

    changeFpalpackQty = event => {
        this.setState({ fpalpackqty: event.target.value });
    };

    changeFpalpackPrice = event => {
        this.setState({ fpalpackprice: event.target.value });
    };

    changeFpalpackCountry = event => {
        this.setState({ fpalpackcountry: event.target.value });
    };

    changeFpolpackQty = event => {
        this.setState({ fpolpackqty: event.target.value });
    };

    changeFpolpackPrice = event => {
        this.setState({ fpolpackprice: event.target.value });
    };

    changeFpolpackCountry = event => {
        this.setState({ fpolpackcountry: event.target.value });
    };

    changeFsharepackQty = event => {
        this.setState({ fshpackqty: event.target.value });
    };

    changeFsharepackPrice = event => {
        this.setState({ fshpackprice: event.target.value });
    };

    changeFsharepackCountry = event => {
        this.setState({ fshpackcountry: event.target.value });
    };


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
                    <div class="loader"></div>
                </div>
                {/* <!-- preloader area end -->
    <!-- page container area start --> */}
                <div class="page-container">
                    {/* <!-- sidebar menu area start --> */}

                    {/* <!-- sidebar menu area end -->
        <!-- main content area start --> */}
                    <div class="main-content">
                        {/* <!-- header area start --> */}
                        <div class="header-area">
                            <div class="row align-items-center">
                                {/* <!-- nav and search button --> */}
                                <div class="col-md-6 col-sm-8 clearfix">
                                    <div class="nav-btn pull-left">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div class="search-box pull-left">
                                        <input type="text" name="search" placeholder="Search..." required />
                                        <i class="ti-search"></i>
                                    </div>
                                </div>
                                {/* <!-- profile info & task notification --> */}

                            </div>
                        </div>
                        {/* <!-- header area end -->
            <!-- page title area start --> */}
                        <div class="page-title-area">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <div class="breadcrumbs-area clearfix">
                                        <h4 class="page-title pull-left">Dashboard</h4>
                                        <ul class="breadcrumbs pull-left">
                                            <li> <Link to="/admindash" > <a >Home</a> </Link></li>
                                            <li><span>Facbook</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- page title area end --> */}
                        <div class="main-content-inner">
                            <h4 class="header-title1" style={{ textAlign: "center", fontSize: "50px", padding: "10px;" }}>Facebook</h4>
                            <div class="row">

                                {/* <!-- table primary start --> */}
                                <div class="col-lg-12 mt-5">

                                    <div class="card">

                                        <div class="card-body">

                                            <h4 class="header-title">Page Like</h4>

                                            {/* <!-- Button --> */}
                                            <div class="row" style={{ padding: "1%" }}>
                                                <div class="col-sm text-right">
                                                    <button type="button" class="btn btn-success" style={{ width: "20%" }}
                                                        data-toggle="modal" data-target="#fpaladd">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- Button --> */}



                                            <div class="single-table">
                                                <div class="table-responsive">
                                                    <table class="table text-center">
                                                        <thead class="text-uppercase bg-primary">


                                                            <tr class="text-white">
                                                                <th scope="col">Like</th>
                                                                <th scope="col" style={{ textalign: "center" }}>price</th>
                                                                <th scope="col" style={{ textalign: "center" }}>Country</th>

                                                                <th scope="col" style={{ textalign: "center" }}>action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody><br />
                                                            {this.state.fpaldata.map((data) => {
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
                                        {/*                       
<!-- Vertically centered modal start --> */}
                                        <div class="col-lg-6 mt-5">
                                            {/* <!-- Modal --> */}
                                            <div class="modal fade" id="fpaladd">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Facebook Page Like Settings</h5>
                                                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    {" "}
                                                                    <label for="lname">Quantity : </label>
                                                                    <input
                                                                        style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                                                        type="text"
                                                                        name="lname"
                                                                        value={this.state.fpalpackqty}
                                                                        onChange={this.changeFpalpackQty}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    <label for="lname">Price : </label>
                                                                    <input
                                                                        type="text"
                                                                        style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                                                        name="lname"
                                                                        value={this.state.fpalpackprice}
                                                                        onChange={this.changeFpalpackPrice}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    {" "}
                                                                    <div class="form-group">
                                                                        <label for="lname">Country : </label>
                                                                        <select class="form-select" id="i_f_country" value={this.state.fpalpackcountry}
                                                                            onChange={this.changeFpalpackCountry} aria-label="Default select example">
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
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-success" onClick={this.saveFpalPackage}>Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* post like */}
                                            <div class="modal fade" id="fpoladd">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Facebook Post Like Settings</h5>
                                                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    {" "}
                                                                    <label for="lname">Quantity : </label>
                                                                    <input
                                                                        style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                                                        type="text"
                                                                        name="lname"
                                                                        value={this.state.fpolpackqty}
                                                                        onChange={this.changeFpolpackQty}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    <label for="lname">Price : </label>
                                                                    <input
                                                                        type="text"
                                                                        style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                                                        name="lname"
                                                                        value={this.state.fpolpackprice}
                                                                        onChange={this.changeFpolpackPrice}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    {" "}
                                                                    <div class="form-group">
                                                                        <label for="lname">Country : </label>
                                                                        <select class="form-select" id="i_f_country" value={this.state.fpolpackcountry}
                                                                            onChange={this.changeFpolpackCountry} aria-label="Default select example">
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
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-success" onClick={this.saveFpolPackage}>Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* post share */}
                                            <div class="modal fade" id="fshareadd">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Facebook Share Settings</h5>
                                                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    {" "}
                                                                    <label for="lname">Quantity : </label>
                                                                    <input
                                                                        style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                                                        type="text"
                                                                        name="lname"
                                                                        value={this.state.fshpackqty}
                                                                        onChange={this.changeFsharepackQty}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    <label for="lname">Price : </label>
                                                                    <input
                                                                        type="text"
                                                                        style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                                                        name="lname"
                                                                        value={this.state.fshpackprice}
                                                                        onChange={this.changeFsharepackPrice}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm">
                                                                    {" "}
                                                                    <div class="form-group">
                                                                        <label for="lname">Country : </label>
                                                                        <select class="form-select" id="i_f_country" value={this.state.fshpackcountry}
                                                                            onChange={this.changeFsharepackCountry} aria-label="Default select example">
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
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-success" onClick={this.saveFsharePackage}>Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Vertically centered modal end --> */}

                                    </div>




                                </div>



                            </div>
                            {/* <!-- table primary end -->


                <!-- 2nd table -->
                    <!-- basic table start --> */}
                            <div class="col-lg-6 mt-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title">Like Min - Max</h4>
                                        <div class="single-table">
                                            <div class="table-responsive">
                                                <table class="table text-center">
                                                    <thead class="text-uppercase">
                                                        <tr>



                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <label for="fname">Min:</label><br />
                                                                <input type="text" name="fname"
                                                                    placeholder="ex:Min 10"
                                                                    style={{ border: "1px solid black", textAlign: "center" }}
                                                                    value={this.state.fpalmin}
                                                                    onChange={this.changeFpalMin} /><br />
                                                                <label for="lname">Max:</label><br />
                                                                <input type="text" name="lname"
                                                                    placeholder="ex:Max 100000"
                                                                    style={{ border: "1px solid black", textAlign: "center" }}
                                                                    value={this.state.fpalmax}
                                                                    onChange={this.changeFpalMax} /><br /><br />
                                                                <button type="submit" class="btn btn-success" value="Submit" onClick={() => this.saveFpalMinMax("facebook", "page like")}>Save</button>

                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- basic table end --> */}


                            {/* <!-- 2 --> <br/> */}

                            {/* <!-- table primary start --> */}
                            <div class="col-lg-12 mt-5">

                                <div class="card">

                                    <div class="card-body">

                                        <h4 class="header-title">Post Like </h4>
                                        {/*                             
  <!-- Button --> */}
                                        <div class="row" style={{ padding: "1%" }}>
                                            <div class="col-sm text-right">
                                                <button type="button" class="btn btn-success" style={{ width: "20%" }}
                                                    data-toggle="modal" data-target="#fpoladd">Add</button>
                                            </div>
                                        </div>
                                        {/* <!-- Button --> */}
                                        <div class="single-table">
                                            <div class="table-responsive">
                                                <table class="table text-center">
                                                    <thead class="text-uppercase bg-primary">


                                                        <tr class="text-white">
                                                            <th scope="col">Like</th>
                                                            <th scope="col" style={{ textalign: "center" }}>price</th>
                                                            <th scope="col" style={{ textalign: "center" }}>Country</th>

                                                            <th scope="col" style={{ textalign: "center" }}>action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody><br />
                                                        {this.state.fpoldata.map((data) => {
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





                                    {/* <!-- Vertically centered modal start --> */}
                                    <div class="col-lg-6 mt-5">
                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModalCenter">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Facebook Settings</h5>
                                                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                                    </div>
                                                    <div class="modal-body">

                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Quantity : </label>
                                                                <input type="text" id="lname" name="lname" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Price : </label>
                                                                <input type="text" style={{ marginLeft: "27px" }} id="lname" name="lname" />
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Country : </label>
                                                                <select style={{ marginLeft: "3px" }} name="Country" id="Country">
                                                                    <option value="volvo">Srilanka</option>
                                                                    <option value="saab">Miyanmar</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-success">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Vertically centered modal end -->
<!-- Editbuttonpopbox -->

                                <!-- Vertically centered modal start --> */}
                                    <div class="col-lg-6 mt-5">
                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModalLong">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title"> Edit</h5>
                                                        <button type="button" class="close"
                                                            data-dismiss="modal"><span>&times;</span></button>
                                                    </div>
                                                    <div class="modal-body">



                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Quantity : </label>
                                                                <input type="text" id="lname" name="lname" />
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Price : </label>
                                                                <input type="text" style={{ marginLeft: "27px" }} id="lname"
                                                                    name="lname" />
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Country : </label>
                                                                <select style={{ marginLeft: "3px" }} name="Country" id="Country">
                                                                    <option value="volvo">Srilanka</option>
                                                                    <option value="saab">Miyanmar</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-success">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Vertically centered modal end -->
                                    
                                <!-- Editbuttonpopbox-end --> */}

                                </div>





                            </div>
                            {/* <!-- table primary end -->


                <!-- 2nd table -->
                <!-- basic table start --> */}
                            <div class="col-lg-6 mt-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title">Like Min - Max</h4>
                                        <div class="single-table">
                                            <div class="table-responsive">
                                                <table class="table text-center">
                                                    <thead class="text-uppercase">
                                                        <tr>



                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <label for="fname">Min:</label><br />
                                                                <input type="text" name="fname"
                                                                    placeholder="ex:Min 10"
                                                                    style={{ border: "1px solid black", textAlign: "center" }}
                                                                    value={this.state.fpolmin}
                                                                    onChange={this.changeFpolMin} /><br />
                                                                <label for="lname">Max:</label><br />
                                                                <input type="text" name="lname"
                                                                    placeholder="ex:Max 100000"
                                                                    style={{ border: "1px solid black", textAlign: "center" }}
                                                                    value={this.state.fpolmax}
                                                                    onChange={this.changeFpolMax} /><br /><br />
                                                                <button type="submit" class="btn btn-success" value="Submit" onClick={() => this.saveFpolMinMax("facebook", "post like")}>Save</button>

                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- basic table end --> */}


                            <br /><br />
                            {/* <!-- 3 -->
                <!-- table primary start --> */}
                            <div class="col-lg-12 mt-5">

                                <div class="card">

                                    <div class="card-body">

                                        <h4 class="header-title">Post Share </h4>

                                        {/* <!-- Button --> */}
                                        <div class="row" style={{ padding: "1%" }}>
                                            <div class="col-sm text-right">
                                                <button type="button" class="btn btn-success" style={{ width: "20%" }}
                                                    data-toggle="modal" data-target="#fshareadd">Add</button>
                                            </div>
                                        </div>
                                        {/* <!-- Button --> */}

                                        <div class="single-table">
                                            <div class="table-responsive">
                                                <table class="table text-center">
                                                    <thead class="text-uppercase bg-primary">

                                                        <tr class="text-white">
                                                            <th scope="col">Share</th>
                                                            <th scope="col" style={{ textalign: "center" }}>price</th>
                                                            <th scope="col" style={{ textalign: "center" }}>Country</th>

                                                            <th scope="col" style={{ textalign: "center" }}>action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody><br />
                                                        {this.state.fshdata.map((data) => {
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




                                    {/* <!-- Vertically centered modal start --> */}
                                    <div class="col-lg-6 mt-5">
                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModalCenter">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Facebook Settings</h5>
                                                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                                    </div>
                                                    <div class="modal-body">

                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Quantity : </label>
                                                                <input type="text" id="lname" name="lname" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Price : </label>
                                                                <input type="text" style={{ marginLeft: "27px" }} id="lname" name="lname" />
                                                            </div>
                                                        </div>



                                                        <div class="row">
                                                            <div class="col-sm"> <label for="lname">Country : </label>
                                                                <select style={{ marginLeft: "3px" }} name="Country" id="Country">
                                                                    <option value="volvo">Srilanka</option>
                                                                    <option value="saab">Miyanmar</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-success">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Vertically centered modal end --> */}

                                </div>



                            </div>
                            {/* <!-- table primary end --> */}



                            {/* <!-- 2nd table -->
                <!-- basic table start --> */}
                            <div class="col-lg-6 mt-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title">Like Min - Max</h4>
                                        <div class="single-table">
                                            <div class="table-responsive">
                                                <table class="table text-center">
                                                    <thead class="text-uppercase">
                                                        <tr>



                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <label for="fname">Min:</label><br />
                                                                <input type="text" name="fname"
                                                                    placeholder="ex:Min 10"
                                                                    style={{ border: "1px solid black", textAlign: "center" }}
                                                                    value={this.state.fsharemin}
                                                                    onChange={this.changeFshareMin} /><br />
                                                                <label for="lname">Max:</label><br />
                                                                <input type="text" id="lname" name="lname"
                                                                    placeholder="ex:Max 100000"
                                                                    style={{ border: "1px solid black", textAlign: "center" }}
                                                                    value={this.state.fsharemax}
                                                                    onChange={this.changeFshareMax} /><br /><br />
                                                                <button type="submit" class="btn btn-success" value="Submit" onClick={() => this.saveFshareMinMax("facebook", "share")}>Save</button>

                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- basic table end -->



                <!-- Striped table start --> */}
                            {/* <div class="col-lg-12 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">Add Countries</h4>
                            <div class="single-table">
                                <div class="table-responsive">
                                    <table class="table table-striped text-center">
                                        <thead class="text-uppercase">
                                            <tr>

                                                <th scope="col" style={{ textalign: "center" }}> default Countries</th>
                                                <th scope="col" style={{ textalign: "center" }}>Add Countries</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>



                                                <td>
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                Sri Lanka
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Miyanmar
                                                            </td>
                                                        </tr>
                                                    </table>



                                                </td>
                                                <td>

                                                    <form action="/action_page.php">
                                                        <label for="fname"></label><br/>
                                                        <input type="text" id="fname" name="fname"
                                                            placeholder="Type Country name"/><br/><br/>
                                                        <input type="submit" class="btn btn-success" value="Submit"/>
                                                    </form>
                                                </td>

                                            </tr>



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                            {/* <!-- Striped table end -->


                <!-- 2nd table --> */}


                        </div>
                    </div>
                </div>


            </div>




        )
    }
}

export default EFacebook

