import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clicker from './clickerHooks';
import Click from './clicker';
import TodoMain from './TodoMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path="/Clicker" element={<Clicker />} /> 
      <Route path="/Click" element={<Click />} />
      <Route path="/toDoMain" element={<TodoMain />} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
