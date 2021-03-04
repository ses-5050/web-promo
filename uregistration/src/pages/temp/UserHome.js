import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  redirectToHomebl = (e) => {
    this.props.history.push("/howitworks");
  };

  redirectToWatch = (e) => {
    this.props.history.push("/ytvideowatch");
  };

  redirectToSocial = (e) => {
    this.props.history.push("/earnpage");
  };

  redirectCreateorder = (e) => {
    this.props.history.push("/createorder");
  };

  render() {
    return (
      <div id="homepage" className="is-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <title>Home</title>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="description"
            content="Get youtube, twitch or instagram views and start to promote your video. Buy views and get 1000 free youtube views now!" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css" />


          <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
          <link rel="stylesheet" href="/assets/home-css.css" />

          <link rel="alternate" hreflang="x-default" href="index.html" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
          <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
          <link rel="stylesheet" href="/assets/assets/css/styles.css" />
          <script src="/assets/home-js.js"></script>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800&amp;display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;700&display=swap" rel="stylesheet" />
          <script type="text/javascript" src="/assets/viewsjs.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
          <link rel="stylesheet" href="/assets/stylesheet.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/assets/css/dash.css"></link>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css" />


          <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
          <link rel="stylesheet" href="/assets/home-css.css" />

          <link rel="alternate" hreflang="x-default" href="index.html" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
          <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
          <link rel="stylesheet" href="/assets/assets/css/styles.css"></link>
          <script src="/assets/home-js.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
        </Helmet>
        <header
          class="header"
          style={{
            padding: "0 20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 4px rgba(0,0,0,.05)",
          }}
        >
          <section class="container header__inner">
            <div class="header__left">
              <Link to="/UserHome">
                <img
                  src="/assets/webicon.png"
                  style={{ width: "161px", height: "61px" }}
                />

                <br />
              </Link>
            </div>
            <div class="header__right">
              {/* <Link to="/profile" > */}
              {/* <div class="accounticon">
                                <a href="#">   Contact us </a>&nbsp;&nbsp;&nbsp;&nbsp;
                            </div> */}
              {/* </Link> */}
              <Link to="/createorder">
                <div class="accounticon">
                  <a href=""> Dashboard&nbsp; </a>
                </div>
              </Link>
              <Link to="/profile">
                <div class="accounticon">
                  <button type="button" class="btn btn-link btn-lg">
                    <i class="fa fa-user-circle-o"></i>
                  </button>
                </div>
              </Link>
            </div>
          </section>
        </header>

        <main class="main">
          <div class="banner" id="banner" data-replace="/order">
            <div class="banner__box">
              <div class="widget bg">
                <div class="container">
                  <div class="section__header">
                    {/* <div class="section__subheader">
                      <h3 class="section__title" style ={{fontSize:"60px" ,color:"ffbe0f"}}>How To Make Money Online? </h3><br/><br/><br/><br/>
                    </div> */}

                    <div className="howtmkmoney">
                      <h3
                        style={{
                          color: "#0d335d",
                          fontSize: "4.5vw",
                          fontFamily: "Poppins",
                          textAlign: "center",
                          paddingBottom: "40px",
                        }}
                      >
                        How To Make Money Online?{" "}
                      </h3>
                    </div>
                  </div>

                  <div class="widget__presets scrollRevealWidget">
                    <div
                      id="newbie"
                      class="preset-card"
                      onClick={this.redirectToHomebl}
                    >
                      <div class="preset-card__image newbie">
                        <img
                          src="/assets/fevicon/new user.png"
                          style={{
                            width: "70%",
                            height: "90%",
                            marginLeft: "30%",
                            marginTop: "-4%",
                          }}
                        ></img>
                      </div>

                      <div
                        class="preset-card__text subtitle"
                        style={{ color: "#000000" }}
                      >
                        I’m <span class="text_yellow">newbie</span>
                        <br class="disabled" /> and don’t know
                        <br /> what to choose
                      </div>
                    </div>
                    <div
                      id="quick_start"
                      class="preset-card"
                      onClick={this.redirectToWatch}
                    >
                      <div class="preset-card__image quick_start">
                        <img
                          src="/assets/fevicon/fasterman.jpg"
                          style={{
                            width: "70%",
                            height: "90%",
                            marginTop: "5%",
                            marginLeft: "20%",
                            marginTop: "-1%",
                          }}
                        ></img>
                      </div>
                      <div
                        class="preset-card__text subtitle"
                        style={{ color: "#000000" }}
                      >
                        I need to <span class="text_yellow">watch </span>
                        <br /> videos to earn points
                      </div>
                    </div>

                    <div
                      id="promotion"
                      class="preset-card"
                      onClick={this.redirectToSocial}
                    >
                      <div class="preset-card__image promotion">
                        <img
                          src="/assets/fevicon/promotion man.jpg"
                          style={{
                            width: "70%",
                            height: "90%",
                            marginLeft: "30%",
                            marginTop: "-4%",
                          }}
                        ></img>
                      </div>
                      <div
                        class="preset-card__text subtitle"
                        style={{ color: "#000000" }}
                      >
                        I need to <span class="text_yellow">engage</span>
                        <br /> in social media activities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div class="wordCarousel " style={{ textAlign: "center" }}>
                <span>Promote</span>
                <div style={{justifyContent:"center",alignItems:"center"}}>
                  <ul class="flip4">
                    <li style={{ color: "#E1306C" }}>Instagram </li>
                    <li style={{ color: "#4267B2" }}>Facebook</li>
                    <li style={{ color: "#FF0000" }}>YouTube</li>
                    <li style={{ color: "#1DA1F2" }}>Twitter</li>
                    <li style={{ color: "#BD081C" }}>Pinterest</li>
                  </ul>
                </div>
              </div>
              {/* Changetext */}
              <div class="banner__advantages" style={{ textAlign: "center" }}>
                <div class="advantage">
                  <img
                    src="/assets/fevicon/40.png"
                    class="advantage__icon"
                    style={{ paddingLeft: "3%" }}
                  ></img>
                  <span class="advantrage1text" style={{ padding: "5%" }}>
                    Quick Start of the Orders
                  </span>
                </div>
                <div class="advantage">
                  <img
                    src="/assets/fevicon/10.png"
                    class="advantage__icon"
                  ></img>
                  <span class="advantrage1text" style={{ padding: "5%" }}>
                    100% Safe for Your Videos
                  </span>
                </div>

                <div class="advantage">
                  <img
                    src="/assets/fevicon/30.png"
                    class="advantage__icon"
                    style={{ paddingLeft: "3%" }}
                  ></img>
                  <span class="advantrage1text" style={{ padding: "10%" }}>
                    Fully
                    <br /> Automated
                    <br /> Service
                  </span>
                </div>
                <div class="advantage">
                  <img
                    src="/assets/fevicon/20.png"
                    class="advantage__icon"
                  ></img>
                  <span class="advantrage1text" style={{ padding: "10%" }}>
                    Results are Visible Already on the First Day!
                  </span>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* Search bar */}
              <div
                id="banner-paralax"
                class="banner__paralax"
                data-pointer-events="true"
              >
                <div class="banner__input">
                  <div class="input__box">
                    <div class="input__advice">
                      <img
                        class="input__arrow"
                        src="/assets/img/icons/arrow-input.svg"
                      ></img>
                      <span class="input__title text_yellow">Start now</span>
                    </div>
                    <input
                      id="banner-input"
                      type="text"
                      placeholder="Enter a link to your video or channel"
                      oninput="window.$app.$refs.youtubeSearch.searchDebounce(this.value)"
                      onClick="window.$app.$refs.youtubeSearch.show()"
                    />
                    <div class="input__button button_yellow" id="banner-button">
                      Start
                    </div>
                  </div>
                  <youtube-search-result ref="youtubeSearch"></youtube-search-result>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              {/* Changetext - end*/}
              <br />
              <br />
              <div class="allcard">
                <div class="row">
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href="ww.viewsta.com"
                      ></a>

                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/1.png"
                          style={{ width: "40%", height: "40%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href=""
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/2.png"
                          style={{ width: "40%", height: "40%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href="ww.viewsta.com"
                      ></a>
                      <div class="imageali">
                        {" "}
                        <img
                          src="/assets/Image/new image size/icon/5.png"
                          style={{ width: "40%", height: "40%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href="ww.viewsta.com"
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/3.png"
                          style={{ width: "40%", height: "40%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href="ww.viewsta.com"
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/4.png"
                          style={{ width: "40%", height: "40%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>

                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href="#"
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/6.png"
                          style={{ width: "40%", height: "40%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div
                id="banner-paralax"
                class="banner__paralax"
                data-pointer-events="true"
              >



                <div class="widget bg">
                  <div class="container-fluid">
                    <div class="section__header">
                      <div class="section__subheader">
                        <h3 class="section__title2">
                          How Can I Start to Promote My Video?
                        </h3>
                      </div>
                    </div><br />
                    <div class="widget__presets scrollRevealWidget">
                      <div
                        id="newbie"
                        class="preset-card"
                        onClick={this.redirectToHomebl}
                      >
                        <div class="preset-card__image newbie">
                          <img
                            src="/assets/fevicon/new user.png"
                            style={{
                              width: "70%",
                              height: "90%",
                              marginLeft: "30%",
                            }}
                          ></img>
                        </div>
                        <div
                          class="preset-card__text subtitle"
                          style={{ color: "#000000" }}
                        >
                          I’m <span class="text_yellow">newbie</span>
                          <br class="disabled" /> and don’t know
                          <br />
                          what to choose
                        </div>
                      </div>

                      <div
                        id="quick_start"
                        class="preset-card"
                        onClick={this.redirectCreateorder}
                      >
                        <div class="preset-card__image quick_start">
                          <img
                            src="/assets/fevicon/fasterman.jpg"
                            style={{
                              width: "70%",
                              height: "90%",
                              marginLeft: "30%",
                            }}
                          ></img>
                        </div>
                        <div
                          class="preset-card__text subtitle"
                          style={{ color: "#000000" }}
                        >
                          I want to do
                          <br /> <span class="text_yellow">fast</span> promotion
                        </div>
                      </div>

                      <div
                        id="promotion"
                        class="preset-card"
                        onClick={this.redirectCreateorder}
                      >
                        <div class="preset-card__image promotion">
                          <img
                            src="/assets/fevicon/promotion man.jpg"
                            style={{
                              width: "70%",
                              height: "90%",
                              marginLeft: "30%",
                            }}
                          ></img>
                        </div>
                        <div
                          class="preset-card__text subtitle"
                          style={{ color: "#000000" }}
                        >
                          I need to <span class="text_yellow">promote</span>
                          <br /> my channel
                        </div>
                      </div>
                    </div>
                    <div class="scrollRevealWidget">
                      <div
                        id="order-widget"
                        data-api-url="https://core.viewsta.com/"
                        data-api-token="YrLSX4HqonRnraJ3XHmR"
                        data-language="en"
                        data-currency="USD"
                        data-domain="viewstacom"
                      ></div>
                    </div>

                  </div>


                </div>

                <br />
                <br />

                <ul class="background">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <img
                  src="/assets/finalgif.gif"
                  width="100%"
                  height="100%"
                ></img>

                <hr />

                {/* <div class="payments">
                                    <div class="container">

                                        <div class="section__header">
                                            <div class="section__subheader">

                                                <h3 class="section__title">Available Payment Methods</h3>
                                            </div>
                                        </div>
                                        <div class="payments__box">
                                            <div class="payments__card">
                                                <div class="payment-card">
                                                    <a href="www.google.com">

                                                        <img class="lazy" src="/assets/bankimage/1com.png"></img>

                                                    </a>
                                                </div>
                                            </div>


                                            <div class="payments__card">
                                                <div class="payment-card">
                                                    <a href="www.google.com">

                                                        <img class="lazy" src="/assets/bankimage/2sampath.png"></img>

                                                    </a>

                                                </div>
                                            </div>

                                            <div class="payments__card">
                                                <div class="payment-card">

                                                    <img class="lazy" src="/assets/bankimage/ndb1.png"></img>

                                                </div>
                                            </div>


                                            <div class="payments__card">
                                                <div class="payment-card">
                                                    <a href="www.google.com">

                                                        <img class="lazy" src="/assets/bankimage/nsbbbb.png"></img>

                                                    </a>

                                                </div>
                                            </div>


                                            <div class="payments__card">
                                                <div class="payment-card">
                                                    <a href="www.google.com">

                                                        <img class="lazy" src="/assets/bankimage/5union.jpg"></img>

                                                    </a>
                                                </div>

                                            </div>


                                            <div class="payments__card">
                                                <div class="payment-card">

                                                    <img class="lazy" src="/assets/bankimage/6people.png"></img>

                                                </div>

                                            </div>


                                            <div class="payments__card">
                                                <div class="payment-card">
                                                    <a href="www.google.com">

                                                        <img class="lazy" src="/assets/bankimage/7hnb.jpg"></img>

                                                    </a>
                                                </div>
                                            </div>


                                            <div class="payments__card">
                                                <div class="payment-card">
                                                    <a href="www.google.com">

                                                        <img class="lazy" src="/assets/bankimage/ntb20.png"></img>

                                                    </a>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
          <exit-popup
            api-url="https://core.viewsta.com/"
            client-url="https://app.viewsta.com/"
            api-token="6Ldis64ZAAAAAA_Fb3pkiEAEmrvtxg9a76NVMhr1"
            script-url="../script.viewsta.com/user-widget/downloads/latest/js/user-widget.js"
          />
        </main>

        {/* <script src="../script.viewsta.com/order-widget/downloads/latest/js/order-widget.js"></script>
                <script src="js/manifest0c2d.js?id=01c8731923a46c30aaed" type="text/javascript"></script>
                <script src="js/vendorc5e1.js?id=d5687e15b456b5f9574d" type="text/javascript"></script>
                <script src="js/appf7e7.js?id=0dc01a5bb094baf560c3" type="text/javascript"></script>

                <script src="../rum-static.pingdom.net/pa-5d1b80e514cfaa000800005d.js" async></script>


                <script>(function () {
        var w = window;
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
                        ic('reattach_activator');
          ic('update', intercomSettings);
        } else {
          var d = document;
          var i = function () {
                        i.c(arguments)
                    };
          i.q = [];
          i.c = function (args) {
                        i.q.push(args)
                    };
          w.Intercom = i;
          function l() {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/jlchctc4';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
          if (w.attachEvent) {
                        w.attachEvent('onload', l);
          } else {
                        w.addEventListener('load', l, false);
          }
        }
      })()
  </script>

                <script src="js/home48cc.js?id=cc5fcb7ed7bc4c6088d6" type="text/javascript"></script> */}

        <br />
        <br />

        <section class="section--dark section contacts-bg contact-form">
          <div class="container">
            <div class="section__header">
              <div class="section__subheader">
                <h3 class="section__title">Do You Have Any Questions?</h3>
              </div>
              <div class="section__description">
                Please contact Support Manager in Live-Chat or fill in the form
                below: Сontacts, Services&amp;Pricing, Referral Program.
              </div>
            </div>
            <div class="contacts">
              <div class="contacts__form">
                <form action="" class="form">
                  <div class="form__left">
                    <select type="text" placeholder="Name" class="form__input">
                      <option value="" selected="selected">
                        I have a question
                      </option>
                      <option value="Cancel order">Cancel order</option>
                      <option value="Refill order">Refill order</option>
                      <option value="Other issues">Other issues</option>
                    </select>{" "}
                    <input
                      type="text"
                      placeholder="Name"
                      maxlength="50"
                      required="required"
                      class="form__input"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      maxlength="50"
                      required="required"
                      class="form__input"
                    />{" "}
                    <input
                      type="text"
                      placeholder="Subject "
                      maxlength="150"
                      required="required"
                      class="form__input"
                    />
                  </div>
                  <div class="form__right">
                    <textarea
                      placeholder="Message"
                      maxlength="1500"
                      required="required"
                      class="form__textarea form__textarea--margin-top"
                    ></textarea>
                  </div>
                  <div class="form__captcha">
                    <div id="captcha"></div>
                  </div>

                  <button type="button" class="btn btn-dark">
                    SUBMIT
                  </button>

                  <div class="form__status"></div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div class="footer-dark">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#">Terms of Servivce</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>Contacts Us</h3>
                  <ul>
                    <li>
                      <a href="#">support@emoneytag.com</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>EmoneyTag</h3>
                  <p>
                    You can choose this method easily. Only you have to do is
                    complete the tasks provided by us, By using your social
                    media account and earn points. You can earn points by using
                    Facebook, Twitter, Instagram, YouTube and TikTok social
                    media accounts.your one tap can earn points for you.
                  </p>
                </div>
                <div class="col item social">
                  <a href="#">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-youtube"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
              <p class="copyright">© 2021 — EMONEYTAG.COM</p>
            </div>
          </footer>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
    );
  }
}
export default UserHome;
