import React, { Component } from 'react';
import toast from 'toast-me';
import userServices from '../../services/userServices';
import queryString from 'query-string';
import Cookies from 'js-cookie';

class GetPath extends React.Component {
    constructor(props) {
		super(props)
		this.state = {

		}
	}

    componentDidMount() {
        this.verify();
    }

    verify () {
		const value = queryString.parse(this.props.location.search);
        const token = value.click;
        userServices.getPath().then(res => {
            
           alert(res.data)
        });
	}

    render() {
        return (
            <div>
                E-mail Verification In Progress
            </div>
        );
    }
};

export default GetPath