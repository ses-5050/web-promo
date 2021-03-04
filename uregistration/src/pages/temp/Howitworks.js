/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Howitworks extends React.Component {
  render() {
    return (
      <div
        id="homepage"
        className="is-header"
        style={{ backgroundColor: "white", height: "100%", width: "100%" }}
      >
        <Helmet>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
          <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
          <link rel="stylesheet" href="/assets/assets/css/styles.css"></link>
          <link type="text/css" rel="stylesheet" href="assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
          <link rel="stylesheet" href="/assets/css/Article-Cards.css" />
          <link rel="stylesheet" href="/assets/css/Team-Boxed.css" />
          <link rel="stylesheet" href="/assets/css/Article-List.css" />
          <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
        </Helmet>
        <header
          class="header"
          style={{ backgroundColor: "white", height: "10%", width: "100%" }}
        >
          <section class="container header__inner">
            <a class="action" href="homebl">
              <i
                class="fa fa-arrow-circle-left"
                style={{ fontSize: "34px", paddingTop: "5px" }}
              ></i>
            </a>
            &emsp;&emsp;
            <div class="header__left">
              <a
                href="/homebl"
                class="nav__link pricing__link text_violet"
              >
                <div style={{ paddingTop: "14px" }}> Home </div>
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
                <img
                  class="button-enter__icon"
                  src="assets/Image/earn/user.svg"
                  alt=""
                ></img>
              </a>
            </div>
          </section>
        </header>
        <div
          style={{ height: "100%", width: "100%", backgroundColor: "white" }}
        >
          <div class="row">
            <h1
              style={{
                marginRight: " 0px",
                marginLeft: "30%",
                color: "rgb(17,53,89)",
                backgroundColor: "white",
                marginTop: "10%",
              }}
            >
              Discover how it is easy to use
            </h1>
            <div
              class="col-md-6 col-lg-4 item"
              style={{ marginLeft: "7%", marginRight: "7%", marginTop: "2%" }}
            >
              <div class="card">
                <div class="image">
                  <img src="assets/Image/earn/10.png" alt="sample52" />
                </div>

                <p style={{ textAlign: "center", fontSize: "25px" }}>
                  How to Make Money Online
                </p>

                <Link to="/howitworks1">
                  <a class="action">
                    <i
                      class="fa fa-arrow-circle-right"
                      style={{ fontSize: "64px" }}
                    ></i>
                  </a>
                </Link>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 item"
              style={{ marginLeft: "7%", marginRight: "7%", marginTop: "2%" }}
            >
              <div class="card">
                <div class="image">
                  <img src="assets/Image/earn/see.png" alt="sample59" />
                </div>
                <p style={{ textAlign: "center", fontSize: "25px" }}>
                  Promote your YouTube/ Social media page
                </p>

                <Link to="/howitworks2">
                  <a class="action">
                    <i
                      class="fa fa-arrow-circle-right"
                      style={{ fontSize: "64px" }}
                    ></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-dark" style={{ marginTop: "5%" }}>
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
    );
  }
}
export default Howitworks;
