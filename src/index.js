import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CRoute from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App><CRoute/></App>, document.getElementById('root'));
registerServiceWorker();
