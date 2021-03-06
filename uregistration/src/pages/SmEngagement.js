/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class SmEngagement extends React.Component {
    render() {
        return (
            <div id="homepage" className="is-header" style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
                <Helmet>
                    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
                    <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
                    <link rel="stylesheet" href="/assets/assets/css/styles.css"></link>
                    <link type="text/css" rel="stylesheet" href="assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/Article-Cards.css" />
                    <link rel="stylesheet" href="/assets/css/Team-Boxed.css" />
                    <link rel="stylesheet" href="/assets/css/Article-List.css" />
                </Helmet>
                {(() => {
                    if (Cookies.get('user') == null) {
                        <header class="header" style={{ backgroundColor: "white", height: "10%", width: "100%" }}>

                            <section class="container header__inner" >
                                <div class="header__left" >

                                    <a href="/howitworks" class="nav__link pricing__link text_violet" >
                                        How it Works
                            </a>
                                </div>
                                <div class="header__right">
                                    <a href="/register" class="button-register button_yellow ">
                                        Registration
                            </a>
                                    <a href="/login" class="button-enter button_yellow ">
                                        <div class="button-enter__text">
                                            <span>Login</span>
                                        </div>
                                        <img class="button-enter__icon" src="assets/Image/earn/user.svg" alt=""></img>
                                    </a>
                                </div>
                            </section>

                        </header>
                    } else {
                        return (
                            <header class="header" style={{ padding: "0 20px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 4px rgba(0,0,0,.05)" }}>

                                <section class="container header__inner">
                                    <a class="action" href="/howitworks1">
                                        <i
                                            class="fa fa-arrow-circle-left"
                                            style={{ fontSize: "34px", paddingTop: "5px" }}
                                        ></i>
                                    </a>
                                    &emsp;&emsp;
                                    <div class="header__left">
                                        <a href="/userhome">
                                            <img src="/assets/webicon.png" style={{ width: "161px", height: "61px" }} alt="Emoneytag" title="Emoneytag" />
                                        </a>
                                        <br />
                                    </div>
                                    <div class="header__right">
                                        {/* <Link to="/profile" > */}
                                        {/* <div class="accounticon">
                                        <a href="#">   Contact us </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div> */}
                                        {/* </Link> */}
                                        <div class="accounticon">
                                            <a href="/dash">  Dashboard&nbsp; </a>
                                        </div>
                                        <a href="/profile" >
                                            <div class="accounticon">
                                                <button type="button" class="btn btn-link btn-lg">
                                                    <i class="fa fa-user-circle-o"></i></button>
                                            </div>
                                        </a>



                                    </div>
                                </section>

                            </header>
                        )
                    }
                })()}
                <div class="article-list" style={{ width: "100%", height: "100% " }}>
                    <div class="container">
                        <div class="intro">
                            <h3 class="text-center" style={{ color: "rgb(3,23,44)", marginTop: "13%" }}><br /><strong>&nbsp;Social&nbsp; Media&nbsp;Engagements&nbsp;</strong><br /><br /></h3>
                            <p class="text-center">Focus on what you are good at and what works best for you.</p>
                        </div>
                        <div class="row articles">
                            <div class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 01</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/cme.png" alt="" /></a>

                                <p class="description">Focus on what you are good at and what works best for you. There are 3 ways to earn money on emoneyTag and each of them is distinguished by a feature that might suit you best. Engagement and your time are key to high earnings.</p></div>

                            <div
                                class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 02</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/sme.png" alt="" /></a>

                                <p class="description">All you have to do is log in to your social media accounts and leave likes, shares and follows we provided for you. Each and every tap have a value.This is the easiest way of Earning points.</p></div>
                            <div
                                class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"><h3 style={{ color: "rgb(3,23,44)" }}>Step 03</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/fbe.png" alt="" /></a>

                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p></div>
                        </div>
                    </div>


                </div>

                <div class="footer-dark">
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>Services</h3>
                                    <ul>
                                        <li><a href="#">Web design</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">Hosting</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 item text">
                                    <h3>Company Name</h3>
                                    <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula
                                    rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
              vel in justo.</p>
                                </div>
                                <div class="col item social"><a href="#">
                                    <i class="icon ion-social-facebook"></i></a><a href="#">
                                        <i class="icon ion-social-twitter"></i></a><a href="#">
                                        <i class="icon ion-social-youtube"></i></a><a href="#">
                                        <i class="icon ion-social-instagram"></i></a></div>
                            </div>
                            <p class="copyright">Company Name © 2020</p>
                        </div>
                    </footer>
                </div>
            </div>

        )
    }
}
export default SmEngagement