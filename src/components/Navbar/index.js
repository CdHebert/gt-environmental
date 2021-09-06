import React from 'react';
import { makeStyles, Box, } from '@material-ui/core';

const Navbar = (props) => {



    const useStyles = makeStyles({
        navContainer: {
            display: "flex",
            flexDirection: "row",
            color: "white",
            backgroundImage: "url(/images/stoneBg.jpg)",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
            margin: "20px"
        },
        navButtonsContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "65%",
            textDecoration: "none"
        },
        imageContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "15%",
        },
        imageStyle: {
           alignSelf: "flex-start",
            width: "100%",
    
        },
    
    })

    const classes = useStyles();

    const tabs = ['Home', 'Flow-Meters', 'SCADA', 'Services']
    return (
        <nav id='nav-wrap' className={classes.navContainer}>

            <h1 style={{
                fontSize: "28px",
                // color: "#2e65b8"
            }} className={classes.colorHeader}>GT Environmental</h1>
            <ul id='nav' className={classes.navButtonsContainer}>
                {tabs.map(tab => (
                    <li className="navApp" key={tab}>
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
            <Box className={classes.imageContainer}>
                <img className={classes.imageStyle} alt="mccrometer logo" src="/images/Crom.png" />
                <h5 className="authorized">Authorized Dealer</h5>
            </Box>
            
        </nav>
    )
}

export default Navbar;