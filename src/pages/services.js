import React from "react";
import ImageSlider from "../components/imageSlider";
import { SliderData } from "../components/imageSlider/sliderData";

const Services = () => {
return (
<section>
    <h1>Pipe Work</h1>
    <ImageSlider  slides={SliderData}/>
</section>

//     <section style={{display: "flex",
//     flexDirection: "column"}}>
// <h1 style={{
//     display: "flex",
//     alignSelf: "center",
//     // alignContent: "center",
//     // alignItems: "center",
//     // justifyContent: "center",
//     fontSize: "50px"
// }}>Work In Progress Come Back Later For New Content!</h1>
// <img src="/images/maybe.jpg" alt="two people working on pipes" style={{
//     width: "80%",
//     height: "100%",
//     display: "flex",
//     alignSelf: "center",
//     border: "solid 5px cadetblue",
//     borderRadius: "15px",
//     boxShadow: "5px 5px 10px",
//     // alignContent: "center",
//     // alignItems: "center",
//     // justifyContent: "center",
// }}></img>
// </section>
)
}

export default Services;