import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FlowMeters from './pages/flowMeters';
import SCADA from './pages/SCADA';
import Services from './pages/services';
import Home from './pages/hompage';


function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Flow-Meters':
        return <FlowMeters />;
      case 'SCADA':
        return <SCADA />;
      case 'Services':
        return <Services />;
      // case 'Contact':
      //   return <Contact />;
      default:
        return <Home />;
    }
  };


  return (
    <section className="mainBg">

      <div>

        <section>
          <div>
            {/* Pass the state value and the setter as props to NavTabs */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function passing in the currentPage */}
            <div>{renderPage(currentPage)}</div>
          </div>
          {/* <hr /> */}

        </section>
      </div>
      {/* <Footer
          socialMedia={socialMedia} /> */}
    </section>
  );
}

export default App;
