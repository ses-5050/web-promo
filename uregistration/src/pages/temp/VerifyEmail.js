import React, { Component } from 'react';
import toast from 'toast-me';
import userServices from '../../services/userServices';

class VerifyEmail extends React.Component {
    componentDidMount(){
        const value = queryString.parse(this.props.location.search);
		const token = value.click;
        userServices.VerifyEmail(token).then(res=>{
            if (res.data==="success") {
                this.props.history.push('/profile');
                toast('Email Verified');
            }else{
                toast('Something went wrong. Contact support');
            }
        });
    }
};

export default VerifyEmail