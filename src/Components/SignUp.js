import React, {Component} from 'react'

class SignUp extends Component {
    handleSubmit(e) {
        let signUpParams = {
            username: this.refs.username,
            email: this.refs.email.value,
            password: this.refs.password.value,
            passwordConfirmation: this.refs.passwordConfirmation.value
        };

        fetch('http://localhost:3000/sign-up', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpParams)
        }).then(results => {
            return results.json();
        }).then(json => {
            //sessionStorage.setItem('authToken', json.data.attributes.accessToken);
            console.log(json);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="SignUp">
                <h2>Sign up</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input className="form-control" ref="username" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" ref="email" placeholder="Email address"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" ref="password" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" ref="passwordConfirmation"
                               placeholder="Confirm password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
