import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import SignUp from './Components/SignUp'
import SignInContainer from './Components/SignInContainer'
import IdeaListContainer from './Components/IdeaListContainer'
import Header from './Components/Header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={SignInContainer}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/ideas" component={IdeaListContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;
