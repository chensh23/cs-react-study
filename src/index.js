import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './style';
import App from './App';
import CRoute from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd"
ReactDOM.render(<Provider store={store}><LocaleProvider locale={zhCN}><App><CRoute/></App></LocaleProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
/*if(module.hot){
    module.hot.accept();
}*/
