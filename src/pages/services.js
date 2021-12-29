import React from "react";
import ImageSlider from "../components/imageSlider";
import { SliderData, WiringData } from "../components/imageSlider/sliderData";
import WireSlider from "../components/WiringSlider";

const Services = () => {
    return (

        <section className="sectionContainer">
                <h1 className="center">Pipe and Wire</h1>
            <div className="newContainer">
                <ImageSlider slides={SliderData} />
                <WireSlider slides={WiringData} />
            </div>
            <h1 className="center">panels and scada</h1>
            <div className="newContainer">
            <ImageSlider slides={SliderData} />
                <WireSlider slides={WiringData} />
            </div>


        </section>
    )
}

export default Services;