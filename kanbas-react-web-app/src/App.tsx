import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (

    <div className="App">
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
          </Routes>
        </div>
      </HashRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
