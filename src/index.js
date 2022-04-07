import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { BrowserRouter } from "react-router-dom";
import { Route, Routes} from 'react-router-dom';
import Detail from './components/pages/Detail';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App tasks={DATA} />}/>
      <Route path="/:task" element={<Detail/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root')
);

reportWebVitals();