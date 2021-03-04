/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import userServices from "../../services/userServices";
import socialmedia from "../../services/socialmedia";
import { Alert } from "bootstrap";

class FBPageLike extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            count: 0,
            liked: false,
            pagelike: '',
            url: []


        }
        this.handleClick = this.handleClick.bind(this);
    }
    getUrl() {
        fetch("http://192.168.8.135:8090/api/users")
            .then(response => response.json())
            .then(response => this.setState({ url: response }))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getUrl();

    }

    OpenNewWindow(MyPath) {
        window.open(MyPath, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
    }
    // fbeve = () => {
    //     FB.Event.subscribe('auth.sessionChange', function (response) {
    //         if (response.session) {
    //             //check to see if user is a fan of the page
    //             var query = FB.Data.query('select page_id from page_fan where uid=' + response.session.uid + ' and page_id =' + PAGE_ID);
    //             query.wait(function (rows) {
    //                 if (rows.length) {
    //                     //user already likes your page
    //                     alert('like');
    //                 } else {
    //                     //user has not yet liked your page
    //                     alert('like');
    //                 }
    //             });
    //         } else {
    //             //user has not yet logged in
    //             alert('like');
    //         }
    //     });
    // }

    // pagelike1() {
    //     alert("aaaaaaaaaaaaaa ee");
    //     let user = { pagelike: this.setState.pagelike }
    //     console.log('user=>' + JSON.stringify(user));
    //     console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    //     socialmedia.addService(user).then(res => {
    //         this.props.history.push('/FBPageLike');
    //     });

    // }
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
    // fb(){
    //     window.fbAsyncInit = function() {
    //         FB.Event.subscribe('edge.create', function (response) {
    //             alert('like');
    //         });

    //         // Code to detect clicking unlike
    //         FB.Event.subscribe('edge.remove', function (href) {
    //             alert('Unlike');
    //         });

    //         FB.Event.subscribe('auth.statusChange',function (response) {
    //             alert('Unlike');
    //         });
    //     }

    // }


    // counter ()  {
    //     const text = this.state.liked ? 'liked' : 'unliked';
    //     if (text==='liked') {
    //         alert('Liked')
    //         // this.setState((prevState) => ({

    //         //     likeCounter: prevState.likeCounter + 1,
    //         // }));
    //     } else if(text==='unliked'){
    //         alert('Unliked')
    //         // this.setState((prevState) => ({

    //         //     likeCounter: prevState.likeCounter - 1,
    //         // }));
    //     }

    // };
    handleClick(urlS, li) {

        this.setState({
            liked: !this.state.liked,
        });
        var x = document.getElementById(li).value;
        document.getElementById("Liked").innerHTML = x;
        let user = { pagelike: this.setState.pagelike }
        if (this.state.liked === false) {
            this.OpenNewWindow(urlS);
        }
        console.log('user=>' + JSON.stringify(user));
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        console.log(li);

    }


    render() {
        console.log(this.state);
        // const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div>
                <header class="header">
                    <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">
                        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">

                            <ul class="navbar-nav">

                                <span class="utext">$0.00</span>
                                <li class="nav-item dropdown  user-menu">

                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        <i class="fa fa-user"></i>
                                        <span class="hidden-xs" href="/profile">User Account</span>
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </nav>

                </header>

                <div class="main" style={{ height: "100%", backgroundColor: "white" }}>

                    <div class="s-layout">
                        <div class="s-layout__sidebar" style={{ height: "100%", backgroundColor: "white" }}>
                            <a class="s-sidebar__trigger" href="#0">
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav" style={{ height: "100%" }}>
                                <ul>

                                    <li>
                                        <a class="s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-th-large"></i><em>Dashbboard</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/createorder">
                                            <i class="fa fa-plus"></i><em>Create order</em>
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
                                        <a class="s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-bitcoin"></i><em>Billings</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-flash"></i><em>Logout</em>
                                        </a>
                                    </li>
                                    <li>
                                        <br /><br /><br />
                                        <a class="s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-info"></i><em>Contact us</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-cog"></i><em>Settings</em>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <main class="s-layout__content">
                            <div class="container" style={{ width: "100%", height: "100% ", backgroundColor: "white" }}>
                                <section class="bg-light py-5">
                                    <h2 class="text-center" style={{ marginLeft: "-12%", marginTop: "10%" }}>Facebook <br /></h2>
                                    <div class="container">
                                        <div class="row">
                                            <div id="fb-root"></div>
                                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="oN06VPM8"></script>
                                            {/* {this.state.url.map((url) => {
                                                return (
                                                    <div class="col">
                                                        <div class="card" >
                                                        <div class="fb-page" data-href={url.url} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                            <div class="card-body">
                                                                <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick({ url: url },url.id)}>Like</button>
                                                                <p id="Liked"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })} */}

                                            


                                        </div>
                                    </div>
                                </section>

                                <section class="bg-light py-5">
                                    <div class="container">
                                        <div class="row">
                                            <div id="fb-root"></div>
                                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="OG56GC34"></script>

                                            <div class="col" style={{ width: "500px" }}>
                                                <div class="card">
                                                    <div class="fb-page" data-href="https://www.facebook.com/Super-fit-girls-375179653123013/" data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                    </div>
                                                    <div class="card-body"><button class="btn btn-primary mt-2" id="fbl2" value="Liked" onClick={() => this.handleClick("https://www.facebook.com/Super-fit-girls-375179653123013/","fbl2")}>Like</button></div>
                                                    <p id="Liked"></p>
                                                </div>


                                            </div>

                                            <div class="col">
                                                <div class="card">

                                                    <div class="fb-page" data-href="https://www.facebook.com/satasme" data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                    </div>


                                                    <div class="card-body"><button class="btn btn-primary mt-2" id="fbl1" value="Liked" onClick={() => this.handleClick("https://www.facebook.com/satasme","fbl1")}>Like</button>
                                                    <p id="Liked"></p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <div class="row" style={{ marginTop: "5%", borderBottomColor: "transparent", alignContent: "center" }}>
                                    <div class="col-md-6">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <h4 class="card-title"> &nbsp;Today</h4>
                                                <h6 class="text-muted card-subtitle mb-2">$0.00</h6>
                                                <p class="card-text"></p>You earned $0.00 points for today so far</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <h4 class="card-title">&nbsp; Yesterday</h4>
                                                <h6 class="text-muted card-subtitle mb-2">$0.00</h6>
                                                <p class="card-text"></p>You earned $0.00 points for yesterday</div></div>
                                    </div>
                                    <div class="w-100"></div>

                                    <div class="col-md-6">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <h4 class="card-title">Last 7 days</h4>
                                                <h6 class="text-muted card-subtitle mb-2">$0.00</h6>
                                                <p class="card-text"></p>You earned $0.00 points for last 7 days</div></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <h4 class="card-title">This month</h4>
                                                <h6 class="text-muted card-subtitle mb-2">$0.00</h6>
                                                <p class="card-text"></p>You earned $0.00 points for this month</div></div>
                                    </div>
                                </div> */}
                            </div>
                        </main>
                    </div>
                </div>

            </div>

        )
    }
}
export default FBPageLike