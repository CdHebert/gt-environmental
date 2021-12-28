import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    // const tabs = ['Flow-Meters', 'SCADA', 'Services']
    return (
        <nav id='nav-wrap' className="navContainer">

            {/* <h1 className="colorHeader">GT Environmental</h1> */}
            <div className="colorHeader hvr-pulse-grow">
                <Link to="/">
                    <img className="headerLogo" alt="gt environmental logo" src="/images/GT12.png" />
                </Link><span id="home" className="hidden-home "><i className="fas fa-hand-point-left"></i> Click to go Home!</span>
            </div>
            <ul id='nav' className="navButtonContainer">
                <Link className="navApp hvr-pulse-grow" to='/meters'>Flow Meters</Link>
                <Link className="navApp hvr-pulse-grow" to='/scada'>SCADA</Link>
                <Link className="navApp hvr-pulse-grow" to='/services'>services</Link>
                {/* {tabs.map(tab => (
                    <li className="navApp hvr-pulse-grow" key={tab}>
                        <a className='navApp'
                            href={'#' + tab.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.handlePageChange(tab)}

                        >
                            {tab}
                        </a>
                    </li>
                ))} */}
            </ul>
            <div className="mccromBox">
                <img className="imgStyle" alt="mccrometer logo" src="/images/Crom.png" />
                <h5 className="authorized">Authorized Dealer</h5>
            </div>

        </nav>
    )
}

export default Navbar;