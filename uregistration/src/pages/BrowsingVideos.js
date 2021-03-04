/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet";

class BrowsingVideos extends React.Component {
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
                <header class="header" style={{ backgroundColor: "white", height: "10%", width: "100%" }}>
                    <section class="container header__inner" >
                        <div class="header__left" >

                            <a
                                href="howitworks.html"
                                class="nav__link pricing__link text_violet"
                            >
                                How it Works
                        </a>
                        </div>
                        <div class="header__right">
                            <a
                                href="register.html"
                                class="button-register button_yellow "
                            >
                                Registration
                       </a>
                            <a href="login.html" class="button-enter button_yellow ">
                                <div class="button-enter__text">
                                    <span>Login</span>
                                </div>
                                <img class="button-enter__icon" src="assets/Image/earn/user.svg" alt=""></img>
                            </a>
                        </div>
                    </section>
                </header>
                <div class="article-list">
                    <div class="container">
                        <div class="intro">
                            <h3 class="text-center" style={{ color: "rgb(3,23,44)", marginTop: "15%" }}><br /><strong>Browsing&nbsp;Videos</strong><br /><br /></h3>
                            <p class="text-center">Focus on what you are good at and what works best for you.B All you have to do is watch videos and earn points </p>
                        </div>
                        <div class="row articles">
                            <div class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 01</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/cme.png" alt="" /></a>

                                <p class="description">Focus on what you are good at and what works best for you. There are 3 ways to earn money on emoneyTag and each of them is distinguished by a feature that might suit you best. Engagement and your time are key to high earnings.</p></div>

                            <div
                                class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 02</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/yte.png" alt="" /></a>

                                <p class="description">To earn points you have to watch full video. After watching the videos your points will be increase </p></div>
                        </div>
                    </div></div>
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
export default BrowsingVideos