/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class EarnPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total_earning: '',
            username: '',
            earnstatus: ''

        }

    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });

            userServices.getProfileCompletion(Cookies.get('user')).then(res => {
                if (res.data == "compeleted") {
                    this.setState({ earnstatus: '' });
                    var social = document.getElementById("socialearn");
                    var upload = document.getElementById("uplaodearn");
                    social.href = "/earnmanagement";
                    // upload.href="/uploadvideo";
                } else {
                    this.setState({ earnstatus: res.data + ' Complete your profile to start earning' });
                }
            });
        } else {
            this.props.history.push('/login');
        }

    }

    redirectToUpload = (e) => {
        this.props.history.push('/uploadvideo');
        window.location.reload();

    }

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();

    }

    logout = (e) => {
        sessionStorage.removeItem("user");
        this.props.history.push('/homebl');
    }

    render() {
        return (
            <div style={{ backgroundColor: "#dfeef2" }}>
                <Helmet>
                    <link rel="stylesheet" href="assets/css/Earn_page_css.css" />
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
                </Helmet>
                <header class="header">
                    <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">

                        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">

                            <ul class="navbar-nav">

                                <span class="utext">{this.state.total_earning}</span>
                                <Link to="/profile" >
                                    <li class="nav-item dropdown  user-menu">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                                            <i class="fa fa-user"></i>
                                            <span class="hidden-xs">{this.state.username}</span>
                                        </a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </nav>

                </header>
                <div class="main">

                    <div class="s-layout">
                        <div class="s-layout__sidebar" style={{ height: "100%" }}>
                            <a class="s-sidebar__trigger" href="#0">
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav" style={{ height: "100%" }}>
                                <ul>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/dash">
                                            <i class="fa fa-th-large"></i><em>Dashbboard</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/createorder">
                                            <i class="fa fa-plus"></i><em>Promote Youtube/Social</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/myorders">
                                            <i class="fa fa-list"></i><em>My Orders</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/earnpage">
                                            <i class="fa fa-dollar"></i><em>Earn Points</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/referal">
                                            <i class="fa fa-share-alt"></i><em>Referral</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/earnhistory">
                                            <i class="fa fa-bitcoin"></i><em>Billings</em>
                                        </a>
                                    </li>

                                    <br></br>
                                    <li>
                                        <a class="s-sidebar__nav-link" onClick={this.logout}>
                                            <i class="fa fa-flash"></i><em>Logout</em>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <main class="s-layout__content" style={{ height: "100%", backgroundColor: "#dfeef2" }}>
                            <div>

                                <div class="" style={{ marginTop: "70px" }}>
                                    <h1 class="text-center">Choose the method of Earning</h1>
                                    <h5 class="text-center" style={{ color: "#FF4019" }}>{this.state.earnstatus}</h5>

                                    {/* <!--testcard view--> */}
                                    <div class="row text-center" style={{ marginTop: "-5%", height: "100%", padding: "80px" }}>
                                        <div class="col-md-4" style={{ padding: "10px" }}>
                                            <div class="cardearn">
                                                <img src="assets\images\Browse websites.png" alt="" style={{ width: "60%", height: "20%" }} />
                                                <div class="cradtext">
                                                    Browse Videos in Youtube
                                                </div>
                                                {/* <Link to="/ytvideowatch" > */}
                                                <button class="button">
                                                    <a id="videoearn"><span>EARN</span></a>
                                                </button>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                        <br />
                                        <div class="col-md-4 " style={{ padding: "10px", marginLeft: "10px" }}>
                                            <div class="cardearn">
                                                <img src="assets\images\socialmedia.png" alt="" style={{ width: "60%", height: "10%" }} />
                                                <div class="cradtext">
                                                    Leave Engagement On Social Media
                                                </div>
                                                <button class="button" >
                                                    {/* /earnmanagement */}
                                                    <a id="socialearn"><span>EARN</span></a>
                                                </button>
                                            </div>
                                        </div>



                                        <div class="col-md-4 text-center" style={{ padding: "10px" }}>
                                            <div class="cardearn">


                                                <div class="wrapper">
                                                    <div class="file-upload">
                                                        <i class="fa fa-arrow-up"></i>
                                                    </div>
                                                </div>

                                                <div class="cradtext">
                                                    Upload Video
                                                </div>
                                                {/* onClick={this.redirectToUpload} */}
                                                <button class="button" >
                                                    <a id="uplaodearn"><span>EARN</span></a>
                                                </button>
                                                <br />


                                            </div>
                                        </div>





                                    </div>

                                </div>
                            </div>
                        </main>
                    </div></div>



                <br /><br />




            </div>
        )
    }
}
export default EarnPage