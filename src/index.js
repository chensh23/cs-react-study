import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CRoute from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CRoute />, document.getElementById('root'));
registerServiceWorker();
