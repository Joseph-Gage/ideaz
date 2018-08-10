import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Ideaz</h1>
                </header>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <Provider store={this.props.store}>
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={SignIn}/>
                                    <Route path="/sign-up" component={SignUp}/>
                                </Switch>
                            </Router>
                        </Provider>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
