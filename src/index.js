import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./Redux/Redusers/RootReduser";
const commonStore=createStore(
    rootReducer,

)
ReactDOM.render(
  <React.StrictMode>
         <Provider store={commonStore}>
             <App />
         </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
