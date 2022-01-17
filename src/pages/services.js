import React from "react";
// import ImageSlider from "../components/imageSlider";
// import { SliderData, WiringData } from "../components/imageSlider/sliderData";
// import WireSlider from "../components/WiringSlider";

const Services = () => {
        return (

            <section className="sectionContainer">
                         <h1 style={{
                display: "flex",
                alignSelf: "center",
                // alignContent: "center",
                // alignItems: "center",
                // justifyContent: "center",
                fontSize: "50px"
            }}>Work In Progress Come Back Later For New Content!</h1>
            <img src="/images/wireing.jpg" alt="one worker installing a flow meter" style={{
                width: "80%",
                height: "100%",
                display: "flex",
                alignSelf: "center",
                border: "solid 5px cadetblue",
                borderRadius: "15px",
                boxShadow: "5px 5px 10px",
                marginBottom: '25px'
                // alignContent: "center",
                // alignItems: "center",
                // justifyContent: "center",
            }}></img>
                {/* <h1 className="center">Pipe and Wire</h1>
                <div className="newContainer">
                    <ImageSlider slides={SliderData} />
                    <WireSlider slides={WiringData} />
                </div> */}
                {/* <h1 className="center">Panels and SCADA</h1>
                <div className="newContainer">
                    <ImageSlider slides={SliderData} />
                    <WireSlider slides={WiringData} />
                </div> */}
            </section>
        )
    }

    export default Services;