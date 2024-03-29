import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import { SmartUserInfo } from './components/SmartUserInfo';


ReactDOM.render(
    <BrowserRouter>
      <Routes>
      <Route path="/user" element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/user/:userid" element={<SmartUserInfo />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

