import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Service from './Components/Service';
import Profile from './Components/Profile';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

import Navbarmenu from './Components/Menu/Navbarmenu'
import Marketing from './Components/Marketing';
import BuildWeb from './Components/BuildWeb';


function App() {
  return (
    <Router basename="/">
      {/* แถบเมนูใช้งาน */}
      <Navbarmenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Contactus" component={ContactUs} />
        <Route exact path="/Marketing" component={Marketing} />
        <Route exact path="/BuildWeb" component={BuildWeb} />
      </Switch>
    </Router>
    
  );
}

export default App;
