/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import passwordValidator from 'password-validator';
import toast from 'toast-me';
import FacebookLogin from 'react-facebook-login';
import userServices from '../services/userServices';
import SessionKeystore from 'session-keystore'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import queryString from 'query-string';


const CLIENT_ID = '613851969001-bakoc12jk787o0k34plimm6cq1tsklra.apps.googleusercontent.com';


// import { data } from 'jquery';

class Register extends React.Component {


	constructor(props) {
		super(props)
		this.state = {

			email: '',
			key: '',
			key1: '',
			error: '',
			isLogined: false,
			accessToken: '',

		}
		// this.userSignup = this.userSignup.bind(this);
		this.changeEmailHandlter = this.changeEmailHandlter.bind(this);
		this.changekey = this.changekey.bind(this);
		// Create a schema
		this.checkuser();
		this.login = this.login.bind(this);
		this.handleLoginFailure = this.handleLoginFailure.bind(this);
		this.logout = this.logout.bind(this);
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
		// this.statusChangeCallback = this.statusChangeCallback.bind(this);
	}

	checkuser = () => {
		const store = new SessionKeystore({ name: 'webpromo' });
		const key = store.get('user');
		if (key != null) {
			this.props.history.push('/login');
		}
	}

	userSignup = (e) => {
		e.preventDefault();
		var schema = new passwordValidator();
		const value = queryString.parse(this.props.location.search);
		const token = value.ref;

		// Add properties to it
		schema
			.is().min(8)                                    // Minimum length 8
			.is().max(30)                                  // Maximum length 30
			.has().uppercase()                              // Must have uppercase letters
			.has().lowercase()                              // Must have lowercase letters
			.has().digits(1)                                // Must have at least 1 digits
			.has().not().spaces();                           // Should not have spaces
		// .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

		var key = document.getElementById("pw1signup").value;
		var key1 = document.getElementById("pw2signup").value;
		var email = document.getElementById("email").value;

		if (email == "") {
			toast('Please enter your email');
		} else if (key == "") {
			toast('Please enter your password');
		} else if (key1 == "") {
			toast('Please enter your confirm password');
		} else if (key !== key1) {
			toast('Passwords did not match!');
		} else if (!(validator.isEmail(email))) {
			toast('Passwords did not match!');
		} else if (!schema.validate(key)) {
			var errors = schema.validate(key, { list: true });
			var final_error = "";
			if (errors["0"] === 'min') {
				final_error = "Password must have minimum 8 characters";
			} else if (errors["0"] === 'max') {
				final_error = "Password must have maximum 30 characters";
			} else if (errors["0"] === 'uppercase') {
				final_error = "Password must have at least 1 upper case";
			} else if (errors["0"] === 'lowecase') {
				final_error = "Password must have at least 1 lower case";
			} else if (errors["0"] === 'digits') {
				final_error = "Password must have at least 1 digit";
			} else if (errors["0"] === 'spaces') {
				final_error = "Password must not have spaces";
			}
			// this.setState({
			// 	error: final_error
			// });
			toast(final_error);
		}
		else {
			if (token != null) {
				let user = { email: this.state.email, key: this.state.key, key1: this.state.key1, token: token }
				userServices.createRefUser(user).then(res => {

					if (res.status === 200 && res.statusText === 'OK') {
						alert(res.data);
						if (res.data === "Success") {
							this.props.history.push("/login");
						} else if (res.data === "Already exist") {
							toast("Email is already existed");
						} else {
							this.setState({
								error: res.data
							});
						}
					}
				});
			} else {
				let user = { email: this.state.email, key: this.state.key, key1: this.state.key1 }
				console.log('user=>' + JSON.stringify(user));
				userServices.createUser(user).then(res => {
					// this.props.history.push('/Login');

					if (res.status === 200 && res.statusText === 'OK') {
						if (res.data === 'Success') {
							this.props.history.push('/login');
						} else if (res.data === 'Already exist') {
							toast("Email is already existed");
						} else {
							this.setState({
								error: res.data
							});
						}
					}

				});
			}
		}
	}

	componentDidMount() {
		var user = sessionStorage.getItem("user");
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

	changekey1 = (event) => {
		this.setState({
			key1: event.target.value
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
					sessionStorage.setItem("user", res.data.user.id)
					this.props.history.push('/userhome');
				} else {
					toast('Server maybe offline. Try again later!');
				}
			});
		}
	}

	logout(response) {
		this.setState(state => ({
			isLogined: false,
			accessToken: ''
		}));
	}

	showpassword1 = (event) => {
		var x = document.getElementById("pw1signup");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	showpassword2 = (event) => {
		var x = document.getElementById("pw2signup");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
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

				<div class="limiter">
					<div class="container-login100">
						<div class="wrap-login100">



							<div class="login100-form validate-form">
								<span class="login100-form-title">
									Register
					</span>
								<h3 id="alert" style={{ color: "red", margin: "center", fontSize: "20px", marginLeft: "25%", marginRight: "20%", marginBottom: "10px" }}>{this.state.error}</h3>

								<div class="regwithemal1">
									Register With Email
					</div>
								<form onSubmit={this.userSignup}>
									<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
										<input class="input100" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} />
										<span class="focus-input100"></span>
										<span class="symbol-input100">
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</span>
									</div>
									<br></br>

									<div class="wrap-input100 validate-input" data-validate="Password is required">
										<input class="input100" type="password" name="pass" id="pw1signup" placeholder="Password" value={this.state.key} onChange={this.changekey} />
										<span class="focus-input100"></span>
										<span class="symbol-input100">
											<i class="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>

									<div>
										<input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword1} />Show Password
                                </div>

									<br></br>

									<div class="wrap-input100 validate-input" data-validate="Password is required">
										<input class="input100" type="password" name="pass" id="pw2signup" placeholder=" Confirm password" value={this.state.key1} onChange={this.changekey1} />
										<span class="focus-input100"></span>
										<span class="symbol-input100">
											<i class="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>
									<div>
										<input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword2} />Show Password
                                </div>

									<br></br>
									<div class="container-login100-form-btn">
										<button class="login100-form-btn">
											SIGN UP
						</button>
									</div>
								</form>

								<br></br>

								{/* <!--line --> */}
								<div class="container">

									<hr class="hr-text" data-content="AND" />


								</div>

								<div class="regwithemal1">
									Register With Another Service
									</div>



								{/* <FacebookLogin
										appId="104862384871706"
										autoLoad={true}
										fields="name,email,picture"
										onClick={componentClicked}
										callback={this.responseFacebook}
									// cssClass="my-facebook-button-class"
									// icon="fa-facebook"
									/> */}
								{/* <div id="status"></div> */}
								{/* <div class="fb-login-button"
										data-width=""
										data-size="large"
										data-button-type="continue_with"
										data-layout="default"
										data-auto-logout-link="true"
										data-use-continue-as="false"
										onlogin={this.checkLoginState}
									></div> */}
								<div style={{ width: "100%", height: "7%" }} >
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
											buttonText='Signup with Google'
											onSuccess={this.login}
											onFailure={this.handleLoginFailure}
											cookiePolicy={'single_host_origin'}
											responseType='code,token'
											className="button"
										/>
									}


								</div>



								<div class="text-center p-t-12">
									<span class="txt1">
										Forgot Username Or Password?
						</span>&nbsp;

									<a class="txt2" href="#">
										Reset Password
						</a>
								</div>

								<div class="text-center p-t-12">
									<span class="txt1">
										Already Have An Account ?&nbsp;&nbsp;
						</span>
									<Link to="/login" >
										<a class="txt2" href="#">
											Log in
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
export default Register