import React from 'react';
import { makeStyles, Box, Container, Button } from '@material-ui/core';

const Navbar = (props) => {



    const useStyles = makeStyles({
        navContainer: {
            display: "flex",
            flexDirection: "row",
            color: "white",
            backgroundColor: "grey",
            width: "100%",
        },
        colorHeader: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            textDecoration: "none",
            maxWidth: "15%",
        },
        navButtonsContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "75%",
        },
        navButtons: {
            display: "flex",
            width: "100%",
        },
    })

    const classes = useStyles();

    const tabs = ['Home', 'Flow Meters', 'SCADA Work', 'Services']
    return (
        <nav id='nav-wrap' className={classes.navContainer}>

            <h1 className={classes.colorHeader}>GT Environmental</h1>
            <ul id='nav' className={classes.navButtonsContainer}>
                {tabs.map(tab => (
                    <li className="current hvr-underline-from-left" key={tab}>
                        <a className='smoothscroll'
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
        </nav>
    )
}

export default Navbar;