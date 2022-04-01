import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import reportWebVitals from './reportWebVitals';
import  { BrowserRouter } from "react-router-dom";
import Detail from "./components/pages/Detail";



const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })



ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App tasks={DATA}/>
  </BrowserRouter>,
  </React.StrictMode>, 
  document.getElementById('root')
  
);

reportWebVitals();