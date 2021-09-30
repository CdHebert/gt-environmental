import React from 'react';




const Home = (props) => {



    return (
        <section>
            <div className="whatWeDo">
                <div className="whatTextContainer">
                    <p className="whatText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="skillsContainer">
                <div className="img-container">
                    <img className="skillImages" src="/images/fpiLarg.png" alt="30%" />
                    <h4 className="aboutText2">What We Sell</h4>
                    <p className="skillText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    
                        </p>
                </div>
                <div className="img-container">
                    <img className="skillImages" src="/images/scadaPlaceholder.png" alt="30%" />
                    <h4 className="aboutText2">SCADA</h4>
                    <p className="skillText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="img-container">
                    <img className="skillImages" src="/images/manholeInstall.png" alt="30%" />
                    <h4 className="aboutText2">Services</h4>
                    <p className="skillText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="aboutSection">
                <div className="aboutContainer1">
                    <h1 className="aboutText1">What We Do</h1>
                    <div className="aboutTextContainer1">
                        <div className="aboutInfo1">
                            <p><i className="far fa-check-square"></i> Lorem Ipsum is simply dummy text of the printing</p>
                            <p><i className="far fa-check-square"></i> Lorem Ipsum is simply dummy text of the printing</p>
                            <p><i className="far fa-check-square"></i> Lorem Ipsum is simply dummy text of the printing</p>
                            <p><i className="far fa-check-square"></i> Lorem Ipsum is simply dummy text of the printing</p>

                        </div>
                    </div>

                </div>
                <div className="aboutContainer2">
                    <div className="aboutTextContainer2">
                        <h1 className="aboutText1">Who We Are</h1>
                        <div className="aboutPicBox2">
                            <img className="aboutPic2" src="/images/aboutUs.jpg" alt="30%" />
                        </div>
                        <p className="aboutInfo2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home