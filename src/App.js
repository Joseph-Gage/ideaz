import React, {Component} from 'react';
import SignIn from './Components/SignIn'
import './App.css';

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
                        <SignIn/>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

export default App;
