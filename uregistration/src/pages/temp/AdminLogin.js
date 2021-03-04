import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import adminServices from '../../services/adminServices';
import toast from 'toast-me';

class AdminLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      email: '',
      pw: '',


    }
  }

  componentDidMount(){
    var user = sessionStorage.getItem("admin");
        if (user != null) {
            this.props.history.push('/admin/admindash');
        } else {
        }
  }

  userSignin = (e) => {
    e.preventDefault();

    if (this.state.email === "") {
      toast('Please Enter your email!');
    } else if (this.state.pw === "") {
      toast('Please Enter your Password!');
    } else {
      let user = { email: this.state.email, pw: this.state.pw, }
      adminServices.logIn(user).then(res => {
        if (res.data !== 'failed') {
          sessionStorage.setItem("admin", res.data)
          this.props.history.push('/admin/admindash');
        } else {
          toast('Email or Password invalid!');
        }
      });
    }

  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  }
  changePassword = (event) => {
    this.setState({
      pw: event.target.value
    });
  }

  showpassword = (event) => {
    var x = document.getElementById("pwlogin");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  render() {

    return (


      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={this.userSignin}>
              <span className="login100-form-title">
                Welcome
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeEmail} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <br />
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" id="pwlogin" value={this.state.pw} onChange={this.changePassword} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div>
                <input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword} />Show Password
              </div>
              <br />
              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Login
                </button>
              </div>
              <br />



            </form>
          </div>
        </div>
      </div>
    );
  }
};





export default AdminLogin
