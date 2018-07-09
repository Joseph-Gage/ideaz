import React, { Component } from 'react';

class Signin extends Component {
  render() {
    return (
      <div className="Signin">
        <h2>Sign in</h2>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Email address"></input>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default Signin;
