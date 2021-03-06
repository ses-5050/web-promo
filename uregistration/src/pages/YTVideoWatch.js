/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import userServices from "../services/userServices";
import socialmedia from "../services/socialmedia";
import { Link } from 'react-router-dom';
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class YTVideoWatch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            ytvwatch: '',
            total_earning: '',
            username: ''
        }
    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            userServices.getUsers().then((res) => {
                this.setState({ url: res.data });
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

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();

    }

    ytVideoWatch = (e) => {
        e.preventDefault();
        let user = { ytvwatch: this.setState.ytvwatch }
        console.log('user=>' + JSON.stringify(user));
        socialmedia.addService(user).then(res => {
            this.props.history.push('/YTVideoWatch');
        })
    }

    play = (e) => {
        var player = document.getElementById("playvideo" + e.target.id);
        // if(player) {
        //     player.playVideo();
        //     alert("aaaaaaaaaaaaaaaa")
        // }else{
        //     alert("wwwwwwwwwwwwwwwww")
        // }
        if (e.target.value == "Start Watch") {
            player.src += "1";
            var itag = document.getElementById(e.target.id);
            itag.value = "End Watch";
        } else {
            var itag = document.getElementById(e.target.id);
            itag.value = "Start Watch";
            var getvalue = player.src;
            player.src = getvalue.slice(0, -1);
        }

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
                    <script src="/assets/js/yt.js"></script>
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

                        <main class="s-layout__content" style={{ height: "100%" }}>
                            <div class="" style={{ paddingTop: "30px" }}>

                                <section class="py-5">
                                    <h2 class="text-center mb-5">Watch Youtube Videos</h2>
                                    <div class="ytcontainer" style={{ paddingTop: "100px" }}>
                                        <div class="row" style={{ marginTop: "-15%", padding: "80px" }}>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 1<br /></h4>
                                                        <iframe id="playvideo1" width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&mute=1&autoplay=" allowfullscreen="allowfullscreen">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><input id="1" class="btn btn-primary mt-2" type="button" onClick={this.play} value="Start Watch"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 2<br /></h4>
                                                        <iframe id="playvideo2" width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&mute=1&autoplay=" allowfullscreen="allowfullscreen">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><input id="2" class="btn btn-primary mt-2" type="button" onClick={this.play} value="Start Watch"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 3<br /></h4>
                                                        <iframe id="playvideo3" width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&mute=1&autoplay=" allowfullscreen="allowfullscreen">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><input id="3" class="btn btn-primary mt-2" type="button" onClick={this.play} value="Start Watch"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 4<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 5<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 6<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 7<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 8<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 9<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 10<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 11<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch}>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header" >
                                                        <h4 class="text-primary">Video 12<br /></h4>
                                                        <iframe width="100%" height="150px"
                                                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                        </iframe>
                                                    </div>
                                                    <div class="card-body" style={{ marginTop: "5px" }}>


                                                        <h1 class="card-title"></h1><a class="btn btn-primary mt-2" role="button" href="#" onClick={this.ytVideoWatch} s>Start Watch</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div></main>

                    </div>
                </div>

            </div>
        )

    };

}
export default YTVideoWatch