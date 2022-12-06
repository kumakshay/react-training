import React from 'react';
import XtremeCarsLogo from './images/XtremeCarsLogo.png';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingpage/landingpage';
import CarList from './components/carlist/carlist';
import CarDetails from './components/cardetails/cardetails';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container-fluid">
          <img className="logo-img" src={XtremeCarsLogo}  alt="broken" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id="nav-link 1" aria-current="page" >NEW CARS</a>
                </li>
                <li className="nav-item">
                  <a id="nav-link 2">USED CARS</a>
                </li>
                <li className="nav-item">
                  <a id="nav-link 3">MY PROFILE</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
    <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/carlist" element={<CarList/>}></Route>
    <Route path="/carDetail/:id" element={<CarDetails/>}></Route>
    </Routes>
    </React.Fragment>
  );
}

export default App;
