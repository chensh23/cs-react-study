import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import CRoute from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store'
ReactDOM.render(<Provider store={store}><App><CRoute/></App></Provider>, document.getElementById('root'));
registerServiceWorker();
