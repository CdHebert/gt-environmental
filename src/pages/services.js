import React from "react";
import ImageSlider from "../components/imageSlider";
import { SliderData, WiringData } from "../components/imageSlider/sliderData";
import WireSlider from "../components/WiringSlider";

const Services = () => {
    return (

        <section className="sectionContainer">
            <div className="newContainer">
                <ImageSlider slides={SliderData} />
            </div>

            <WireSlider slides={WiringData} />

        </section>
    )
}

export default Services;