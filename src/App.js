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
import EventOrganize from './Components/Pages/EventOrganize';
import Promotion from './Components/Pages/Promotion';
import PhotoandVideo from './Components/Pages/PhotoandVideo';


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
        <Route exact path="/Promotion" component={Promotion} />
        <Route exact path="/EventOrganize" component={EventOrganize} />
        <Route exact path="/Marketing" component={Marketing} />
        <Route exact path="/RadioOnline" component={RadioOnline} />
        <Route exact path="/PhotoandVideo" component={PhotoandVideo} />
      </Switch>
    </Router>
    
  );
}

export default App;
