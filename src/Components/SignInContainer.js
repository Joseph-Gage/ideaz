import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateSignedIn } from '../Actions'
import SignIn from "./SignIn";

const mapDispatchToProps = dispatch => {
    return {
        updateSignedIn: isSignedIn => dispatch(updateSignedIn(isSignedIn))
    };
};

class ConnectedSignInContainer extends Component {
    constructor() {
        super();

        this.state = {
            shouldRedirect: false
        }
    }

    handleSubmit = e => {
        let authParams = {
            email: e.target[0].value,
            password: e.target[1].value
        };

        fetch('http://localhost:3000/auth/sign-in', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authParams)
        }).then(results => {
            return results.json();
        }).then(json => {
            sessionStorage.setItem('accessToken', json.data.attributes.accessToken);
            this.props.updateSignedIn(true);
            this.setState({ shouldRedirect: true })
        });
        e.preventDefault();
    };

    render() {
        if (this.state.shouldRedirect) {
            return (
                <Redirect push to="/ideas"/>
            )
        }
        return <SignIn handleSubmit={this.handleSubmit}/>
    }
}

const SignInContainer = connect(null, mapDispatchToProps)(ConnectedSignInContainer);

export default SignInContainer;
