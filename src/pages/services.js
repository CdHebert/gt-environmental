import React from "react";
import ImageSlider from "../components/imageSlider";
import { SliderData } from "../components/imageSlider/sliderData";

const Services = () => {
return (
<section className="sectionContainer">
    <div className="newContainer">
    <ImageSlider  slides={SliderData}/>
    </div>
    {/* <div>
        <ImageSlider  slides={SliderData}/>
    </div> */}
</section>
)
}

export default Services;