import React, { Components } from "react";

class Settings extends React.Components {
    render() {
        return (
            <div>
                <div class="container" style={{ backgroundColor: "#dfeef2" }} >
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#account">Account</a></li>
                        <li><a data-toggle="tab" href="#billings">Billings</a></li>
                        <li><a data-toggle="tab" href="#privacy">Privacy</a></li>
                        <li><a data-toggle="tab" href="#about">About</a></li>
                    </ul>
                </div>

                <div class="tab-content">

                    <div id="account" class="tab-pane fade in active">
                        <div class="card" style={{ marginRight: "10px", marginBottom: "10px", marginTop: "10px" }}>
                            <h4 style={{ marginLeft: "10px" }}>verify your Email:</h4>
                            <h6 style={{ marginLeft: "10px" }}>Go to your mail and click the activation link. If you didn't receive any messages from us, click on the button next to.</h6>
                            <button class="btn btn-success" type="button" style={{ marginLeft: "25%", marginBottom: "10px", marginTop: "10px", width: "50%" }}>SEND ACTIVATION LINK</button>
                        </div>
                    </div>



                    <div class="card" style={{ marginTop: "10px" }}>
                        <div class="card-body">
                            <h4 class="card-title" style={{ marginTop: "10px" }}>Change Email</h4>
                            <h6 class="text-muted card-subtitle mb-2" style={{ marginTop: "10px" }}>Email</h6>
                            <input class="border rounded" type="email" style={{ width: "75%", opacity: "1", filter: "blur(0px) brightness(92%) contrast(124%) grayscale(0%) hue-rotate(0deg) invert(0%);", marginTop: "10px;" }} placeholder="javadeveloper@satasme.com" />
                            <button class="btn btn-info" type="button" style={{ marginTop: "10px" }}>Save</button>
                        </div>
                    </div>

                    <div class="card" style={{ marginTop: "10px" }}>
                        <div class="card-body">
                            <h4 class="card-title">Language and Timezone</h4>
                            <h6 class="text-muted card-subtitle mb-2" style={{ width: "50%", marginTop: "10px" }}>Display Language</h6>

                            <div class="container" style={{ marginLeft: "5px" }}>

                                <div class="dropdown">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                        English(United Kingdom)
                                    </button>
                                    <div class="dropdown-menu">

                                        <span class="dropdown-item">English (United States)</span>
                                    </div>
                                </div>
                            </div>
                            <h6 class="text-muted card-subtitle mb-2" style={{ width: "50%", marginTop: "30px" }}>Timezone</h6>
                            <div class="container" style="margin-left: 5px">

                                <div class="dropdown">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                        United Kingdom
                                    </button>
                                    <div class="dropdown-menu">
                                        <span class="dropdown-item">United State</span>

                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="button" style={{ marginTop: "20px", marginLeft: "20%" }}>Save</button>
                        </div>
                    </div>
                </div>


                <div id="billings" class="tab-pane fade">
                    <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                        <form style={{ marginLeft: "20px" }}>
                            <div class="form-row">
                                <div class="col-sm-12">
                                    <div class="form-group"><label>Payment Receiver</label></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                    <div class="form-group" style={{ width: "50%" }}><input class="form-control" type="text" style={{ width: "100%" }} placeholder="First name" /></div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group" style={{ width: "50%" }}><input class="form-control" type="text" style={{ width: "100%" }} placeholder="Last name" /></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6" style={{ width: "477.5px" }}>
                                    <div class="form-group" style={{ width: "50%" }}><input class="form-control" type="text" style={{ width: "100%" }} placeholder="Street" /></div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group" style={{ width: "50%" }}><input class="form-control" type="text" style={{ width: "100%" }} placeholder="Number" /></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6" style={{ width: "477.5px" }}>
                                    <div class="form-group" style={{ width: "50%" }}><input class="form-control" type="text" style={{ width: "100%" }} placeholder="Postal Code" /></div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group" style={{ width: "50%" }}><input class="form-control" type="text" style={{ width: "100%" }} placeholder="City" /></div>
                                </div>
                            </div>
                            <div class="form-row" style={{ width: "955px" }}>
                                <div class="col-sm-12" style={{ width: "477.5px" }}>
                                    <div class="form-group" style={{ width: "100%" }}><input class="form-control" type="text" placeholder="State or region" style={{ width: "50%" }} /></div>
                                </div>
                            </div>
                            <div class="card" style="border-bottom-color: transparent;border-right: transparent;border-left-color: transparent">
                                <div class="form-row">
                                    <div class="col-sm-6" style={{ width: "477.5px", marginTop: "10px" }}>
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                                choose a country
                                                                        </button>
                                            <div class="dropdown-menu">

                                                <span class="dropdown-item">United States</span>
                                                <span class="dropdown-item">United Kingdom</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6" style={{ marginTop: "10px" }}>
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                                Choose Currency
                                                                        </button>
                                            <div class="dropdown-menu">

                                                <span class="dropdown-item">English (United States)</span>
                                                <span class="dropdown-item">English (United States)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row" style={{ width: "955px", marginTop: "10px", marginBottom: "10px" }}>
                                    <div class="col-sm-12" style="width: 477.5px;">
                                        <div class="form-group" style={{ width: "100%" }}>
                                            <button class="btn btn-success" type="button" style={{ marginLeft: "10%" }}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="privacy" class="tab-pane fade">
                    <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                        <form style={{ margin: "20px" }}>
                            <div class="form-row">
                                <div class="col-sm-12">
                                    <div class="form-group"><label>Contact Details</label></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                    <div class="form-group" style={{ width: "50%" }}>
                                        <sub>First Name</sub>
                                        <input class="form-control" type="text" style={{ width: "100%", marginTop: "10px" }} placeholder="First name" /></div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group" style={{ width: "50%" }}>
                                        <sub>Last Name</sub>
                                        <input class="form-control" type="text" style={{ width: "100%", marginTop: "10px" }} placeholder="Last name" /></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                    <div class="form-group" style={{ width: "50%" }}>
                                        <sub>Mobile Number</sub>
                                        <input class="form-control" type="text" style={{ width: "100%", marginTop: "10px" }} /></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                    <div class="form-group" style={{ width: "50%" }}>
                                        <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="about" class="tab-pane fade">
                    <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
                        <div class="container">
                            <h4 style={{ fontSize: "26px" }}>Basic Information</h4>
                            <sub style={{ fontSize: "15px" }}>Provide some information about yourself to show you more relevant talent to show you more relevant ads to earn.&nbsp;</sub></div>
                        <div>
                            <div class="card" style={{ marginTop: "10px", borderTopColor: "transparent" }}>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <sub style={{ marginTop: "5px", fontSize: "13px" }}>Country</sub>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle border-dark" data-toggle="dropdown" aria-expanded="false" type="button" style={{ color: "rgb(6,6,6)", backgroundColor: "rgb(250,250,250)", marginTop: "10px", marginBottom: "5px" }}>Sri Lanka</button>
                                                    <div
                                                        class="dropdown-menu" role="menu">
                                                        <a class="dropdown-item" role="presentation" href="#">Australia</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Japan</a>
                                                        <a class="dropdown-item" role="presentation" href="#">England</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <sub style={{ fontSize: "13px" }}>Gender</sub>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle border-dark" data-toggle="dropdown" aria-expanded="false" type="button" style={{ color: "rgb(6,6,6)", backgroundColor: "rgb(250,250,250)", marginTop: "10px", marginBottom: "5px" }}>Female</button>
                                                    <div
                                                        class="dropdown-menu" role="menu">
                                                        <a class="dropdown-item" role="presentation" href="#">Male</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Other</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style={{
                                            marginTop: "10px" >
                                                <div class="col-md-6">
                                                    <sub style={{ fontSize: "13px", marginBottom: "10px" }}>Date of Birth</sub>
                                                    <input id="datepicker" width="270" />
                                                    {/* <script style={{marginTop: "10px"}}>
                                                                                            $('#datepicker').datepicker({
                                                                                                uiLibrary: 'bootstrap' });
                                                                                         </script> */}
                                                </div>

                                                                                </div>
                                                                                <div class="row" style={{ marginTop: "10px" }}>
                                            <div class="col-md-6">
                                                <button class="btn btn-primary" type="button" style={{ marginLeft: "10px", marginTop: "10px" }}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div class="card" style={{ marginLeft: "20px", marginRight: "20px", borderTopColor: "transparent" }}>
                        <div class="container">
                            <h4 style={{ fontSize: "26px" }}>Experience</h4>
                            <sub style={{ fontSize: "15px" }}>Add your work experience to get better paid monetization ads.&nbsp;</sub></div>
                        <div>
                            <div class="card" style={{ marginTop: "10px", borderTopColor: "transparent" }}>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <sub style={{ marginTop: "5px", fontSize: "13px" }}>Specialization</sub>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle border-dark" data-toggle="dropdown" aria-expanded="false" type="button" style={{ color: "rgb(6,6,6)", backgroundColor: "rgb(250,250,250)", marginTop: "10px", marginBottom: "5px" }}>IT and Technical Services</button>
                                                    <div
                                                        class="dropdown-menu" role="menu">
                                                        <a class="dropdown-item" role="presentation" href="#">Administrative Services</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Architecture and Engineering </a>
                                                        <a class="dropdown-item" role="presentation" href="#">Business and Finance</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <sub style="font-size: 13px;">Education</sub>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle border-dark" data-toggle="dropdown" aria-expanded="false" type="button" style={{ color: "rgb(6,6,6)", backgroundColor: "rgb(250,250,250)", marginTop: "10px", marginBottom: "5px" }}>Undergraduate</button>
                                                    <div
                                                        class="dropdown-menu" role="menu">
                                                        <a class="dropdown-item" role="presentation" href="#">Associate degree</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Master's degree</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Professional degree</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row" style={{ marginTop: "10px" }}>
                                            <div class="col-md-6">
                                                <button class="btn btn-primary" type="button" style={{ marginLeft: "10px", marginTop: "10px" }}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", borderTopColor: "transparent" }}>
                        <div class="container">
                            <h4 style={{ fontSize: "26px" }}>Sub categories</h4>
                            <sub style={{ fontSize: "15px" }}>Allow yourself to display ads based only on what you like and who you are.&nbsp;</sub></div>
                        <div>
                            <div class="card" style={{ marginTop: "10px", borderTopColor: "transparent" }}>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <sub style={{ marginTop: "5px", fontSize: "13px" }}>Specialization</sub>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle border-dark" data-toggle="dropdown" aria-expanded="false" type="button" style={{ color: "rgb(6,6,6)", backgroundColor: "rgb(250,250,250)", marginTop: "10px", marginBottom: "5px" }}>Interests</button>
                                                    <div
                                                        class="dropdown-menu" role="menu">
                                                        <a class="dropdown-item" role="presentation" href="#">Administrative Services</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Architecture and Engineering </a>
                                                        <a class="dropdown-item" role="presentation" href="#">Business and Finance</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <sub style={{ fontSize: "13px" }}>Additional personal information</sub>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle border-dark" data-toggle="dropdown" aria-expanded="false" type="button" style={{ color: "rgb(6,6,6)", BackgroundColor: "rgb(250,250,250)", marginTop: "10px", marginBottom: "5px" }}>Undergraduate</button>
                                                    <div
                                                        class="dropdown-menu" role="menu">
                                                        <a class="dropdown-item" role="presentation" href="#">Associate degree</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Master's degree</a>
                                                        <a class="dropdown-item" role="presentation" href="#">Professional degree</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row" style={{ marginTop: "10px" }}>
                                            <div class="col-md-6">
                                                <button class="btn btn-primary" type="button" style={{ marginLeft: "10px", marginTop: "10px" }}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        )
    }
}
export default Settings