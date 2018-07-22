import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker'
import {createStore} from 'redux'
import rootReducer from './Reducers/reducers'
import App from './App'

const store = createStore(rootReducer);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);

registerServiceWorker();
