// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FlowMeters from './pages/flowMeters';
import SCADA from './pages/SCADA';
import Services from './pages/services';
import Home from './pages/hompage';
import Contact from './components/Contact';


function App() {

  return (
    <Router>

      <section className="mainBg">
        <Navbar />
        <div>
          <Switch>
            <Route
              exact
              path="/">
              <Home />
            </Route>
            <Route
              exact
              path="/meters">
              <FlowMeters />
            </Route>
            <Route
              exact
              path="/scada">
              <SCADA />
            </Route>
            <Route
              exact
              path="/services">
              <Services />
            </Route>
          </Switch>
        </div>
        <Contact />
      </section>
    </Router>
  );
}

export default App;
