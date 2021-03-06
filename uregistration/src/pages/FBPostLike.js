/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class FBPostLike extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: [],
            postlike: '',
            // text: 'liked',
            liked: false,
            total_earning: '',
            username: '',
            earnstatus: ''
            // buttonText: "Click me, please"
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(urlS, li) {

        this.setState({
            liked: !this.state.liked,
        });
        var x = document.getElementById(li).value;
        document.getElementById("Liked").innerHTML = x;
        let user = { postlike: this.setState.postlike }
        if (this.state.liked === false) {
            this.OpenNewWindow(urlS);
        }
        console.log('user=>' + JSON.stringify(user));
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        console.log(li);

    }
    getpageData() {
        fetch("http://192.168.8.135:8090/api/users")
            .then(response => response.json())
            .then(response => this.setState({ url: response }))
            .catch(error => console.log(error));
    }

    // postlike = (e) => {
    //     e.preventDefault();
    //     let user = { postlike: this.setState.postlike }
    //     console.log('user=>' + JSON.stringify(user));
    //     alert("awaaa");
    //     socialmedia.addService(user).then(res => {
    //         this.props.history.push('/FBPostLike');

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


    OpenNewWindow(MyPath) {
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
        // const text = this.state.liked ? 'liked' : 'unliked';
        // const label = this.state.liked ? 'Unlike' : 'Like'
        // const { buttonText } = this.state;
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
                <div class="main" style={{ height: "100%", width: "100%", backgroundColor: "white" }}>

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

                        <main class="s-layout__content" style={{ height: "100%", width: "100%", backgroundColor: "white" }} >
                            <div class="container" style={{ marginTop: "5%" }}>
                                <section class="bg-light py-5">
                                    <h2 class="text-center" style={{ marginLeft: "-12%" }}>Facebook <br /></h2>
                                    <h5 class="text-center" style={{ color: "#FF4019" }}>{this.state.earnstatus}</h5>
                                    <div class="container">
                                        <div class="row" style={{ marginTop: "5%" }}>
                                            <div id="fb-root"></div>
                                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="KBvxqLgw"></script>
                                            {/* {this.state.url.map((url) => {
                                                return (
                                                    <div class="col">
                                                        <div class="card ">
                                                        <div class="fb-post" data-href={{url: url }} data-width="350" data-show-text="false"></div>
                                                            <div >
                                                                <div class="card-body">
                                                                    <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url })}>Like</button>
                                                                    <p id="Liked"></p>
                                                                </div>

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
                                                        <button id="fbl1" value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick("https://www.facebook.com/satasme/photos/a.372528646515173/1118603358574361/", "fbl1")}>Like</button>
                                                        <p id="Liked"></p>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col ">
                                                <div class="card">

                                                    <div class="fb-post" data-href="https://www.facebook.com/satasme/photos/a.372528646515173/1118603358574361/" data-width="350" data-show-text="false">
                                                    </div>
                                                    <div class="card-body">
                                                        <button id="fbl1" value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick("https://www.facebook.com/satasme/photos/a.372528646515173/1118603358574361/")}>Like</button>
                                                        <p id="Liked"></p>


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
export default FBPostLike