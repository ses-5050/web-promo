/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import referalService from "../services/referalService";
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";


class Dash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            referalLink: '',
            total_earning: '',
            username: ''

        }
    }
    componentDidMount() {
        var user = sessionStorage.getItem("user");
        if (user != null) {
            referalService.getUserById(user).then(res => {

                this.setState({
                    referalLink: res.data,

                });
            });
            earningService.getTotalEarning(sessionStorage.getItem("user")).then(res => {
                this.setState({ total_earning: res.data });
            });
    
            userServices.getUserById(sessionStorage.getItem("user")).then(res => {
                this.setState({ username: res.data.fname });
            });
        } else {
            this.props.history.push('/login');
        }


        
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
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
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
                </Helmet>
                <header class="header">
                    <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">

                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

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

                <div class="">

                    <div class="s-layout">
                        {/* <!-- Sidebar --> */}
                        <div class="s-layout__sidebar">
                            <a class="s-sidebar__trigger" href="#0">
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav">
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

                        {/* <!-- Content --> */}
                        <main class="s-layout__content" style={{ backgroundColor: "#dfeef2", height: "100%" }}>
                            <div>
                                <div class="container" style={{ marginTop: "30px", backgroundColor: "#dfeef2", marginBottom: "10px" }}>
                                    <h4 style={{ padding: "10px", marginLeft: "10px", marginTop: "5%" }}>Referral Program</h4>
                                    <div class="container" style={{ marginBottom: "10px" }}>

                                        <span><br />Invite a friend or someone from the Internet to create an advertisement and make a transfer for minimum $ on Ads. If the person completes the transfer, you will receive % of the amount spent on the advertisement.<br /></span>
                                        <div class="card" style={{ marginTop: "10px", width: "75%", backgroundColor: "#dfeef2" }}>
                                            <div class="card-body" style={{ backgroundColor: "white", marginBottom: "10px", marginLeft: "10px", marginRight: "10px" }}>
                                                <h4 class="card-title" style={{ float: "left" }}>Your Referral Link</h4>
                                                <br />
                                                {/* <h6 class="text-muted card-subtitle mb-2" style={{ marginTop: "10px",float:"left" }}>Unique Link</h6> */}
                                                {/* <input type="url" style={{width: "100%", marginLeft: "5px",borderTopColor:"transparent", borderLeftColor:"transparent", borderRightColor: "transparent"}} placeholder="https://www.zareklamy.com/ad?r=kosalagunathilake7"/> */}

                                                <textarea style={{ width: "100%", marginLeft: "5px", borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}
                                                    ref={(textarea) => this.textArea = textarea}
                                                    value={this.state.referalLink}
                                                />
                                                <button class="btn btn-success" type="button" style={{ marginTop: "10px", marginLeft: "10px", marginBottom: "10px" }} onClick={() => this.copyCodeToClipboard()}>Copy link</button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="container" style={{ marginTop: "20px", marginBottom: "10px" }}>
                                    <div class="row" style={{ marginTop: "10px", marginLeft: "20px" }}>
                                        <span>Share link :</span>
                                    </div>
                                    <div class="container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                        <div class="row" style={{ marginTop: "10px", marginLeft: "10px" }}>
                                            <a class="buttn" href title="share on WhatsApp"><img class="button-enter__icon" alt="" src="assets/img/icons/whatsapp.png" /></a>


                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }

}
export default Dash