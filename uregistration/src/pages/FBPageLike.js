/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import socialmedia from "../services/socialmedia";
import toast from 'toast-me';
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class FBPageLike extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            count: 0,

            pagelike: '',
            url: [],
            total_earning: '',
            username: '',
            earnstatus: ''


        }
        this.handleClick = this.handleClick.bind(this);
    }
    getpageData() {
        socialmedia.getFacebookPageLike(Cookies.get('user'), "Facebook Page Like")
            .then(res => {
                console.log("response=", JSON.stringify(res.data))
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
    handleClick(urlS) {

        let fblike = { userid: Cookies.get('user'), service: "Facebook Page Like", orderid: urlS.id }


        socialmedia.addFacebookLike(fblike)
            .then(res => {
                if (res.data === "exceed") {
                    toast('Your daily earning limit exceeded. Come back tomorrow for earn more');
                } else if (res.data === "success") {
                    this.OpenRedirect(urlS.url);
                    var x = document.getElementById("" + urlS.id);
                    x.innerHTML = "Liked";
                    x.disabled = true;
                }
            });

    }

    OpenRedirect(MyPath) {
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
        console.log(this.state);
        // const text = this.state.liked ? 'liked' : 'haven\'t liked';
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

                <div class="main" style={{ height: "100%", backgroundColor: "#dfeef2" }}>

                    <div class="s-layout">
                        <div class="s-layout__sidebar" style={{ height: "100%", backgroundColor: "#dfeef2" }}>
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
                        <main class="s-layout__content">
                            <div class="container" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>
                                <section class="py-5">
                                    <h2 class="text-center" style={{ marginTop: "40px" }}>Facebook <br /></h2>
                                    <h5 class="text-center" style={{ color: "#FF4019" }}>{this.state.earnstatus}</h5>
                                    <div class="" style={{ marginTop: "10px" }}>
                                        <div class="col-md-12">
                                            <div class="row">
                                                {/* <div id="fb-root"  ></div>

                                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="csbVllik"></script> */}

                                                {this.state.url.map((url) => {
                                                    if (url.status === "Liked") {
                                                        return (
                                                            <div class="col-md-6 col-lg-4 text-center">
                                                                <div class="card mb-4" >
                                                                    <div class="fb-page" data-href={url.url} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <button id={url.id} value={url.status} disabled="disable" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" >{url.status}</button>
                                                                        <p id="Liked"></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div class="col-md-6 col-lg-4 text-center">
                                                                <div class="card mb-4" >
                                                                    <div class="fb-page" data-href={url.url} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <button id={url.id} value={url.status} style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url.url, id: url.id })}>{url.status}</button>
                                                                        <p id="Like"></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                            {/* <div class="card mb-4" >
                                                <div class="fb-page" data-href="https://www.facebook.com/visitellarocksrilanka/" data-width="" data-height="" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/visitellarocksrilanka/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/visitellarocksrilanka/"></a></blockquote></div>
                                                <div class="card-body">
                                                    <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url })}>Like</button>
                                                    <p id="Liked"></p>
                                                </div>
                                            </div> */}
                                            {/* <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header">
                                                        <h4 class="text-primary">Facebook Page<br /></h4>
                                                    </div>
                                                    {/* <div class="fb-page" data-href="https://www.facebook.com/Super-fit-girls-375179653123013" data-tabs="" data-width="200" data-height="230" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="false" onClick={this.fb()}>
                                                    </div> */}
                                            {/* <div class="card-body">
                                                        <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url })}>Like</button>
                                                        <p id="Liked"></p>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div class="col-md-6 col-lg-4 text-center">
                                                <div class="card mb-4">
                                                    <div class="bg-white card-header">
                                                        <h4 class="text-primary">Facebook Page<br /></h4>
                                                    </div>
                                                    <div class="fb-page" data-href="https://www.facebook.com/satasme" data-tabs="" data-width="200" data-height="230" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="false" onClick={this.fb()} >
                                                    </div>
                                                </div>
                                            </div> */}

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
export default FBPageLike