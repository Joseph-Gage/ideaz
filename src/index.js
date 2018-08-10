import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import rootReducer from './Reducers/index'
import App from './App'

const store = createStore(rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);

registerServiceWorker();
