import React from 'react';
import { Link } from 'react-router-dom';




const Home = (props) => {
    let french = new Audio("/sounds/french.mp3");
    // let noneShallPass = new Audio("/sounds/passnone.mp3");
    // let knight = new Audio("/sounds/knightni.wav");
    // let camelot = new Audio("/sounds/model.wav")

    const start1 = () => {
        french.play()
    }
    // const start2 = () => {
    //     noneShallPass.play()
    // }
    // const start3 = () => {
    //     knight.play()
    // }
    // const start4 = () => {
    //     camelot.play()
    // }

    return (
        <section>

            <div className="skillsContainer">
                <div className="img-container">
                    <img className="skillImages" src="/images/fpiLarg.png" alt="30%" />
                    <h4 className="aboutText2">Flow Meters</h4>
                    <ul className="skillText">
                        <h3>We Sell:</h3>

                        <li> McCrometer Full Profile Insertion (FPI)</li>

                        <li> McCrometer Single Point Insertion (SPI)</li>
                        <Link to='/meters'>
                            <li className='skillsLink'>Click here for more information...</li>
                        </Link>
                    </ul>
                </div>
                <div className="img-container">
                    <img className="skillImages" src="/images/scadaPlaceholder.png" alt="30%" />
                    <h4 className="aboutText2">SCADA</h4>
                    <ul className="skillText">
                        <h3> We offer programming for the following Technologies:</h3>

                        <li>Allen Bradley</li>

                        <li>Modicon</li>

                        <li>Intellution</li>

                        <li>Wonderware</li>

                        <li>RSView 32</li>

                        <li>Red Lion</li>

                        <li>Ignition</li>

                        <Link to='/scada'>
                            <li className='skillsLink'>Click here for more information...</li>
                        </Link>
                    </ul>
                </div>
                <div className="img-container">
                    <img className="skillImages" src="/images/manholeInstall.png" alt="30%" />
                    <h4 className="aboutText2">Services</h4>
                    <ul className="skillText">
                        <h3>Our services:</h3>

                        <li>Pipe Hot Tapping</li>

                        <li>Insertion Flow Meter Installations</li>

                        <li>Electrical Services for Motor Control Systems, VFDs, PLC controls and PLC replacements</li>
                        <Link to='/services'>
                            <li className='skillsLink'>Click here for more information...</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="aboutSection">
                <div className="aboutContainer1">
                    <h1 className="aboutText1">What We Do</h1>
                    <div className="aboutTextContainer1">
                        <div className="aboutInfo1">
                            <div className='para-holder'>
                                <i className="far fa-check-square"></i><p> We are a full service provider for McCrometer Insertion Flow Meters</p>
                            </div>
                            <div className='para-holder'>
                            <i className="far fa-check-square"></i><p>   Offer continuous Technical Support for all of our customers</p>
                            </div>
                            <div className='para-holder'>
                            <i className="far fa-check-square"></i><p> Specialize in troubleshooting of control and automation systems</p>
                            </div>
                            <div className='para-holder'>
                            <i className="far fa-check-square"></i><p> Program new and existing SCADA Systems for customer changes and upgrades</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="aboutContainer2">
                    <div className="aboutTextContainer2">
                        <h1 className="aboutText1">Who We Are</h1>
                        <div className="aboutPicBox2">
                            <img onClick={start1} className="aboutPic2" src="/images/aboutUs.jpg" alt="30%" />
                        </div>
                        <p className="aboutInfo2">GT Environmental is a family owned business in the state of Arizona for the past 10 years. Before becoming a Manufacturer’s Representative for McCrometer we were involved with the Integration of the majority of Water and Waste Water Plants in the state of Arizona for the past 25 years.</p>
                    </div>
                </div>
            </div>
            {/* <div className="whatWeDo">
                <div className="whatTextContainer">
                    <p className="whatText">GT Environmental is an instrumentation and controls company that services Arizona, New Mexico, Nevada and Southwest Colorado. GT Environmental is also a McCrometer authorized dealer, installer and service center. We also provide instrumentation and control services to municipalities for Water and Waste Water Facilities along with mining and agriculture.<br />
                        We provide full services for insertion flow meters that include pipe saddle installation and weld-o-lets for hot tapping purposes. We also provide the electrical installation and start-up for the flow meter and any integration into the customer’s SCADA System. Along with our installation services we also provide flow meter testing and verification.</p>
                </div>
            </div>
            <br></br> */}

        </section>
    )
}

export default Home