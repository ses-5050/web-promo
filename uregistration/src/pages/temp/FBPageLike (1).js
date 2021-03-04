/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import socialmedia from "../../services/socialmedia";
import sessionStorage from "../../services/sessionservice";
import { Alert } from "bootstrap";
import { Helmet } from "react-helmet";
// require("bootstrap/less/bootstrap.less");

class FBPageLike extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            liked: false,
            pagelike: '',
            url: [],
            status: '',
            id: '',
            todos: [],
            currentPage: 1,
            todosPerPage: 3,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
        this.addtotodo = this.addtotodo.bind(this);
    }

    componentDidUpdate() {
        $("ul li.active").removeClass('active');
        $('ul li#' + this.state.currentPage).addClass('active');
    }
    handleClick1(event) {
        let listid = Number(event.target.id);
        this.setState({
            currentPage: listid
        });
        $("ul li.active").removeClass('active');
        $('ul li#' + listid).addClass('active');
        this.setPrevAndNextBtnClass(listid);
    }
    setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.state.todos.length / this.state.todosPerPage);
        this.setState({ isNextBtnActive: 'disabled' });
        this.setState({ isPrevBtnActive: 'disabled' });
        if (totalPage === listid && totalPage > 1) {
            this.setState({ isPrevBtnActive: '' });
        }
        else if (listid === 1 && totalPage > 1) {
            this.setState({ isNextBtnActive: '' });
        }
        else if (totalPage > 1) {
            this.setState({ isNextBtnActive: '' });
            this.setState({ isPrevBtnActive: '' });
        }
    }
    btnIncrementClick() {
        this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
        this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    btnDecrementClick() {
        this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
        this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    btnPrevClick() {
        if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
            this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
            this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
        }
        let listid = this.state.currentPage - 1;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    btnNextClick() {
        if ((this.state.currentPage + 1) > this.state.upperPageBound) {
            this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
            this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
        }
        let listid = this.state.currentPage + 1;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }

    componentDidMount() {
        socialmedia.getFacebookPageLike("70", "Facebook Page Like").then(res => {
            this.setState({ url: res.data });
            console.log('url' + JSON.stringify(res.data));
        })
    }

    addtotodo() {

        for (let i = 0; url.length <= i; i++) {
            this.state.todos.push(
                this.state.url.indexOf(i)
            )
        }
    }

    OpenNewWindow(MyPath) {
        window.open(MyPath, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
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
        console.log(li);
    }

    render() {
        console.log(this.state);

        const { todos, currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive, url } = this.state;
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <div class="row">
                <div id="fb-root"></div>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="oN06VPM8"></script>
                {todo.indexOf(index).url.map((url) => { //server 1 idan ena data
                    return (
                        console.log(">>>>>>>>>>>>>> : " + url.id),
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="fb-page" data-href={url.url} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                    <div class="card-body">
                                        <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick(url.url, url.id)}>Like</button>
                                        <p id="Liked"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}

            </div>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                    <li key={number} className='active' id={number}><a href='#' id={number} onClick={this.handleClick1}>{number}</a></li>
                )

            }
            else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <li key={number} id={number}><a href='#' id={number} onClick={this.handleClick1}>{number}</a></li>
                )
            }
        });
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
            pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
            pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if (isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
        }
        else {
            renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if (isNextBtnActive === 'disabled') {
            renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
        }
        else {
            renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></li>
        }
        const text = this.state.liked ? 'liked' : 'haven\'t liked';

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
                                        <Link to="/dash" >
                                            <a class="s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-th-large"></i><em>Dashbboard</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>

                                        <Link to="/createorder" >
                                            <a class="s-sidebar__nav-link" >
                                                <i class="fa fa-plus"></i><em>Create order</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/myorders" >

                                            <a class="s-sidebar__nav-link" onClick={this.redirectToOrders}>
                                                <i class="fa fa-plus"></i><em>My Orders</em>
                                            </a>
                                        </Link>
                                        {/* <a class="s-sidebar__nav-link">
                                            <i class="fa fa-plus"></i><em>My Orders</em>
                                        </a> */}
                                    </li>
                                    <li>
                                        <Link to="/earnpage" >
                                            <a class="s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-dollar"></i><em>Earn Points</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/referal" >
                                            <a class="s-sidebar__nav-link">
                                                <i class="fa fa-share-alt"></i><em>Referral</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/earnhistory" >
                                            <a class="s-sidebar__nav-link" href="#0">
                                                <i class="fa fa-bitcoin"></i><em>Billings</em>
                                            </a>
                                        </Link>
                                    </li>
                                    <br />
                                    <li>
                                        <a class="s-sidebar__nav-link" href="#0">
                                            <i class="fa fa-flash"></i><em>Logout</em>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <main class="s-layout__content">
                            <div class="container" style={{ width: "100%", height: "100% ", backgroundColor: "white" }}>
                                <section class="bg-light py-5" style={{ marginTop: "2%" }}>
                                    <h2 class="text-center" style={{ marginTop: "5%" }}>Facebook <br /></h2>

                                    {/* <div class="row">
                                        <div id="fb-root"></div>
                                        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="oN06VPM8"></script>
                                        {this.state.url.map((url) => { //server 1 idan ena data
                                            return (
                                                console.log(">>>>>>>>>>>>>> : " + url.id),
                                                <div class="col-md-6">
                                                    <div class="card mb-4">
                                                        <div class="fb-page" data-href={url.url} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                            <div class="card-body">
                                                                <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick(url.url, url.id)}>Like</button>
                                                                <p id="Liked"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                    </div> */}

                                    {/* <div class="row">
                                        <div id="fb-root"></div>
                                        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=104862384871706&autoLogAppEvents=1" nonce="oN06VPM8"></script>
                                        {this.state.url.map((url) => {
                                            return (
                                                console.log(">>>>>>>>>>>>>> : " + url.id),
                                                <div class="col-md-6">
                                                    <div class="card mb-4">
                                                        <div class="fb-page" data-href={url.url} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                                            <div class="card-body">
                                                                <button id={url.id} value="Liked" style={{ width: "100px" }} ref="fbl" class="btn btn-primary mt-2" onClick={() => this.handleClick(url.url, url.id)}>Like</button>
                                                                <p id="Liked"></p>
                                                            </div>
 </div>
                                                   
                                                   -      </div>
                                                </div>
                                            );
                                        })}

                                    </div> */}

                                    {/* <ul> */}
                                    <div>{renderTodos}</div>

                                    {/* </ul> */}
                                    <ul className="pagination">
                                        {renderPrevBtn}
                                        {pageDecrementBtn}
                                        {renderPageNumbers}
                                        {pageIncrementBtn}
                                        {renderNextBtn}
                                    </ul>
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}
export default FBPageLike