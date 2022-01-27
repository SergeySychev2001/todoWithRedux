import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux'
import store from './redux/store'

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '10px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider {...options} template={AlertTemplate}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
