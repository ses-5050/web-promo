import React, { Component } from "react";
import userServices from '../services/userServices';
import toast from 'toast-me';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class Profile extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            selectValue: '',
            email: '',
            error: '',
            fname: '',
            lname: '',
            mobile: '',
            c_fname: '',
            image: '',
            c_lname: '',
            street: '',
            number: '',
            postalcode: '',
            city: '',
            stateorregion: '',
            specialization: '',
            education: '',
            dob: '',
            country: '',
            currency: '',
            basiccountry: '',
            gender: '',
            user: '1',
            thumbnail: undefined,
            profileimage: "",
            profilecomplete: "",
            premail: "",
            prmobile: "",
            prearningtotal: ""

        }
        this.contactInfo = this.contactInfo.bind(this);
        this.changeEmail = this.changeEmail.bind(this);

    }

    componentDidMount() {
        // this.onImageChange = this.onImageChange.bind(this);
        var user = Cookies.get('user');
        if (user != null) {
            userServices.getUserById(user).then(res => {
                if (res.data.user != null) {
                    if (res.data.user.fname != null) {
                        this.setState({ fname: res.data.user.fname });
                    }
                    if (res.data.user.lname != null) {
                        this.setState({ lname: res.data.user.lname });
                    }
                    if (res.data.user.fname != null) {
                        this.setState({ c_fname: res.data.user.fname });
                    }
                    if (res.data.user.lname != null) {
                        this.setState({ c_lname: res.data.user.lname });
                    }
                    if (res.data.user.email != null) {
                        this.setState({ email: res.data.user.email });
                    }
                    if (res.data.user.mobile != null && res.data.user.mobile != 0) {
                        this.setState({ mobile: res.data.user.mobile });
                    }
                    if (res.data.user.gender != null) {
                        this.setState({ gender: res.data.user.gender });
                    }
                    if (res.data.user.dob != null) {
                        this.setState({ dob: res.data.user.dob });
                    }
                    if (res.data.user.specialization != null) {
                        this.setState({ specialization: res.data.user.specialization });
                    }
                    if (res.data.user.education != null) {
                        this.setState({ education: res.data.user.education });
                    }
                    if (res.data.user.status == "verified") {
                        this.removeVerifyEmail();
                    }
                    if (res.data.user.img != null) {
                        this.setState({ profileimage: "http://127.0.0.1:8887/" + res.data.user.img });
                    }
                }
                if (res.data.fname != null) {
                    this.setState({ fname: res.data.fname });
                }
                if (res.data.lname != null) {
                    this.setState({ lname: res.data.lname });
                }
                if (res.data.addresno != null) {
                    this.setState({ number: res.data.addresno });
                }
                if (res.data.country != null) {
                    this.setState({ country: res.data.country });
                }
                if (res.data.street != null) {
                    this.setState({ street: res.data.street });
                }
                if (res.data.city != null) {
                    this.setState({ city: res.data.city });
                }
                if (res.data.postal != null) {
                    this.setState({ postalcode: res.data.postal });
                }
                if (res.data.currency != null) {
                    this.setState({ currency: res.data.currency });
                }
                if (res.data.region != null) {
                    this.setState({ stateorregion: res.data.region });
                }


                if (this.state.profileimage == "") {
                    this.setState({ profileimage: "assets\\images\\icons\\userii.jpg" });
                }
            });

            userServices.getProfileCompletion(user).then(res => {
                if (res.data == "compeleted") {
                    this.setState({ profilecomplete: 'Your profile is 100% completed' });
                } else {
                    this.setState({ profilecomplete: res.data });
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    this.setState({ premail: res.data.email });
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    alert(res.data.url)
                }
            });
        } else {
            this.props.history.push('/login');
        }
    }

    changeThumbnail = e => {

        this.setState({ thumbnail: e.target.files });
        let upload = { thumbnail: e.target.files }
        console.log('user=>' + JSON.stringify(upload));
        userServices.uploadProfile(Cookies.get('user'), e.target.files[0], (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then(res => {
                if (res.data != "Failed to upload profile image") {
                    this.setState({ profileimage: "http://127.0.0.1:8887/" + res.data });
                }
            })
            .catch(() => {
                this.setState({
                    progress: 0,
                    message: "Could not upload the file!",
                    currentFile: undefined,
                });
            });
    };

    // onImageChange = event => {
    //     if (event.target.files && event.target.files[0]) {
    //         let img = event.target.files[0];
    //         this.setState({
    //             profileimage: URL.createObjectURL(img)
    //         });
    //         const formData = new FormData();
    //         formData.append(
    //             "myFile",
    //             img
    //         );
    //         userServices.uploadProfile(Cookies.get('user'),formData).then(res => {
    //             console.log('profile', res)
    //         });
    //     }
    // };

    // onChange = date => this.setState({ date })

    // handleChange(value, e) {

    //     console.log(value); // this will be a moment date object
    //     console.log(e.target.value); // this will be a string value in datepicker input field
    // }

    // handleDropdownChange(event) {
    //     this.setState({ selectValue: event.target.value });
    // }
    contactInfo = (e) => {
        e.preventDefault();
        let user = { fname: this.state.c_fname, lname: this.state.c_lname, mobile: parseInt(this.state.mobile) }
        console.log('user=>' + JSON.stringify(user));
        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated');
            this.props.history.push('/profile');
        });
    }

    changeEmail = () => {
        let user = { email: this.state.email }
        console.log('user=>' + JSON.stringify(user));
        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated');
            this.props.history.push('/profile');
        });

    }

    paymentReceiver = (e) => {

        let user = { p_fname: this.state.fname, p_lname: this.state.lname, p_street: this.state.street, p_number: this.state.number, p_postal: this.state.postalcode, p_city: this.state.city, p_region: this.state.stateorregion, p_country: this.state.country, p_currency: this.state.currency }
        console.log('user=>' + JSON.stringify(user));
        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated');
            this.props.history.push('/profile');
        });
    }

    basicInfo = (e) => {
        let user = { country: this.state.basiccountry, gender: this.state.gender, dob: this.state.dob }
        console.log('user=>' + JSON.stringify(user));
        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated');
            this.props.history.push('/profile');
        });
    }

    experience = (e) => {
        let user = { specialization: this.state.specialization, education: this.state.education }
        console.log('user=>' + JSON.stringify(user));
        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated');
            this.props.history.push('/profile');
        });
    }

    removeVerifyEmail = (e) => {
        var emaildiv = document.getElementById("verifyemaildiv");
        emaildiv.setAttribute("style", "display:none");
    }


    sendEmail = (e) => {
        userServices.sendVerificationEmail(Cookies.get('user')).then(res => {
            if (res.data === "success") {
                toast('Email sent. Check your inbox');
            } else {
                toast('Something went wrong. Contact support');
            }
        });
    }

    changeEmailText = e => {
        this.setState({ email: e.target.value });
    };

    changeFirstName = e => {
        this.setState({ fname: e.target.value });
    };

    changeLastName = e => {
        this.setState({ lname: e.target.value });
    };

    changeStreet = e => {
        this.setState({ street: e.target.value });
    };

    changeNumber = e => {
        this.setState({ number: e.target.value });
    };

    changePostalCOde = e => {
        this.setState({ postalcode: e.target.value });
    };

    changeCity = e => {
        this.setState({ city: e.target.value });
    };

    changeregion = e => {
        this.setState({ stateorregion: e.target.value });
    };

    changeCountry = e => {
        this.setState({ country: e.target.value });
    };

    changeCurrency = e => {
        this.setState({ currency: e.target.value });
    };

    changeContactFName = e => {
        this.setState({ c_fname: e.target.value });
    };

    changeContactLName = e => {
        this.setState({ c_lname: e.target.value });
    };

    changemobile = e => {
        this.setState({ mobile: e.target.value });
    };

    changeBasicCountry = e => {
        this.setState({ basiccountry: e.target.value });
    };

    changeGender = e => {
        this.setState({ gender: e.target.value });
    };

    changeDOB = e => {
        this.setState({ dob: e.target.value });
    };

    changeSpecialization = e => {
        this.setState({ specialization: e.target.value });
    };

    changeEducation = e => {
        this.setState({ education: e.target.value });
    };

    // uploadImages = e => {

    //     return fileSelect({
    //         maxFileSize: 1024 * 1024 * 10,
    //         multiple: false,
    //         accept: 'image/*'
    //     }).then((images) => {


    //         if (images != null) {
    //             this.setState({ profileimage: images });
    //             alert(this.state.profileimage.name)
    //             // this.changeImage(images);
    //         }
    //         // return req.post('/api/uploadimage').attach('image', image);

    //     })
    // }


    render() {


        return (
            <div style={{ backgroundColor: "white" }}>
                <Helmet>
                    <link rel="stylesheet" href="/assets/home-css.css"></link>
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/Icon-Button.css" />
                    <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
                    <link rel="stylesheet" href="/assets/assets/css/styles.css" />
                    <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
                </Helmet>
                <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                    <div style={{ marginTop: "5%" }}>
                        <header class="header" style={{ padding: "0 20px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 4px rgba(0,0,0,.05)" }}>

                            <section class="container header__inner">

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
                    </div>
                    <div class="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">


                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ marginTop: "3%" }}>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div class="card">
                                            <h4 class="card-title">User Profile</h4>
                                            <h6 class="text-muted card-subtitle mb-2">{this.state.profilecomplete}</h6><span>E-mail</span>
                                            <h5 class="card-title">{this.state.premail}</h5><span>Contact no</span>
                                            <h5 class="card-title">{this.state.prmobile}</h5><span>Earned Points</span>
                                            <h5 class="card-title">{this.state.prearningtotal}</h5>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div class="card">
                                            <h4 class="card-title">Profile Image</h4>
                                            {/* <img style={{ width: "35%", height: "35%", marginLeft: "30%" }} alt="img" src="assets\images\icons\userii.jpg"></img> */}
                                            <img style={{ width: "35%", height: "35%", marginLeft: "30%" }} alt="img" src={this.state.profileimage}></img>
                                            <input type="file" accept="image/*" name="myImage" onChange={this.changeThumbnail} />
                                            {/* <button class="btn btn-outline-primary icon-button" onClick={this.uploadImages} type="button" style={{ width: "15%", marginTop: "10px", marginLeft: "39%" }}><i class="fa fa-camera"></i></button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="verifyemaildiv" class="card" style={{ marginRight: "20px", marginBottom: "10px", marginTop: "3%", marginLeft: "20px", backgroundColor: "white" }}>
                                <h4 style={{ marginLeft: "10px", marginTop: "10px", fontSize: "26px" }}>verify your Email:</h4>
                                <sub style={{ marginLeft: "10px", marginTop: "15px" }}>Go to your mail and click the activation link. If you didn't receive any messages from us, click on the button next to.</sub>
                                <button class="btn btn-success" type="button" style={{ marginLeft: "25%", marginBottom: "10px", marginTop: "20px", width: "50%" }} onClick={this.sendEmail}>SEND ACTIVATION LINK</button>
                            </div>

                            <div class="card" style={{ marginTop: "10px", marginLeft: "20px", marginRight: "20px", backgroundColor: "white" }}>
                                <div class="card-body">
                                    <h4 class="card-title" style={{ marginTop: "10px", fontSize: "26px" }}>Change Email</h4>
                                    <h6 class="text-muted card-subtitle mb-2" style={{ marginTop: "10px" }}>Email</h6>
                                    <input class="border rounded" type="email" id="email" value={this.state.email} onChange={this.changeEmailText} style={{ width: "75%", opacity: "1", filter: "blur(0px) brightness(92%) contrast(124%) grayscale(0%) hue-rotate(0deg) invert(0%)", marginTop: "10px", paddingTop: "1%", paddingBottom: "1%", paddingLeft: "1%" }} placeholder="javadeveloper@satasme.com" />
                                    <button class="btn btn-info" type="button" style={{ margin: "10px" }} onClick={this.changeEmail}>Save</button>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "white" }}>
                                <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px", }}>
                                    <div style={{ margin: "20px", backgroundColor: "white" }}>
                                        <div class="form-row">
                                            <div class="col-sm-12">
                                                <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px", }}>Payment Receiver</h4></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                                <sub style={{ fontSize: "13px" }}>First Name</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.fname} onChange={this.changeFirstName} style={{ width: "100%", marginTop: "10px" }} placeholder="First name" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <sub style={{ fontSize: "13px" }}>Last Name</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.lname} onChange={this.changeLastName} style={{ width: "100%", marginTop: "10px" }} placeholder="Last name" /></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <sub style={{ fontSize: "13px" }}>Number</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.number} onChange={this.changeNumber} style={{ width: "100%", marginTop: "10px" }} placeholder="Number" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Street</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.street} onChange={this.changeStreet} style={{ width: "100%", marginTop: "10px" }} placeholder="Street" /></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Postal Code</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.postalcode} onChange={this.changePostalCOde} style={{ width: "100%", marginTop: "10px" }} placeholder="Postal Code" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <sub style={{ fontSize: "13px" }}>City</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.city} onChange={this.changeCity} style={{ width: "100%", marginTop: "10px" }} placeholder="City" /></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>State Or Region</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}><input class="form-control" type="text" value={this.state.stateorregion} onChange={this.changeregion} placeholder="State or region" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Country</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                    {/* <input class="form-control" type="text" value={this.state.country} onChange={this.changeCountry} placeholder="Country" /> */}
                                                    <select class="form-control" value={this.state.country} onChange={this.changeCountry} >
                                                        <option>--Select--</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                                        <option value="KR">Korea, Republic of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="MM">Myanmar (Burma)</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SY">Syria</option>
                                                        <option value="TW">Taiwan</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TP">East Timor</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="YE">Yemen</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Currency</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}><input class="form-control" type="text" value={this.state.currency} onChange={this.changeCurrency} placeholder="Currency" /></div>
                                            </div>
                                        </div>

                                        <div class="form-row" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                            <div class="col-sm-3" style={{ width: "477.5px" }}>
                                                <div class="form-group" style={{ width: "100%" }}><button class="btn btn-success" type="button" style={{ marginLeft: "10%" }} onClick={this.paymentReceiver}>Save</button></div>
                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>

                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                    <div class="form-row">
                                        <div class="col-sm-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px" }}>Contact Details</h4></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>First Name</sub>
                                                <input class="form-control" type="text" id="fname" value={this.state.c_fname} onChange={this.changeContactFName} style={{ width: "100%", marginTop: "10px" }} placeholder="First name" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Last Name</sub>
                                                <input class="form-control" id="lname" type="text" value={this.state.c_lname} onChange={this.changeContactLName} style={{ width: "100%", marginTop: "10px" }} placeholder="Last name" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Mobile Number</sub>
                                                <input class="form-control" type="text" id="mobile" value={this.state.mobile} onChange={this.changemobile} style={{ width: "100%", marginTop: "10px" }} placeholder="Mobile Number" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.contactInfo}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                    <div class="form-row">
                                        <div class="col-sm-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px" }}>Basic Information</h4></div>
                                            <sub style={{ fontSize: "15px" }}>Provide some information about yourself to show you more relevant talent to show you more relevant ads to earn.&nbsp;</sub>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Country</sub>
                                                <input class="form-control" type="text" id="country" value={this.state.basiccountry} onChange={this.changeBasicCountry} style={{ width: "100%", marginTop: "10px" }} placeholder="Country" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Gender</sub>
                                                <input class="form-control" id="gender" type="text" value={this.state.gender} onChange={this.changeGender} style={{ width: "100%", marginTop: "10px" }} placeholder="Gender" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Date of Birth</sub>
                                                <input class="form-control" type="date" id="dob" value={this.state.dob} onChange={this.changeDOB} style={{ width: "100%", marginTop: "10px" }} placeholder="Date of Birth" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.basicInfo}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px" }}>Experience</h4></div>
                                            <sub style={{ fontSize: "15px" }}>Add your work experience to get better paid monetization ads.&nbsp;</sub>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Specialization</sub>
                                                <input class="form-control" type="text" id="specialization" value={this.state.specialization} onChange={this.changeSpecialization} style={{ width: "100%", marginTop: "10px" }} placeholder="Specialization" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Education</sub>
                                                <input class="form-control" id="education" type="text" value={this.state.education} onChange={this.changeEducation} style={{ width: "100%", marginTop: "10px" }} placeholder="Education" /></div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.experience}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                                            <li><a href="#">Web design</a></li>
                                            <li><a href="#">Development</a></li>
                                            <li><a href="#">Hosting</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6 col-md-3 item">
                                        <h3>About</h3>
                                        <ul>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#">Team</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6 item text">
                                        <h3>Company Name</h3>
                                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula
                                        rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                                        vel in justo.</p>
                                    </div>
                                    <div class="col item social"><a href="#">
                                        <i class="icon ion-social-facebook"></i></a><a href="#">
                                            <i class="icon ion-social-twitter"></i></a><a href="#">
                                            <i class="icon ion-social-youtube"></i></a><a href="#">
                                            <i class="icon ion-social-instagram"></i></a></div>
                                </div>
                                <p class="copyright">Company Name © 2020</p>
                            </div>
                        </footer>
                    </div>
                </div>


            </div>









        );
    }

}
export default Profile