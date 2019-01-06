import React from 'react'
import { NavLink } from 'react-router-dom';

const SignIn = props => (
    <div className="SignIn">
        <h2>Sign in</h2>
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input type="email"
                       className="form-control"
                       placeholder="Email address"
                       name="email"
                       onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <input type="password"
                       className="form-control"
                       placeholder="Password"
                       name="password"
                       onChange={props.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <br/>
        <small>Or <NavLink to="/sign-up">sign up</NavLink></small>
    </div>
);

export default SignIn;
