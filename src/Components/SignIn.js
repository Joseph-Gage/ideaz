import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class SignIn extends Component {
    handleSubmit(e) {
        let authParams = {
            email: this.refs.email.value,
            password: this.refs.password.value
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
            sessionStorage.setItem('authToken', json.data.attributes.accessToken);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="SignIn">
                <h2>Sign in</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="email" className="form-control" ref="email" placeholder="Email address"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" ref="password" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <br/>
                <small>Or <NavLink to="/sign-up">sign up</NavLink></small>
            </div>
        );
    }
}

export default SignIn;
