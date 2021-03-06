/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import userServices from '../services/userServices';
import { Link } from 'react-router-dom';
import toast from 'toast-me';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Cookies from 'js-cookie';


const CLIENT_ID = '613851969001-bakoc12jk787o0k34plimm6cq1tsklra.apps.googleusercontent.com';

// import { data } from 'jquery';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            email: '',
            key: '',
            error: '',
            isLogined: false,
            accessToken: '',


        }
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    userSignin = (e) => {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var key = document.getElementById("pwlogin").value;

        if (email === "") {
            // this.setState({
            //     error: 'Please Enter your email!'
            // });
            toast('Please Enter your email!');
        } else if (key === "") {
            // this.setState({
            //     error: 'Please Enter your Password!'
            // });
            toast('Please Enter your Password!');
        } else {
            let user = { email: this.state.email, key: this.state.key, }
            userServices.logIn(user).then(res => {
                if (res.data !== 'failed') {
                    // sessionStorage.setItem("user", res.data)
                    var inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                    Cookies.set('user', res.data, {
                        expires: inFifteenMinutes
                    });
                    this.props.history.push('/userhome');
                } else {
                    toast('Email or Password invalid!');
                }
            });
        }

    }
    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            this.props.history.push('/userhome');
        } else {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));


            window.fbAsyncInit = () => {
                window.FB.init({
                    appId: '104862384871706', //Change with your Facebook app id
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.0'
                });

                window.FB.Event.subscribe('auth.statusChange', response => {
                    if (response.authResponse) {
                        this.checkLoginState();
                    } else {
                        console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
                    }
                });
            };
        }

    }

    checkLoginState() {
        window.FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    loginfb() {
        window.FB.login(this.checkLoginState(), {
            scope: 'email'
        });
    }

    statusChangeCallback(response) {
        if (response.status === 'connected') {
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            console.log("[FacebookLoginButton] Person is logged into Facebook but not your app");
        } else {
            console.log("[FacebookLoginButton] Person is not logged into Facebook");
        }
    }

    testAPI() {
        window.FB.api('/me', function (response) {
            console.log('[FacebookLoginButton] Successful login for: ', response);
            // let user = { email: response.profileObj.email, key: 'facebook' }
            // userServices.facebookLogIn(user).then(res => {
            //     if (res.data.id !== null) {
            //         sessionStorage.setItem("user", res.data.id)
            //         this.props.history.push('/userhome');
            //     } else {
            //         toast('Server maybe offline. Try again later!');
            //     }
            // });
        });
        this.props.history.push('/UserHome');
    }
    changeEmailHandlter = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    changekey = (event) => {
        this.setState({
            key: event.target.value
        });
    }

    login(response) {

        if (response.accessToken) {
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
            let user = { email: response.profileObj.email, key: 'google' }
            userServices.googleLogIn(user).then(res => {
                if (res.data.id !== null) {
                    // sessionStorage.setItem("user", res.data.user.id)
                    Cookies.set('user', res.data.user.id);
                    var inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                    Cookies.set('user', res.data.user.id, {
                        expires: inFifteenMinutes
                    });
                    this.props.history.push('/userhome');
                } else {
                    toast('Server maybe offline. Try again later!');
                }
            });

        }
    }

    showpassword = (event) => {
        var x = document.getElementById("pwlogin");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    logout(response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        // alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        // alert('Failed to log out')
    }
    render() {
        return (
            <div>
                <div class="limiterw">
                    <div class="container-login100w">
                        <div class="wrap-login100w">
                            <div class="login100-formw validate-formw">

                                <span class="login100-form-titlew">
                                    Welcome
                                </span>
                                <div class="regwithemal1w">
                                    Log With Email
					            </div>
                                <h3 style={{ color: "red", fontSize: "20px", marginLeft: "25%", marginRight: "25%", marginTop: "10px", marginBottom: "10px" }}>{this.state.error}</h3>
                                <form onSubmit={this.userSignin}>
                                    <div class="wrap-input100w validate-inputw" data-validate="Valid email is required: ex@abc.xyz">
                                        <input class="input100w" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} />
                                        <span class="focus-input100w"></span>
                                        <span class="symbol-input100w">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <br></br>

                                    <div class="wrap-input100w validate-inputw" data-validate="Password is required">
                                        <input class="input100w" type="password" name="pass" id="pwlogin" value={this.state.key} onChange={this.changekey} placeholder="Password" />
                                        <span class="focus-input100w"></span>
                                        <span class="symbol-input100w">
                                            <i class="fa fa-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword} />Show Password
                                </div>

                                    <div class="container-login100-form-btnw">
                                        <input type="submit" class="login100-form-btnw" value="Login" />

                                    </div>
                                </form>

                                {/* <!--line --> */}
                                {/* <div class="container">
                                    <hr class="hr-text" data-content="AND" />
                                </div> */}



                                <div class="text-center p-t-12">

                                    <span class="txt1w">
                                        Forgot Username Or Password?&nbsp;&nbsp;
						                </span>
                                    <a class="txt2w" href="#">
                                        Reset Password
						                </a>
                                </div>
                                <div style={{ width: "100%", height: "10%" }} >
                                    <button className="my-facebook-button-class"
                                        onClick={
                                            () => this.loginfb()
                                        } >
                                        <i className="fa fa-facebook" /> Connect with Facebook </button>
                                </div>


                                <div style={{ marginTop: "5%", width: "100%" }}>
                                    {this.state.isLogined ?
                                        <GoogleLogout
                                            clientId={CLIENT_ID}
                                            buttonText='Logout'
                                            onLogoutSuccess={this.logout}
                                            onFailure={this.handleLogoutFailure}
                                            className="button"
                                        >
                                        </GoogleLogout> : <GoogleLogin
                                            clientId={CLIENT_ID}
                                            buttonText='Signin with Google'
                                            onSuccess={this.login}
                                            onFailure={this.handleLoginFailure}
                                            cookiePolicy={'single_host_origin'}
                                            responseType='code,token'
                                            className="button"
                                        />
                                    }


                                </div>

                                <div class="text-center p-t-12">
                                    <span class="txt1w">
                                        Didn't have An Account?&nbsp;&nbsp;
						                </span>
                                    <Link to="/register" >
                                        <a class="txt2w">
                                            Sign Up
						                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Login