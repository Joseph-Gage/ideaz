import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import authenticationActions from '../Actions/authenticationActions'
import SignIn from './SignIn'

class SignInContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { dispatch, history } = this.props;
        if (email && password)
            dispatch(authenticationActions.signIn(email, password, history));
    };

    render() {
        if (this.props.isSignedIn) {
            return <Redirect push to="/ideas"/>
        }

        return <SignIn handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.authenticationReducer.isSignedIn }
};

export default connect(mapStateToProps)(SignInContainer);
