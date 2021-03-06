/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class Howitworks1 extends React.Component {
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
                {/* <header class="header" style={{ backgroundColor: "white", height: "10%", width: "100%"  }}>
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
                </header> */}
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
                <div class="team-boxed">
                    <div class="container">
                        <div class="intro">
                            <h2 class="text-center" style={{ color: "rgb(3,23,44)", marginTop: "10%" }}>Methods of Earnings</h2>
                            <p class="text-center" style={{ color: "rgb(3,23,44)" }}>There are three types of Earnings. You can choose most prefferd method of earnings for you.</p>
                        </div>
                        <div class="row people">
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box">
                                    <h5 class="name" style={{ color: "rgb(3,23,44)" }}>Leaving Engagement on Social Media</h5>
                                    <p class="description">You can choose this method easily. Only you have to do is complete the tasks provided by us, By using your social media account and earn points. You can earn points by using Facebook, Twitter, Instagram, YouTube and TikTok social media accounts.your one tap can earn points for you. </p>
                                    <a class="action" href="/smengagement"><i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box">
                                    <h5 class="name" style={{ color: "rgb(3,23,44)" }}>Browsing Websites,Videos and ads</h5>
                                    <p class="description">Only thing you  need to do in this method is browsing ads, videos and websites.By using this method of earning you can earn points easily. You don't need to create accounts or use your social media accounts. You have to complete the tasks we provide to earn points.Focus on what you are good at and best.</p>
                                    <a class="action" href="/browsingvideos"><i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box">
                                    <h5 class="name" style={{ color: "rgb(3,23,44)" }}>Upload Videos</h5>
                                    <p class="description">By uploading videos you can earn points. If you are a content creator, this is the most suitable method of earnings. Your video's maximum time duration should be 5 minutes.If it is exceed more than 50mb or 5 minutes you cannot upload it or earn points. You have to mention the hash tags and specified category. </p>
                                    <a class="action" href="/uploadvideohit"><i class="fa fa-arrow-circle-right"></i></a>
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

            </div>
        )
    }
}
export default Howitworks1