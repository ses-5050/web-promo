/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class Howitworks2 extends React.Component {
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
                                    <a class="action" href="/howitworks">
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
                <div class="article-list" >
                    <div class="container" style={{ width: "100%", height: "100% " }}>
                        <div class="intro">
                            <h3 class="text-center" style={{ marginTop: "10%", color: "rgb(3,23,44)" }}><br /><strong>Create&nbsp;Order</strong><br /><br /></h3>
                            <p class="text-center">By using this you can increase your social media account followers, likes, views and shares. </p>
                        </div>
                        <div class="row articles">
                            <div class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 01</h3>
                                <a href="#"><img class="img-fluid" src="assets/Image/earn/co.jpeg" alt="" /></a>

                                <p class="description">In step 01 you have to choose the social media that you want to promote. Then in search bar we provided you have to paste the link of social media account,post or page. </p>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 02</h3>
                                <a href="#"><img class="img-fluid" src="assets/Image/earn/co1.jpeg" alt="" /></a>

                                <p class="description">In step 02 you can set the amount of likes, shares, views accourding to your need. And the amount you have to pay will be displayed. You can get the service after complete the payment proccess.</p>
                            </div>

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
                                        <li><a href="#">Terms of Servivce</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>Contacts Us</h3>
                                    <ul>
                                        <li><a href="#">support@emoneytag.com</a></li>
                                        <li><a href="#">FAQ</a></li>

                                    </ul>
                                </div>
                                <div class="col-md-6 item text">
                                    <h3>EmoneyTag</h3>
                                    <p>You can choose this method easily. Only you have to do is complete the
                                    tasks provided by us, By using your social media account and earn points.
                                    You can earn points by using Facebook, Twitter, Instagram, YouTube and TikTok social
                                           media accounts.your one tap can earn points for you.</p>
                                </div>
                                <div class="col item social"><a href="#">
                                    <i class="icon ion-social-facebook"></i></a><a href="#">
                                        <i class="icon ion-social-twitter"></i></a><a href="#">
                                        <i class="icon ion-social-youtube"></i></a><a href="#">
                                        <i class="icon ion-social-instagram"></i></a></div>
                            </div>
                            <p class="copyright">©️ 2021 — EMONEYTAG.COM</p>

                        </div>
                    </footer>
                </div>

            </div>
        )
    }
}
export default Howitworks2