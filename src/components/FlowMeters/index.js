import React from 'react';
// import { Link } from 'react-router-dom';

const FlowMags = (props) => {


    const meters = ['Fpi Meter', 'Spi Meter', 'Pro Comm']
    return (
        <div>

            <section className="meterFlowSection">
                {meters.map(meter => (
                    <div
                        key={meter}>
                        <a className="aboutMeters"
                            href={'#' + meter.toLowerCase()}
                            // Whenever a meter is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.setCurrentPdf(meter)}

                        >
                            {meter}
                        </a>
                        <div className="imgBox">
                            <a className="aboutMeters"
                                href={'#' + meter.toLowerCase()}
                                onClick={() => props.setCurrentPdf(meter)} >
                                <img className="aboutPic3" src={`/images/${meter}.png`} alt="Mag Meter from McCrometer" />
                            </a>
                        </div>
                        <br />
                        <a className="download" href={`/pdfDocs/${meter}.pdf`} download>
                            PDF Download<i className="fas fa-file-download"></i>
                        </a>
                        
                    </div>
                ))}
            </section>


        </div>
    )
}

export default FlowMags;