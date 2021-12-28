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
  // Using useState, set the default value for currentPage to 'Home'
  // const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Flow-Meters':
  //       return <FlowMeters />;
  //     case 'SCADA':
  //       return <SCADA />;
  //     case 'Services':
  //       return <Services />;
  //     default:
  //       return <Home />;
  //   }
  // };


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
