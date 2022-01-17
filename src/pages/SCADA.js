import React from "react";
// import ReactPlayer from 'react-player'

const SCADA = () => {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div className="thisvideo">
{/* <ReactPlayer url="https://youtu.be/https://www.youtube.com/watch?v=m9wdYy3tCm4" controls width = "65%" height = "504px" alignSelf="center"/> */}
</div>
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
        </section>
    )
}

export default SCADA;