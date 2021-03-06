/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import userServices from "../services/userServices";
import socialmedia from "../services/socialmedia";
import { Link } from 'react-router-dom';
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class FBPostShare extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: [],
            postshare: '',
            shared: false,
            total_earning: '',
            username: '',
            earnstatus: ''

        }

    }
    handleClick(urlS, li) {

        this.setState({
            shared: !this.state.shared,
        });
        var x = document.getElementById(li).value;
        document.getElementById("Shared").innerHTML = x;
        let user = { postshare: this.setState.postshare }
        if (this.state.shared === false) {
            this.OpenNewWindow(urlS);
        }
        console.log('user=>' + JSON.stringify(user));
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        console.log(li);

    }
    OpenNewWindow(MyPath) {
        window.open(MyPath, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
    }
    getpageData() {
        fetch("http://192.168.8.135:8090/api/users")
            .then(response => response.json())
            .then(response => this.setState({ url: response }))
            .catch(error => console.log(error));
    }

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();
    }

    logout = (e) => {
        sessionStorage.removeItem("user");
        this.props.history.push('/homebl');
    }

    // fbpost = () => {
    //     FB.init({
    //         appId: '104862384871706',
    //         autoLogAppEvents: true,
    //         xfbml: true,
    //         version: 'v9.0'
    //     });
    // };

    // fbAsyncInit = function (e) {
    //     alert("aaaaaaaaaaaaaa")
    //     FB.Event.subscribe('edge.create', function (response) {
    //         alert('shared');
    //     });
    //     // Code to detect clicking unlike
    //     FB.Event.subscribe('edge.remove', function (href) {
    //         alert('not shared');
    //     });

    // }
    // postshare = (e) => {
    //     window.onload = function () {
    //         var oFrame = document.getElementById("myframe");
    //         oFrame.contentWindow.document.onclick = function () {
    //             alert("frame contents clicked");
    //         };
    //     };
    //     e.preventDefault();
    //     let user = { postshare: this.setState.postshare }
    //     console.log('user=>' + JSON.stringify(user));
    //     socialmedia.addService(user).then(res => {
    //         this.props.history.push('/FBPostShare');
    //     })
    // }

    componentDidMount() {
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

    iframeonclick() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '104862384871706',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v9.0'
            });

        };
        console.log("Loading fb api");
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    fb() {
        window.fbAsyncInit = function () {
            FB.Event.subscribe('edge.create', function (response) {
                alert('like');
            });
            // Code to detect clicking unlike
            FB.Event.subscribe('edge.remove', function (href) {
                alert('Unlike');
            });

        }

    }
    render() {
        console.log(this.state);
        // const text = this.state.share ? 'share' : 'shared';
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
                <div class="main" style={{ width: "100%", height: "100% ", backgroundColor: "white" }}>

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
                        <main class="s-layout__content" style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
                            <div class="container" style={{ width: "100%", height: "100% ", backgroundColor: "white" }}>
                                <section class="bg-light py-5">
                                    <h2 class="text-center" style={{ marginLeft: "-12%", marginTop: "5%" }}>Facebook <br /></h2>
                                    <h5 class="text-center" style={{ color: "#FF4019" }}>{this.state.earnstatus}</h5>
                                    <div class="container">

                                        <div class="row" style={{ marginTop: "5%" }}>
                                            <div id="fb-root"></div>
                                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="KBvxqLgw"></script>
                                            {/* {this.state.url.map((url) => {
                                                return (
                                                    <div class="col">
                                                        <div class="card">
                                                            <div class="fb-post" data-href={url.url} data-width="350" data-show-text="false">
                                                    </div> 

                                                            <div class="card-body">
                                                                <button id={url.id} value="Shared" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url },url.id)}>Shared</button>
                                                                <p id="Shared"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })} */}
                                            <div class="col ">
                                                <div class="card">

                                                    <div class="fb-post" data-href="https://www.facebook.com/satasme/photos/a.372528646515173/1118603358574361/" data-width="350" data-show-text="false">
                                                    </div>
                                                    <div class="card-body">
                                                        <button id="fbl1" value="Shared" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick("https://www.facebook.com/satasme/photos/a.372528646515173/1118603358574361/", "fbl1")}>Share</button>
                                                        <p id="Shared"></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col ">
                                                <div class="card">

                                                    <div class="fb-post" data-href="https://www.facebook.com/permalink.php?story_fbid=260912048732376&amp;id=103722541117995" data-width="350" data-show-text="false">
                                                    </div>
                                                    <div class="card-body">
                                                        <button id="fbl2" value="Shared" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick("https://www.facebook.com/permalink.php?story_fbid=260912048732376&amp;id=103722541117995", "fbl2")}>Share</button>
                                                        <p id="Shared"></p>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col ">
                                                <div class="card">

                                                    <div class="fb-post" data-href="https://www.facebook.com/satasme/photos/a.372528646515173/1118603358574361/" data-width="350" data-show-text="false">
                                                    </div>
                                                    <div class="card-body">
                                                        <button id="fbl3" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick("https://www.facebook.com/satasme/posts/1118603445241019", "fbl3")}>Share</button>



                                                    </div>
                                                </div>
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
export default FBPostShare