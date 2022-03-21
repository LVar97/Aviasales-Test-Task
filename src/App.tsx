import React from 'react';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';
import './styles/index.scss';
import logo from "./image/Logo.png";

function App() {

  return (
    <div className="app">
      <img src={logo} alt="logo" className="app__logo" />
      <div className="wrapper">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
