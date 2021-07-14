import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Pages/Home';
import Service from './Components/Pages/Service';
import Profile from './Components/Pages/Profile';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';

import Navbarmenu from './Components/Menu/Navbarmenu'
import Marketing from './Components/Pages/Marketing';
import RadioOnline from './Components/Pages/RadioOnline';


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
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/Marketing" component={Marketing} />
        <Route exact path="/RadioOnline" component={RadioOnline} />
      </Switch>
    </Router>
    
  );
}

export default App;
