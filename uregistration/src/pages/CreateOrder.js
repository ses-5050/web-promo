/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import orderService from "../services/orderService";
import userServices from "../services/userServices";
import earningService from "../services/earningService";

import { Helmet } from "react-helmet";
import { PayPalButton } from "react-paypal-button-v2";
import $ from 'jquery'
import Cookies from 'js-cookie';

import toast from 'toast-me';

class Dash extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            y_subscribe: '1000',
            y_views: '1000',
            f_Polikes: '1000',
            f_Palikes: '1000',
            f_shares: '1000',
            i_followers: '1000',
            i_likes: '1000',
            tw_followers: '1000',
            tw_likes: '1000',
            tt__followes: '1000',
            tt_likes: '1000',
            tt_shares: '1000',
            total_price: '$0',
            y_v_check: true,
            f_pl_check: true,
            i_fol_check: true,
            tw_fol_check: true,
            ti_fol_check: true,
            packageMinMax: [],
            min_yviews: '1000',
            max_yviews: '50000',
            min_ysub: '1000',
            max_ysub: '50000',
            min_fpolike: '1000',
            max_fpolike: '50000',
            min_fpalike: '1000',
            max_fpalike: '50000',
            min_fshares: '1000',
            max_fshares: '50000',
            min_ifollow: '1000',
            max_ifollow: '50000',
            min_ilike: '1000',
            max_ilike: '50000',
            min_twfollow: '1000',
            max_twfollow: '50000',
            min_twlike: '1000',
            max_twlike: '50000',
            min_tifollow: '1000',
            max_tifollow: '50000',
            min_tilike: '1000',
            max_tilike: '50000',
            youtube_link: '',
            facebook_link: '',
            insta_link: '',
            twitter_link: '',
            tiktok_link: '',
            total_earning: '',
            username: '',
            final_earning: '0',
            yv_country: '',
            ys_country: '',
            fpol_country: '',
            fpal_country: '',
            fs_country: '',
            if_country: '',
            twf_country: '',
            tif_country: '',
            options: [{ name: 'Srilanka', id: 1 }, { name: 'Miyanmar', id: 2 }]
        }


    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            orderService.getMinMax().then(res => {
                this.setState({ packageMinMax: res.data });
                this.loadPackages();
            });

            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });
            this.generateYoutubePrice(1600, "views");
        } else {
            this.props.history.push('/login');
        }


    }

    changeyvCountry(selectedList, selectedItem) {
        alert(selectedItem)
        // this.setState({ yv_country: selected });
    }

    changeysCountry = (selected) => {
        this.setState({ ys_country: selected });
    }

    changefpalCountry = (selected) => {
        this.setState({ fpal_country: selected });
    }

    changefpolCountry = (selected) => {
        this.setState({ fpol_country: selected });
    }

    changefsCountry = (selected) => {
        this.setState({ fs_country: selected });
    }

    changeifCountry = (selected) => {
        this.setState({ if_country: selected });
    }

    changetwfCountry = (selected) => {
        this.setState({ twf_country: selected });
    }

    changetifCountry = (selected) => {
        this.setState({ tif_country: selected });
    }

    loadPackages = (e) => {
        var packaging;
        for (packaging of this.state.packageMinMax) {
            if (packaging.social_name == "youtube") {
                if (packaging.service == "views") {
                    this.setState({
                        min_yviews: packaging.min,
                        max_yviews: packaging.max,
                        y_views: packaging.min
                    });
                } else if (packaging.service == "subscribers") {
                    this.setState({
                        min_ysub: packaging.min,
                        max_ysub: packaging.max,
                        y_subscribe: packaging.min
                    });
                }
            } else if (packaging.social_name == "facebook") {
                if (packaging.service == "page like") {
                    this.setState({
                        min_fpalike: packaging.min,
                        max_fpalike: packaging.max,
                        f_Palikes: packaging.min
                    });
                } else if (packaging.service == "post like") {
                    this.setState({
                        min_fpolike: packaging.min,
                        max_fpolike: packaging.max,
                        f_Polikes: packaging.min
                    });
                } else if (packaging.service == "share") {
                    this.setState({
                        min_fshares: packaging.min,
                        max_fshares: packaging.max,
                        f_shares: packaging.min
                    });
                }
            } else if (packaging.social_name == "instagram") {
                if (packaging.service == "followers") {
                    this.setState({
                        min_ifollow: packaging.min,
                        max_ifollow: packaging.max,
                        i_followers: packaging.min
                    });
                } else if (packaging.service == "likes") {
                    this.setState({
                        min_ilike: packaging.min,
                        max_ilike: packaging.max,
                        i_likes: packaging.min
                    });
                }
            } else if (packaging.social_name == "twitter") {
                if (packaging.service == "followers") {
                    this.setState({
                        min_twfollow: packaging.min,
                        max_twfollow: packaging.max,
                        tw_followers: packaging.min
                    });
                } else if (packaging.service == "likes") {
                    this.setState({
                        min_twlike: packaging.min,
                        max_twlike: packaging.max,
                        tw_likes: packaging.min
                    });
                }
            } else if (packaging.social_name == "tiktok") {
                if (packaging.service == "followers") {
                    this.setState({
                        min_tifollow: packaging.min,
                        max_tifollow: packaging.max,
                        tt__followes: packaging.min
                    });
                } else if (packaging.service == "likes") {
                    this.setState({
                        min_tilike: packaging.min,
                        max_tilike: packaging.max,
                        tt_likes: packaging.min
                    });
                }
            }
        }
    }

    logout = (e) => {
        sessionStorage.removeItem("user");
        this.props.history.push('/homebl');
    }

    generateYoutubePrice(val, changecol) {
        var y_v_check = document.getElementById("y_v_check");
        var y_s_check = document.getElementById("y_s_check");
        if (y_v_check.checked && y_s_check.checked) {
            var social = "youtube";
            var service = "views,subscribers"
            if (changecol === "views") {
                var count = val + "," + this.state.y_subscribe;
            } else {
                var count = this.state.y_views + "," + val;
            }

            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (y_v_check.checked) {

            var social = "youtube";
            var service = "views"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (y_s_check.checked) {
            var social = "youtube";
            var service = "subscribers"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateFacebookPrice(val, changecol) {
        var f_pol_check = document.getElementById("f_pol_check");
        var f_pal_check = document.getElementById("f_pal_check");
        var f_s_check = document.getElementById("f_s_check");
        if (f_pol_check.checked && f_pal_check.checked && f_s_check.checked) {
            var social = "facebook";
            var service = "page like,post like,share"
            if (changecol === "pal") {
                var count = val + "," + this.state.f_Polikes + ',' + this.state.f_shares;
            } else if (changecol === "pol") {
                var count = this.state.f_Palikes + "," + val + ',' + this.state.f_shares;
            } else {
                var count = this.state.f_Palikes + "," + this.state.f_Polikes + ',' + val;
            }

            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pal_check.checked && f_pol_check.checked) {
            var social = "facebook";
            var service = "page like,post like"
            if (changecol === "pal") {
                var count = val + ',' + this.state.f_Polikes;
            } else {
                var count = this.state.f_Palikes + ',' + val;
            }

            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pal_check.checked && f_s_check.checked) {
            var social = "facebook";
            var service = "page like,share"
            if (changecol === "pal") {
                var count = val + ',' + this.state.f_shares;
            } else if (changecol === "pol") {
                var count = this.state.f_Palikes + ',' + this.state.f_shares;
            } else {
                var count = this.state.f_Palikes + ',' + val;
            }
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pol_check.checked && f_s_check.checked) {
            var social = "facebook";
            var service = "post like,share"
            if (changecol === "pol") {
                var count = val + ',' + this.state.f_share;
            } else {
                var count = this.state.f_Polikes + ',' + val;
            }
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pal_check.checked) {
            var social = "facebook";
            var service = "page like"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pol_check.checked) {
            var social = "facebook";
            var service = "post like"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_s_check.checked) {
            var social = "facebook";
            var service = "share"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateInstagramPrice(val) {
        var i_f_check = document.getElementById("i_f_check");
        // var i_l_check = document.getElementById("i_l_check");
        // if (y_v_check.checked && y_s_check.checked) {
        //     var social = "youtube";
        //     var service = "views,subscribers"
        //     var count = this.state.y_views + "," + this.state.y_subscribe;
        //     orderService.getprices(social, service, count).then(res => {
        //         this.setState({ total_price: res.data });
        //     });
        // }else if (y_s_check.checked) {
        //     var social = "youtube";
        //     var service = "subscribers"
        //     var count = this.state.y_subscribe;
        //     orderService.getprices(social, service, count).then(res => {
        //         this.setState({ total_price: res.data });
        //     });
        // } else 

        if (i_f_check.checked) {
            var social = "instagram";
            var service = "followers"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateTwitterPrice(val) {
        var t_f_check = document.getElementById("t_f_check");
        // var t_l_check = document.getElementById("t_l_check");
        if (t_f_check.checked) {
            var social = "twitter";
            var service = "followers"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateTiktokPrice(val) {
        var ti_f_check = document.getElementById("ti_f_check");
        // var t_l_check = document.getElementById("t_l_check");
        if (ti_f_check.checked) {
            var social = "tiktok";
            var service = "followers"
            var count = val;
            orderService.getprices(social, service, count, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    changeViews = e => {
        this.setState({ y_views: e.target.value });
        this.generateYoutubePrice(e.target.value, "views");

    };

    changeSubscribers = e => {
        this.setState({ y_subscribe: e.target.value });
        this.generateYoutubePrice(e.target.value, "subscribe");

    };

    changePostLikes = event => {
        this.setState({ f_Polikes: event.target.value });
        this.generateFacebookPrice(event.target.value, "pol");
    };

    changePageLikes = event => {
        this.setState({ f_Palikes: event.target.value });
        this.generateFacebookPrice(event.target.value, "pal");
    };

    changeFShares = event => {
        this.setState({ f_shares: event.target.value });
        this.generateFacebookPrice(event.target.value, "share");
    };

    changeILikes = event => {
        this.setState({ i_likes: event.target.value });
    };

    changeIFollowers = event => {
        this.setState({ i_followers: event.target.value });
        this.generateInstagramPrice(event.target.value);
    };

    changeTwLikes = event => {
        this.setState({ tw_likes: event.target.value });
    };

    changeTwFollowers = event => {
        this.setState({ tw_followers: event.target.value });
        this.generateTwitterPrice(event.target.value);
    };

    changeTtShares = event => {
        this.setState({ tt_shares: event.target.value });
    };

    changeTtLikes = event => {
        this.setState({ tt_likes: event.target.value });
    };

    changeTtFollowers = event => {
        this.setState({ tt__followes: event.target.value });
        this.generateTiktokPrice(event.target.value);
    };

    changeYLink = event => {
        this.setState({ youtube_link: event.target.value });
    };

    changeFLink = event => {
        this.setState({ facebook_link: event.target.value });
    };

    changeILink = event => {
        this.setState({ insta_link: event.target.value });
    };

    changeTWLink = event => {
        this.setState({ twitter_link: event.target.value });
    };

    changeTILink = event => {
        this.setState({ tiktok_link: event.target.value });
    };

    changeYoutubeViewsStatus = event => {
        var check = document.getElementById("y_v_check");
        var inputtag = document.getElementById("y_v_input");
        var rangetag = document.getElementById("y_v_range");
        var countrytag = document.getElementById("y_v_country");
        var agegroupmintag = document.getElementById("y_v_agegroup_min");
        var agegroupmaxtag = document.getElementById("y_v_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("y_v_gmale");
        var femaletag = document.getElementById("y_v_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ y_v_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ y_v_check: false });
        }
        this.generateYoutubePrice(this.state.y_views, "views")
    };

    changeYoutubesubscribeStatus = event => {
        var check = document.getElementById("y_s_check");
        var inputtag = document.getElementById("y_s_input");
        var rangetag = document.getElementById("y_s_range");
        var countrytag = document.getElementById("y_s_country");
        var agegroupmintag = document.getElementById("y_s_agegroup_min");
        var agegroupmaxtag = document.getElementById("y_s_agegroup_max");
        var maletag = document.getElementById("y_s_gmale");
        var femaletag = document.getElementById("y_s_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateYoutubePrice(this.state.y_subscribe, "subscribe")
    };

    changeFacebookPostlikeStatus = event => {
        var check = document.getElementById("f_pol_check");
        var inputtag = document.getElementById("f_pol_input");
        var rangetag = document.getElementById("f_pol_range");
        var countrytag = document.getElementById("f_pol_country");
        var agegroupmintag = document.getElementById("f_pol_agegroup_min");
        var agegroupmaxtag = document.getElementById("f_pol_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("f_pol_gmale");
        var femaletag = document.getElementById("f_pol_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ f_pl_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ f_pl_check: false });
        }
        this.generateFacebookPrice(this.state.f_Polikes, "pol")
    };

    changeFacebookPagelikeStatus = event => {
        var check = document.getElementById("f_pal_check");
        var inputtag = document.getElementById("f_pal_input");
        var rangetag = document.getElementById("f_pal_range");
        var countrytag = document.getElementById("f_pal_country");
        var agegroupmintag = document.getElementById("f_pal_agegroup_min");
        var agegroupmaxtag = document.getElementById("f_pal_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("f_pal_gmale");
        var femaletag = document.getElementById("f_pal_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateFacebookPrice(this.state.f_Palikes, "pal")
    };

    changeFacebookShareStatus = event => {
        var check = document.getElementById("f_s_check");
        var inputtag = document.getElementById("f_s_input");
        var rangetag = document.getElementById("f_s_range");
        var countrytag = document.getElementById("f_s_country");
        var agegroupmintag = document.getElementById("f_s_agegroup_min");
        var agegroupmaxtag = document.getElementById("f_s_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("f_s_gmale");
        var femaletag = document.getElementById("f_s_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateFacebookPrice(this.state.f_shares, "share")
    };

    changeInstagramFollowersStatus = event => {
        var check = document.getElementById("i_f_check");
        var inputtag = document.getElementById("i_f_input");
        var rangetag = document.getElementById("i_f_range");
        var countrytag = document.getElementById("i_f_country");
        var agegrouptag = document.getElementById("i_f_agegroup");
        var maletag = document.getElementById("i_f_gmale");
        var femaletag = document.getElementById("i_f_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ i_fol_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ i_fol_check: false });
        }
        this.generateInstagramPrice(this.state.i_followers)
    };

    changeInstagramlikesStatus = event => {
        var check = document.getElementById("i_l_check");
        var inputtag = document.getElementById("i_l_input");
        var rangetag = document.getElementById("i_l_range");
        var countrytag = document.getElementById("i_l_country");
        var agegrouptag = document.getElementById("i_l_agegroup");
        var maletag = document.getElementById("i_l_gmale");
        var femaletag = document.getElementById("i_l_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateInstagramPrice(this.state.i_likes)
    };

    changeTwitterFollowersStatus = event => {
        var check = document.getElementById("t_f_check");
        var inputtag = document.getElementById("t_f_input");
        var rangetag = document.getElementById("t_f_range");
        var countrytag = document.getElementById("tw_f_country");
        var agegrouptag = document.getElementById("tw_f_agegroup");
        var maletag = document.getElementById("tw_f_gmale");
        var femaletag = document.getElementById("tw_f_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ tw_fol_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ tw_fol_check: false });
        }
        this.generateTwitterPrice(this.state.tw_followers)
    };

    changeTwitterlikesStatus = event => {
        var check = document.getElementById("t_l_check");
        var inputtag = document.getElementById("t_l_input");
        var rangetag = document.getElementById("t_l_range");
        var countrytag = document.getElementById("tw_l_country");
        var agegrouptag = document.getElementById("tw_l_agegroup");
        var maletag = document.getElementById("tw_l_gmale");
        var femaletag = document.getElementById("tw_l_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateTwitterPrice(this.state.tw_likes)
    };

    changeTiktokFollowersStatus = event => {
        var check = document.getElementById("ti_f_check");
        var inputtag = document.getElementById("ti_f_input");
        var rangetag = document.getElementById("ti_f_range");
        var countrytag = document.getElementById("ti_f_country");
        var agegrouptag = document.getElementById("ti_f_agegroup");
        var maletag = document.getElementById("ti_f_gmale");
        var femaletag = document.getElementById("ti_f_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ ti_fol_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ ti_fol_check: false });
        }
        this.generateTiktokPrice(this.state.tt__followes)
    };

    changeTiktoklikesStatus = event => {
        var check = document.getElementById("ti_l_check");
        var inputtag = document.getElementById("ti_l_input");
        var rangetag = document.getElementById("ti_l_range");
        var countrytag = document.getElementById("ti_l_country");
        var agegrouptag = document.getElementById("ti_l_agegroup");
        var maletag = document.getElementById("ti_l_gmale");
        var femaletag = document.getElementById("ti_l_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateTiktokPrice(this.state.tt_likes)
    };

    changeTiktokSharesStatus = event => {
        var check = document.getElementById("ti_s_check");
        var inputtag = document.getElementById("ti_s_input");
        var rangetag = document.getElementById("ti_s_range");
        var countrytag = document.getElementById("ti_s_country");
        var agegrouptag = document.getElementById("ti_s_agegroup");
        var maletag = document.getElementById("ti_s_gmale");
        var femaletag = document.getElementById("ti_s_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateTiktokPrice(this.state.tt_shares)
    };

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();

    }


    changeNavLink(menu) {
        var menu1 = document.getElementById("menu11");
        var menu2 = document.getElementById("menu22");
        var menu3 = document.getElementById("menu33");
        var menu4 = document.getElementById("menu44");
        var menu5 = document.getElementById("menu55");
        if (menu === "menu1") {
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            this.generateYoutubePrice(this.state.y_views, "views");
        } else if (menu === "menu2") {
            menu1.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            this.generateFacebookPrice(this.state.f_Polikes, "pol");
        } else if (menu === "menu3") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            this.generateInstagramPrice(this.state.i_followers);
        } else if (menu === "menu4") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu5.classList.remove("active");
            this.generateTwitterPrice(this.state.tw_followers);
        } else if (menu === "menu5") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            this.generateTiktokPrice(this.state.tt__followes);
        }

    }

    checkoutOrder = (e) => {
        var menu1 = document.getElementById("menu11");
        var menu2 = document.getElementById("menu22");
        var menu3 = document.getElementById("menu33");
        var menu4 = document.getElementById("menu44");
        var menu5 = document.getElementById("menu55");

        if (menu1.classList.contains("active")) {

            var y_v_check = document.getElementById("y_v_check");
            var y_s_check = document.getElementById("y_s_check");
            var vcountry = document.getElementById("y_v_country");


            var options = vcountry && vcountry.options;
            var vresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    vresult.push(opt.value || opt.text);

                }
            }
            var vagegroupmin = document.getElementById("y_v_agegroup_min").value;
            var vagegroupmax = document.getElementById("y_v_agegroup_max").value;
            var vagegroup = vagegroupmin + " to " + vagegroupmax;
            var vgendertag = document.getElementById("y_v_gmale");
            var vgender = "";
            if (vgendertag.checked) {
                vgender = "male";
            } else {
                vgender = "female";
            }
            var scountry = document.getElementById("y_s_country");
            var options = scountry && scountry.options;
            var sresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    sresult.push(opt.value || opt.text);

                }
            }
            var sagegroupmin = document.getElementById("y_s_agegroup_min").value;
            var sagegroupmax = document.getElementById("y_s_agegroup_max").value;
            var sagegroup = sagegroupmin + " to " + sagegroupmax;
            var sgendertag = document.getElementById("y_s_gmale");
            var sgender = "";
            if (sgendertag.checked) {
                sgender = "male";
            } else {
                sgender = "female";
            }
            if (y_v_check.checked && y_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: vresult + ',' + sresult, social: 'youtube', agegroup: vagegroup + ',' + sagegroup, gender: vgender + ',' + sgender, link: this.state.youtube_link, cost: this.state.final_earning, service: 'views,subscribers', count: this.state.y_views + "," + this.state.y_subscribe }
                console.log(JSON.stringify(orderdetails))
                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (y_v_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: vresult + '', social: 'youtube', agegroup: vagegroup, gender: vgender, link: this.state.youtube_link, cost: this.state.final_earning, service: 'views', count: this.state.y_views }
                console.log("orderrr-> " + JSON.stringify(orderdetails))
                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (y_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: sresult + '', social: 'youtube', agegroup: sagegroup, gender: sgender, link: this.state.youtube_link, cost: this.state.final_earning, service: 'subscribers', count: this.state.y_subscribe }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            }

        } else if (menu2.classList.contains("active")) {
            var f_pol_check = document.getElementById("f_pol_check");
            var f_pal_check = document.getElementById("f_pal_check");
            var f_s_check = document.getElementById("f_s_check");
            var polcountry = document.getElementById("f_pol_country");
            var palcountry = document.getElementById("f_pal_country");
            var scountry = document.getElementById("f_s_country");

            var options = polcountry && polcountry.options;
            var polresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    polresult.push(opt.value || opt.text);

                }
            }
            var polagegroupmin = document.getElementById("f_pol_agegroup_min").value;
            var polagegroupmax = document.getElementById("f_pol_agegroup_max").value;
            var polagegroup = polagegroupmin + " to " + polagegroupmax;


            var options = palcountry && palcountry.options;
            var palresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    palresult.push(opt.value || opt.text);

                }
            }
            var palagegroupmin = document.getElementById("f_pal_agegroup_min").value;
            var palagegroupmax = document.getElementById("f_pal_agegroup_max").value;
            var palagegroup = palagegroupmin + " to " + palagegroupmax;

            

            var options = scountry && scountry.options;
            var sresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    sresult.push(opt.value || opt.text);

                }
            }
            var sagegroupmin = document.getElementById("f_s_agegroup_min").value;
            var sagegroupmax = document.getElementById("f_s_agegroup_max").value;
            var sagegroup = sagegroupmin + " to " + sagegroupmax;

            // var polagegroup = document.getElementById("f_pol_agegroup").value;
            // var palagegroup = document.getElementById("f_pal_agegroup").value;
            // var sagegroup = document.getElementById("f_s_agegroup").value;

            var polgendertag = document.getElementById("f_pol_gmale");
            var palgendertag = document.getElementById("f_pal_gmale");
            var sgendertag = document.getElementById("f_s_gmale");

            var polgender = "";
            if (polgendertag.checked) {
                polgender = "male";
            } else {
                polgender = "female";
            }
            var palgender = "";
            if (palgendertag.checked) {
                palgender = "male";
            } else {
                palgender = "female";
            }
            var sgender = "";
            if (sgendertag.checked) {
                sgender = "male";
            } else {
                sgender = "female";
            }

            if (f_pol_check.checked && f_pal_check.checked && f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult + ',' + palresult + ',' + sresult, social: 'facebook', agegroup: polagegroup + ',' + palagegroup + ',' + sagegroup, gender: polgender + ',' + palgender + ',' + sgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes,page likes,shares', count: this.state.f_Polikes + "," + this.state.f_Palikes + ',' + this.state.f_shares }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (f_pol_check.checked && f_pal_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult + ',' + palresult, social: 'facebook', agegroup: polagegroup + ',' + palagegroup, gender: polgender + ',' + palgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes,page likes', count: this.state.f_Polikes + "," + this.state.f_Palikes }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (f_pol_check.checked && f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult + ',' + sresult, social: 'facebook', agegroup: polagegroup + ',' + sagegroup, gender: polgender + ',' + sgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes,shares', count: this.state.f_Polikes + "," + this.state.f_shares }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (f_pal_check.checked && f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: palresult + ',' + sresult, social: 'facebook', agegroup: palagegroup + ',' + sagegroup, gender: palgender + ',' + sgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'page likes,shares', count: this.state.f_Palikes + "," + this.state.f_shares }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (f_pol_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult, social: 'facebook', agegroup: polagegroup, gender: polgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes', count: this.state.f_Polikes }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (f_pal_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: palresult, social: 'facebook', agegroup: palagegroup, gender: palgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'page likes', count: this.state.f_Palikes }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            } else if (f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: sresult, social: 'facebook', agegroup: palagegroup, gender: palgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'shares', count: this.state.f_Palikes }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            }
        } else if (menu3.classList.contains("active")) {
            var i_f_check = document.getElementById("i_f_check");
            // var i_l_check = document.getElementById("i_l_check");
            var fcountry = document.getElementById("i_f_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("i_f_agegroup_min").value;
            var fagegroupmax = document.getElementById("i_f_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("i_f_agegroup").value;
            var fgendertag = document.getElementById("i_f_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            // var lcountry = document.getElementById("i_l_country").value;
            // var lagegroup = document.getElementById("i_l_agegroup").value;
            // var lgendertag = document.getElementById("i_l_gmale");
            // var lgender = "";
            // if (lgendertag.checked) {
            //     lgender = "male";
            // } else {
            //     lgender = "female";
            // }

            // if (i_f_check.checked && i_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: fcountry + ',' + lcountry, social: 'instagram', agegroup: fagegroup + ',' + lagegroup, gender: fgender + ',' + lgender, link: this.state.youtube_link, cost: 50.00, service: 'followers,likes', count: this.state.i_followers + "," + this.state.i_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // } else 
            if (i_f_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: fresult, social: 'instagram', agegroup: fagegroup, gender: fgender, link: this.state.insta_link, cost: this.state.final_earning, service: 'followers', count: this.state.i_followers }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            }
            // else if (i_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: lcountry, social: 'instagram', agegroup: lagegroup, gender: lgender, link: this.state.insta_link, cost: 50.00, service: 'likes', count: this.state.i_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // }
        } else if (menu4.classList.contains("active")) {
            var tw_f_check = document.getElementById("t_f_check");
            // var tw_l_check = document.getElementById("t_l_check");
            var fcountry = document.getElementById("tw_f_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("tw_f_agegroup_min").value;
            var fagegroupmax = document.getElementById("tw_f_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("tw_f_agegroup").value;
            var fgendertag = document.getElementById("tw_f_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            // var lcountry = document.getElementById("tw_l_country").value;
            // var lagegroup = document.getElementById("tw_l_agegroup").value;
            // var lgendertag = document.getElementById("tw_l_gmale");
            // var lgender = "";
            // if (lgendertag.checked) {
            //     lgender = "male";
            // } else {
            //     lgender = "female";
            // }

            // if (tw_f_check.checked && tw_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: fcountry + ',' + lcountry, social: 'twitter', agegroup: fagegroup + ',' + lagegroup, gender: fgender + ',' + lgender, link: this.state.twitter_link, cost: 50.00, service: 'followers,likes', count: this.state.tw_followers + "," + this.state.tw_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // } else 
            if (tw_f_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: fresult, social: 'twitter', agegroup: fagegroup, gender: fgender, link: this.state.twitter_link, cost: this.state.final_earning, service: 'followers', count: this.state.tw_followers }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            }
            // else if (tw_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: lcountry, social: 'twitter', agegroup: lagegroup, gender: lgender, link: this.state.twitter_link, cost: 50.00, service: 'likes', count: this.state.tw_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // }
        } else if (menu5.classList.contains("active")) {
            var ti_f_check = document.getElementById("ti_f_check");
            var fcountry = document.getElementById("ti_f_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("ti_f_agegroup_min").value;
            var fagegroupmax = document.getElementById("ti_f_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("ti_f_agegroup").value;
            var fgendertag = document.getElementById("ti_f_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            if (ti_f_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: fresult, social: 'tiktok', agegroup: fagegroup, gender: fgender, link: this.state.tiktok_link, cost: this.state.final_earning, service: 'followers', count: this.state.tw_followers }

                orderService.saveorder(orderdetails).then(res => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!');
                        }
                    }
                });
            }
        }

    }


    render() {

        return (

            <div style={{ backgroundColor: "white" }}>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />


                </Helmet>

                <header class="header">
                    <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">

                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

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

                <div class="main">

                    <div class="s-layout">
                        {/* <!-- Sidebar --> */}
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

                        {/* <!-- Content --> */}
                        <main class="s-layout__content" style={{ height: "100%", marginTop: "50px", width: "100%", }}>
                            <div>
                                <div class="container">
                                    <h3 style={{ marginBottom: "10px", marginLeft: "4%", marginTop: "10px" }}>I want to promote my</h3>
                                    <div class="" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", width: "95%" }}>


                                        <div class="container" style={{ marginTop: "10px" }}>
                                            <br />
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">

                                                    <a class="nav-link active menu1" data-toggle="tab" href="#menu1" id="menu11" onClick={() => this.changeNavLink('menu1')}><img class="button-enter__icon" src="assets/img/icons/yt.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">

                                                    <a class="nav-link menu2" data-toggle="tab" href="#menu2" id="menu22" onClick={() => this.changeNavLink('menu2')}><img class="button-enter__icon" src="assets/img/icons/facebook.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu3" data-toggle="tab" href="#menu3" id="menu33" onClick={() => this.changeNavLink('menu3')}><img class="button-enter__icon" src="assets/img/icons/ig.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu4" data-toggle="tab" href="#menu4" id="menu44" onClick={() => this.changeNavLink('menu4')}><img class="button-enter__icon" src="assets/img/icons/tw.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu5" data-toggle="tab" href="#menu5" id="menu55" onClick={() => this.changeNavLink('menu5')}><img class="button-enter__icon" src="assets/img/icons/tik.png" alt="" /></a>
                                                </li>

                                            </ul>

                                            {/* social media button navigation */}
                                        </div>
                                        <div class="tab-content" >


                                            <div id="menu1" class="container tab-pane active" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your YOUTUBE URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.youtube.com/watch.. or https://www.youtube.com/channel.." value={this.state.youtube_link} onChange={this.changeYLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>

                                                {/* set view count */}
                                                {/* <form> */}
                                                <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/eye.png" alt="" />
                                                    <input type="checkbox" id="y_v_check" checked={this.state.y_v_check} onChange={this.changeYoutubeViewsStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: " 0px", fontSize: "19px" }}><strong>Views</strong></span></div>
                                                <div class="form-group">
                                                    <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" onChange={this.changeViews} id="y_v_input" name="quantity" min="100" max="50000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>
                                                </div>

                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-12 col-md-4">
                                                            <span><b>Region</b></span>&nbsp;&nbsp;&nbsp;
                                                            <select className="selectpicker" id="y_v_country" multiple data-live-search="true" data-actions-box="true">
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
                                                        <div class="col-12 col-md-4">
                                                            <div>
                                                                <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                <input type="number" min="14" max="60" id="y_v_agegroup_min" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                <input type="number" min="14" max="60" id="y_v_agegroup_max" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                            </div>
                                                            <br />
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <span style={{ marginTop: "10px" }}><b>Gender</b></span>&nbsp;&nbsp;
                                                                <input id="y_v_gmale" type="radio" name="y_viewsradio" checked="checked" />Male&nbsp;
                                                                <input id="y_v_gfemale" type="radio" name="y_viewsradio" />Female&nbsp;
                                                        </div>
                                                    </div>
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                </div>
                                                <input type="range" id="y_v_range" min={this.state.min_yviews} max={this.state.max_yviews} step="1" value={this.state.y_views} onChange={this.changeViews} style={{ width: '100%' }} />
                                                {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                <output id="amount" name="amount" for="range">{this.state.y_views}</output>



                                                <form style={{ marginTop: "3%" }}>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" onChange={this.changeYoutubesubscribeStatus} id="y_s_check" style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Subscribers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="y_s_input" disabled="disable" onChange={this.changeSubscribers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>&nbsp;&nbsp;&nbsp;
                                                        <select id="y_s_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="y_s_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="y_s_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="y_s_gmale" type="radio" name="y_viewsradio" disabled="disable" checked="checked" />Male&nbsp;
                                                    <input id="y_s_gfemale" type="radio" name="y_viewsradio" disabled="disable" />Female&nbsp;
                                                            </div>
                                                            {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" disabled="disable" id="y_s_range" min={this.state.min_ysub} max={this.state.max_ysub} step="1" value={this.state.y_subscribe} onChange={this.changeSubscribers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.y_subscribe}</output>



                                                </form>
                                            </div>

                                            <div id="menu2" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your FACEBOOK URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.facebook.com/..." value={this.state.facebook_link} onChange={this.changeFLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                                        <div class="input-group-append">
                                                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"> <img class="button-enter__icon" src="assets/img/icons/search.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>


                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="f_pol_check" checked={this.state.f_pl_check} onChange={this.changeFacebookPostlikeStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Post Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="f_pol_input" name="quantity" onChange={this.changePostLikes} min="1000" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="f_pol_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="f_pol_agegroup_min" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="f_pol_agegroup_max" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="f_pol_gmale" type="radio" name="f_pol_radio" checked="checked" />Male&nbsp;
                                                    <input id="f_pol_gfemale" type="radio" name="f_pol_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="f_pol_range" min={this.state.min_fpolike} max={this.state.max_fpolike} step="1" value={this.state.f_Polikes} onChange={this.changePostLikes} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.f_Polikes}</output>



                                                </form>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="f_pal_check" onChange={this.changeFacebookPagelikeStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Page Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" disabled="disable" id="f_pal_input" name="quantity" onChange={this.changePageLikes} min="1000" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="f_pal_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="f_pal_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="f_pal_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="f_pal_gmale" disabled="disable" type="radio" name="f_pal_radio" checked="checked" />Male&nbsp;
                                                    <input id="f_pal_gfemale" disabled="disable" type="radio" name="f_pal_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="f_pal_range" disabled="disable" min={this.state.min_fpalike} max={this.state.max_fpalike} step="1" value={this.state.f_Palikes} onChange={this.changePageLikes} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.f_Palikes}</output>


                                                </form>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/share2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="f_s_check" onChange={this.changeFacebookShareStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Shares</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" disabled="disable" id="f_s_input" onChange={this.changeFShares} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="f_s_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="f_s_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="f_s_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="f_s_gmale" type="radio" disabled="disable" name="f_s_radio" checked="checked" />Male&nbsp;
                                                    <input id="f_s_gfemale" type="radio" disabled="disable" name="f_s_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="f_s_range" disabled="disable" min={this.state.min_fshares} max={this.state.max_fshares} step="1" value={this.state.f_shares} onChange={this.changeFShares} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.f_shares}</output>

                                                </form>

                                            </div>

                                            <div id="menu3" class="container tab-pane fade" style={{ marginTop: "15px" }} ><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your INSTAGRAM URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.instagram.com/..." value={this.state.insta_link} onChange={this.changeILink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                                        <div class="input-group-append">
                                                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"> <img class="button-enter__icon" src="assets/img/icons/search.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.i_fol_check} id="i_f_check" onChange={this.changeInstagramFollowersStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Followers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="i_f_input" onChange={this.changeIFollowers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="i_f_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="i_f_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="i_f_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="i_f_gmale" type="radio" name="i_f_radio" checked="checked" />Male&nbsp;
                                                    <input id="i_f_gfemale" type="radio" name="i_f_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="i_f_range" min="1000" max="500000" step="1" value={this.state.i_followers} onChange={this.changeIFollowers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.i_followers}</output>


                                                </form>

                                                {/* <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="i_l_check" onChange={this.changeInstagramlikesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="i_l_input" disabled="disable" onChange={this.changeILikes} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="i_l_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="i_l_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="i_l_gmale" disabled="disable" type="radio" name="i_l_radio" checked="checked" />Male&nbsp;
                                                    <input id="i_l_gfemale" disabled="disable" type="radio" name="i_l_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="i_l_range" disabled="disable" min="1000" max="500000" step="1" value={this.state.i_likes} onChange={this.changeILikes} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.i_likes}</output>


                                                </form> */}
                                            </div>

                                            <div id="menu4" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your TWITTER URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://twitter.com/" value={this.state.twitter_link} onChange={this.changeTWLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                                        <div class="input-group-append">
                                                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"> <img class="button-enter__icon" src="assets/img/icons/search.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.tw_fol_check} id="t_f_check" onChange={this.changeTwitterFollowersStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Followers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="t_f_input" onChange={this.changeTwFollowers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="tw_f_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="tw_f_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="tw_f_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="tw_f_gmale" type="radio" name="tw_f_radio" checked="checked" />Male&nbsp;
                                                    <input id="tw_f_gfemale" type="radio" name="tw_f_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="t_f_range" min="1000" max="500000" step="1" value={this.state.tw_followers} onChange={this.changeTwFollowers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.tw_followers}</output>


                                                </form>

                                                {/* <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="t_l_check" onChange={this.changeTwitterlikesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="t_l_input" disabled="disable" onChange={this.changeTwLikes} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>

                                                    <label for="customRange1"></label>
                                                    <input type="range" disabled="disable" id="t_l_range" min="1000" max="500000" step="1" value={this.state.tw_likes} onChange={this.changeTwLikes} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.tw_likes}</output>

                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="tw_l_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="tw_l_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="tw_l_gmale" disabled="disable" type="radio" name="tw_l_radio" checked="checked" />Male&nbsp;
                                                    <input id="tw_l_gfemale" disabled="disable" type="radio" name="tw_l_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                </form> */}

                                            </div>

                                            <div id="menu5" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your TIKTOK URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.tiktok.com/" value={this.state.tiktok_link} onChange={this.changeTILink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                                        <div class="input-group-append">
                                                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"> <img class="button-enter__icon" src="assets/img/icons/search.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h6 style={{ marginLeft: "10px", marginTop: "-18px" }}>Paste TikTok URL or enter keywords to search</h6>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.ti_fol_check} id="ti_f_check" onChange={this.changeTiktokFollowersStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Followers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="ti_f_input" onChange={this.changeTtFollowers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="ti_f_country" className="selectpicker" multiple data-live-search="true" data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="ti_f_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="ti_f_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="ti_f_gmale" type="radio" name="ti_f_radio" checked="checked" />Male&nbsp;
                                                    <input id="ti_f_gfemale" type="radio" name="ti_f_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="ti_f_range" min="1000" max="500000" step="1" value={this.state.tt__followes} onChange={this.changeTtFollowers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.tt__followes}</output>

                                                </form>

                                                {/* <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="ti_l_check" onChange={this.changeTiktoklikesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="ti_l_input" disabled="disable" onChange={this.changeTtLikes} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="ti_l_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="ti_l_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="ti_l_gmale" disabled="disable" type="radio" name="ti_s_radio" checked="checked" />Male&nbsp;
                                                    <input id="ti_l_gfemale" disabled="disable" type="radio" name="ti_s_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="ti_l_range" disabled="disable" min="1000" max="500000" step="1" value={this.state.tt_likes} onChange={this.changeTtLikes} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.tt_likes}</output>


                                                </form>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/share2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="ti_s_check" onChange={this.changeTiktokSharesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Shares</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" onChange={this.changeTtShares} id="ti_s_input" disabled="disable" name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="ti_s_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="ti_s_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="ti_s_gmale" disabled="disable" type="radio" name="ti_s_radio" checked="checked" />Male&nbsp;
                                                    <input id="ti_s_gfemale" disabled="disable" type="radio" name="ti_s_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="ti_s_range" disabled="disable" min="1000" max="500000" step="1" value={this.state.tt_shares} onChange={this.changeTtShares} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.tt_shares}</output>

                                                </form>  */}
                                            </div>

                                        </div>

                                        <div class="form-group" style={{ marginLeft: "20px", marginTop: "10px" }}>




                                            <div class="row" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>

                                                <div class="col-md-3">
                                                    <h6 style={{ marginTop: "5px" }}><strong>Order Summary </strong></h6>
                                                </div>
                                                <div class="col-md-2">
                                                    <h4><strong>Total : </strong></h4>
                                                </div>
                                                <div class="col-md-6">
                                                    <h4><strong>{this.state.total_price}</strong></h4>
                                                </div>
                                                <br />




                                            </div>
                                            {/* <div class="text-center">
                                                <button class="btn btn-success" type="button" onClick={this.checkoutOrder}><img class="button-enter__icon" src="assets/img/icons/cart.png" alt="" /><strong>Checkout</strong></button>
                                            </div> */}
                                            {

                                                this.state.total_price != "Contact us for get this price" ?
                                                    <PayPalButton
                                                        amount='0.01'
                                                        // amount={this.state.final_earning}
                                                        shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                        onApprove={(details, data) => {
                                                            // alert("Transaction completed");
                                                            this.checkoutOrder();
                                                            // OPTIONAL: Call your server to save the transaction
                                                            // return fetch("/paypal-transaction-complete", {
                                                            //     method: "post",
                                                            //     body: JSON.stringify({
                                                            //         orderID: data.orderID
                                                            //     })
                                                            // });
                                                        }}
                                                    /> :
                                                    <p></p>
                                            }


                                            {/* <script src="https://www.paypal.com/sdk/js?client-id=ARBe1vbFU4IHz1fbYF1wtG3kW8AV09wrsie-rqXafRx1Q8sBqplzOd5mYv_v0M0kTlFJzbJDxri8MmvP" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        );
    }

}
export default Dash
// function Name(params) {
//     const [paid, setPaid] = React.useState(false);
// const [error, setError] = React.useState(null);
// const paypalRef = React.useRef();

// // To show PayPal buttons once the component loads
// React.useEffect(() => {
//     window.paypal
//         .Buttons({
//             createOrder: (data, actions) => {
//                 return actions.order.create({
//                     intent: "CAPTURE",
//                     purchase_units: [
//                         {
//                             description: "Your description",
//                             amount: {
//                                 currency_code: "INR",
//                                 value: 500.0,
//                             },
//                         },
//                     ],
//                 });
//             },
//             onApprove: async (data, actions) => {
//                 const order = await actions.order.capture();
//                 setPaid(true);
//             },
//             onError: (err) => {
//                 //   setError(err),
//                 console.error(err);
//             },
//         })
//         .render(paypalRef.current);
// }, []);

// // If the payment has been made
// if (paid) {
//     return <div>Payment successful.!</div>;
// }

// // If any error occurs
// if (error) {
//     return <div>Error Occurred in processing payment.! Please try again.</div>;
// }

// // Default Render
// return (
//     <div>
//         <h4>Total Amount in Rs. : 500 /-</h4>
//         <div ref={paypalRef} />
//     </div>
// );
// } 



// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };

// // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#y_s_settings')

// function App() {
//     var subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);
//     function openModal() {
//         setIsOpen(true);
//     }

//     function afterOpenModal() {
//         // references are now sync'd and can be accessed.
//         subtitle.style.color = '#f00';
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     return (
//         <div>
//             <button onClick={openModal}>Open Modal</button>
//             <Modal
//                 isOpen={modalIsOpen}
//                 onAfterOpen={afterOpenModal}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >

//                 <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//                 <button onClick={closeModal}>close</button>
//                 <div>I am a modal</div>
//                 <form>
//                     <input />
//                     <button>tab navigation</button>
//                     <button>stays</button>
//                     <button>inside</button>
//                     <button>the modal</button>
//                 </form>
//             </Modal>
//         </div>
//     );
// }
// ReactDOM.render(<App />, appElement);