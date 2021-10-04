import React from 'react';


const Navbar = (props) => {

    const tabs = [ 'Flow-Meters', 'SCADA', 'Services']
    return (
        <nav id='nav-wrap' className="navContainer">

            {/* <h1 className="colorHeader">GT Environmental</h1> */}
            <div className="colorHeader">
                <a href="https://www.gtenvironmentalaz.com/">
                    <img className="headerLogo hvr-pulse-grow" alt="gt environmental logo" src="/images/GT1.png" />
                </a>
            </div>
            <ul id='nav' className="navButtonContainer">
                {tabs.map(tab => (
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
                ))}
            </ul>
            <div className="mccromBox">
                <img className="imgStyle" alt="mccrometer logo" src="/images/Crom.png" />
                <h5 className="authorized">Authorized Dealer</h5>
            </div>

        </nav>
    )
}

export default Navbar;