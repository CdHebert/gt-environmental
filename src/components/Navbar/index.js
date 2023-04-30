import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 780) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile && (

                <div className="hamburger-menu">
                    {/* <div className='hamburger-menu'> */}

                    <div>
                        <img className="headerLogo" alt="gt environmental logo" src="/images/GT12.png" />
                    </div>
                    
                    <div className="mccromBox">
                        <img className="imgStyle" alt="mccrometer logo" src="/images/Crom.png" />
                        <h5 className="authorized">Authorized Dealer</h5>
                    </div>
                    {/* </div> */}
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar1"></span>
                        <span className="icon-bar2"></span>
                    </div>
                    {isOpen && (
                <ul className={`menu-items ${isOpen ? 'show' : ''}`}>
                    <Link className="navApp hvr-underline-from-center" to='/'><li>Home</li></Link>
                    <Link className="navApp hvr-underline-from-center" to='/meters'><li>Flow Meters</li></Link>
                    <Link className="navApp hvr-underline-from-center" to='/scada'><li>SCADA</li></Link>
                    <Link className="navApp hvr-underline-from-center" to='/services'><li>Services</li></Link>
                </ul>
            )}
        </div >
            )
}
{
    !isMobile && (
        <nav id='nav-wrap' className="navContainer ">

            {/* <h1 className="colorHeader">GT Environmental</h1> */}
            <div>
                <img className="headerLogo" alt="gt environmental logo" src="/images/GT12.png" />
            </div>
            <div className="navButtonContainer">

                <ul id='nav' className="navButtonContainer1" >
                    <Link className="navApp hvr-underline-from-center" to='/'><li>Home</li></Link>
                    <Link className="navApp hvr-underline-from-center" to='/meters'><li>Flow Meters</li></Link>
                    <Link className="navApp hvr-underline-from-center" to='/scada'><li>SCADA</li></Link>
                    <Link className="navApp hvr-underline-from-center" to='/services'><li>Services</li></Link>
                </ul>
            </div>

            <div className="mccromBox">
                <img className="imgStyle" alt="mccrometer logo" src="/images/Crom.png" />
                <h5 className="authorized">Authorized Dealer</h5>
            </div>

        </nav>
    )
}
        </>
    );
}

export default Navbar;