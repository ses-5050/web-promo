/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Helmet } from "react-helmet";

class Homebl extends React.Component {
    render() {
        return (
            <div id="homepage" className="is-header" style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
                <Helmet>

                    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
                    <link rel="stylesheet" href="assets/css/styles.min.css" />
                    <link rel="stylesheet" href="assets/assets/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
                    <link rel="stylesheet" href="assets/css/ionicons.min.css" />
                    <link rel="stylesheet" href="assets/css/Features-Boxed.css" />
                    <link rel="stylesheet" href="assets/css/Footer-Dark.css" />
                    <link rel="stylesheet" href="assets/css/Rounded-Button.css" />
                    <link rel="stylesheet" href="assets/css/styles.css" />
                    <link type="text/css" rel="stylesheet" href="assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800&amp;display=swap" rel="stylesheet" />
                    <script src="assets/js/jquery.min.js"></script>
                    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
                    <script src="assets/js/script.min.js"></script>
                    <script src="assets/js/home48cc.js?id=cc5fcb7ed7bc4c6088d6" type="text/javascript"></script>
                    <script src="assets/js/appf7e7.js?id=0dc01a5bb094baf560c3" type="text/javascript"></script>
                    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
                    <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
                    <link rel="stylesheet" href="/assets/assets/css/styles.css"></link>
                    <link rel="stylesheet" type="text/css" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
                </Helmet>
                <header class="header" style={{ backgroundColor: "white", height: "10%", width: "100%" }}>
                    <section class="container header__inner" >
                        <div class="header__left" >

                            <a href="/howitworks"
                                class="nav__link pricing__link text_violet"
                            >
                                How it Works
                             </a>


                        </div>
                        <div class="header__right">
                            <a
                                href="/register"
                                class="button-register button_yellow "
                            >
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
                <div class="jumbotron hero-technology" style={{ backgroundColor: "#ffffff00", }}>
                    <h1 class="text-left text-primary hero-title" style={{ marginTop: "100px", marginLeft: "10%" }}>Make Money Online</h1>
                    <p class="text-left d-lg-flex hero-subtitle" style={{ marginRight: "86px", marginLeft: "102px", marginTop: "20px" }}>Any where any time earn money. One tap can earn you money. Spend your time WISELY.</p>
                    {/* <!--play store Buttons--> */}
                    <div class="d-block w-100 spec-margin">
                        <a class="d-inline-block app-btn margin-app" href="https://play.google.com/store" target="_blank" title="Download for free on the Play Store" rel="noopener noreferrer" style={{ paddingLeft: "10px" }}>
                            <img src="https://static.zareklamy.com/images/icons/android.svg" alt="Download for free on the Play Store" aria-hidden="true" style={{ outline: "3px solid #000", outlineOffset: "-3px" }} />
                        </a>
                        <a class="d-inline-block app-btn" href="https://www.google.com" title="Use the web app in your browser" style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                            <img src="https://static.zareklamy.com/images/icons/webapp.svg" alt="Use the web app in your browser" aria-hidden="true" style={{ outline: "2px solid #1A1A1A", outlineOffset: "-2px;" }} /> </a>
                    </div>
                </div>
                <h1 class="text-center" style={{ marginTop: "50px", color: "rgb(3,23,44)" }}>Spend your leisure time Wisely</h1>
                {/* <!--articles--> */}
                <div class="article-list">
                    <div class="container" style={{ marginTop: "10px" }}>
                        <div class="intro" style={{ marginBottom: "10px" }}>
                            <h2 class="text-center" style={{ color: "rgb(3,23,44)" }}>Methods of Earnings</h2>
                            <p class="text-center" style={{ color: "rgb(3,23,44)" }}>Turn your leisure time in to profit. Spend it usefully. </p>
                        </div>
                        <div class="row articles">
                            <div class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="assets/Image/earn/pile.jpg" alt="" /></a>
                                <h3 class="name">Social Media Engagements</h3>
                                <p class="description" style={{ color: "rgb(3,23,44)" }}>By using your social media account and earn points. You can earn points by using your Facebook, Twitter, Instagram, YouTube and TikTok social media accounts.your one tap can earn points for you.</p><a class="action" href="#"><i class="fa fa-arrow-circle-right"></i></a></div>
                            <div
                                class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="assets/Image/earn/lap.jpg" alt="" /></a>
                                <h3 class="name">Browse ads, Watch Videos</h3>
                                <p class="description" style={{ color: "rgb(3,23,44)" }}>Only thing you  need to do in this method is browsing ads, videos and websites.By using this method of earning you can earn points easily. You don't need to create accounts or use your social media accounts.</p><a class="action" href="#"><i class="fa fa-arrow-circle-right"></i></a></div>
                            <div
                                class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="assets/Image/earn/business.jpg" alt="" /></a>
                                <h3 class="name">Upload Videos</h3>
                                <p class="description" style={{ color: "rgb(3,23,44)" }}>By uploading videos you can earn points. If you are a content creator, this is the most suitable method of earnings. Your video's maximum time duration should be 5 minutes.Your video appears on websites that suit your target audience</p><a class="action" href="#"><i class="fa fa-arrow-circle-right"></i></a></div>
                        </div>
                    </div>
                </div>
                {/* <!--about--> */}
                <div class="features-boxed" style={{ marginBottom: "5px" }}>
                    <div class="container">
                        <div class="intro">
                            <h2 class="text-center" style={{ color: "rgb(3,23,44)" }}>Features </h2>
                            <p class="text-center" style={{ color: "rgb(3,23,44)" }}>Benefits of using eMoneyTag for your social media boosting</p>
                        </div>
                        <div class="row justify-content-center features">
                            <div class="col-sm-6 col-md-5 col-lg-4 item">
                                <div class="box"><i class="fa fa-map-marker icon"></i>
                                    <h3 class="name">Works everywhere</h3>
                                    <p class="description" style={{ color: "rgb(3,23,44)" }}>From anywhere, anytime you can boost your social media engagements by your mobile or any other device.</p></div>
                            </div>
                            <div class="col-sm-6 col-md-5 col-lg-4 item">
                                <div class="box"><i class="fa fa-flash icon"></i>
                                    <h3 class="name">Improve Channel Rankings and Positions</h3>
                                    <p class="description" style={{ color: "rgb(3,23,44)" }}>The more views you have, the higher your video rises in the “recommended” section.</p></div>
                            </div>
                            <div class="col-sm-6 col-md-5 col-lg-4 item">
                                <div class="box"><i class="fa fa-list-alt icon"></i>
                                    <h3 class="name">Customizable </h3>
                                    <p class="description" style={{ color: "rgb(3,23,44)" }}>You can choose the number of likes,shares, views or followers accourding to your need..</p></div>
                            </div>
                            <div class="col-sm-6 col-md-5 col-lg-4 item">
                                <div class="box"><i class="fa fa-laptop icon"></i>
                                    <h3 class="name">Flexible </h3>
                                    <p class="description" style={{ color: "rgb(3,23,44)" }}>eMoneyTag is full time or additional job for you, from any country. You can earn money on any device with access to the internet, wherever you are. </p></div>
                            </div>
                            <div class="col-sm-6 col-md-5 col-lg-4 item">
                                <div class="box"><i class="fa fa-clock-o icon"></i>
                                    <h3 class="name">Under control </h3>
                                    <p class="description" style={{ color: "rgb(3,23,44)" }}>You can precisely choose how you want to earn – by browsing websites, videos, ads. Leaving engagement on social media. Writing comments.</p></div>
                            </div>
                            <div class="col-sm-6 col-md-5 col-lg-4 item">
                                <div class="box"><i class="fa fa-star icon"></i>
                                    <h3 class="name">Get Personal Popularity</h3>
                                    <p class="description" style={{ color: "rgb(3,23,44)" }}>If you always wanted to make yourself known and you have something to tell people, then the buying of views, likes and subscribers is your chance to become more popular.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="text-center" style={{ color: "rgb(3,23,44)" }}>Start Making Money Today</h2>
                <div class="row">
                    {/* <!--register button--> */}
                    <a
                        href="/register"
                        class="button-register button_yellow "
                        style={{ height: "60px", width: "150px", marginTop: "30px", marginBottom: "10px", fontSize: "20px", marginLeft: "40%" }}>
                        Registration
                </a>
                </div>
                {/* <!--footer--> */}
                <div>
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
            </div>
        )
    }
}
export default Homebl