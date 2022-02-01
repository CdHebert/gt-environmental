import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    // const tabs = ['Flow-Meters', 'SCADA', 'Services']
    return (
        <nav id='nav-wrap' className="navContainer ">

            {/* <h1 className="colorHeader">GT Environmental</h1> */}
            <div>
                    <img className="headerLogo" alt="gt environmental logo" src="/images/GT12.png" />         
            </div>

            <ul id='nav' className="navButtonContainer">
                <Link className="navApp hvr-underline-from-center" to='/'><li>Home</li></Link>
                <Link className="navApp hvr-underline-from-center" to='/meters'><li>Flow Meters</li></Link>
                <Link className="navApp hvr-underline-from-center" to='/scada'><li>SCADA</li></Link>
                <Link className="navApp hvr-underline-from-center" to='/services'><li>Services</li></Link>
            </ul>
            
            <div className="mccromBox">
                <img className="imgStyle" alt="mccrometer logo" src="/images/Crom.png" />
                <h5 className="authorized">Authorized Dealer</h5>
            </div>

        </nav>
    )
}

export default Navbar;