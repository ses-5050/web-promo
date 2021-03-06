/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import socialmedia from '../services/socialmedia';
import toast from 'toast-me';
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class TwitterFollow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: [],
            twitterf: '',
            followed: false,
            total_earning: '',
            username: '',
            earnstatus: ''


        }
    }
    getpageData() {
        socialmedia.getFacebookPageLike(Cookies.get('user'), "Twitter Followers")
            .then(res => {
                this.setState({ url: res.data });
            });
    }

    componentDidMount() {
        // window.location.reload();
        var user = Cookies.get('user');
        if (user != null) {
            userServices.getProfileCompletion(Cookies.get('user')).then(res => {
                if (res.data == "compeleted") {
                    this.setState({ earnstatus: '' });
                    this.getpageData();
                } else {
                    this.setState({ earnstatus: res.data + ' Complete your profile to start earning' });
                }
            });

            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });
        } else {
            this.props.history.push('/login');
        }

    }

    handleClick = (urlS) => {
        let fblike = { userid: Cookies.get('user'), service: "Twitter Followers", orderid: urlS.id }


        socialmedia.addFacebookLike(fblike)
            .then(res => {
                if (res.data === "exceed") {
                    toast('Your daily earning limit exceeded. Come back tomorrow for earn more');
                } else if (res.data === "success") {
                    this.OpenNewWindow(urlS.url);
                    var x = document.getElementById("" + urlS.id);
                    x.innerHTML = "Followed";
                    x.disabled = true;
                }
            });
    }

    OpenNewWindow(MyPath) {
        window.open(MyPath, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
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
        // const text = this.state.followed ? 'followed' : 'haven\'t followed';
        // const label = this.state.followed ? 'followed' : 'follow';
        return (
            <div>
                <Helmet>
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

                    <div class="s-layout" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>
                        <div class="s-layout__sidebar" >
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
                        <main class="s-layout__content" style={{ height: "100%" }}>
                            <div class="container" style={{ height: "100%", width: "100%", backgroundColor: "#dfeef2" }}>


                                <section class="py-5">
                                    <h2 class="text-center" style={{ marginRight: "20%", marginTop: "5%" }}>Twitter <br /></h2>
                                    <h5 class="text-center" style={{ color: "#FF4019" }}>{this.state.earnstatus}</h5>
                                    <div class="container">
                                        <div class="col-md-12">
                                            <div class="row" >
                                                {this.state.url.map((url) => {
                                                    if (url.status === "Liked") {
                                                        return (
                                                            <div class="col-md-6 col-lg-4 text-center">
                                                                <div class="card mb-4">
                                                                    <div class="bg-white card-header">
                                                                        <h4 class="text-primary">Twitter Page<br /></h4>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        {/* <a class="twitter-follow-button" data-show-count="false" >Follow @etag</a><script async src={url.url} charset="utf-8"></script>
                                                                        <br /> */}
                                                                        <button id={url.id} disabled="disable" value={url.status} style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url.url, id: url.id })}>Followed</button>
                                                                        <p id="Followed"></p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div class="col-md-6 col-lg-4 text-center">
                                                                <div class="card mb-4">
                                                                    <div class="bg-white card-header">
                                                                        <h4 class="text-primary">Twitter Page<br /></h4>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        {/* <a class="twitter-follow-button" data-show-count="false" >Follow @etag</a><script async src={url.url} charset="utf-8"></script>
                                                                        <br /> */}
                                                                        <button id={url.id} value={url.status} style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url.url, id: url.id })}>Follow</button>
                                                                        <p id="Followed"></p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                                {/* <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header">
                                                        <h4 class="text-primary">Twitter Page<br /></h4>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="twitter-follow-button" data-show-count="false" >Follow @etag</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                                        <br />
                                                        <a class="btn btn-primary mt-2" role="button" onClick={() => this.twitterfollow("https://twitter.com/kozi26?ref_src=twsrc%5Etfw")}
                                                        >Follow</a>
                                                    
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header">
                                                        <h4 class="text-primary">Twitter Page<br /></h4>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="twitter-follow-button" data-show-count="false" >Follow @etag</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                                        <br />
                                                        <a class="btn btn-primary mt-2" role="button" onClick={() => this.twitterfollow("https://twitter.com/kozi26?ref_src=twsrc%5Etfw")}
                                                        >Follow</a>
                                                    
                                                        </div>
                                                </div>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}
export default TwitterFollow