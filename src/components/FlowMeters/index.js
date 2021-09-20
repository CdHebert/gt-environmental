import React from 'react';

const FlowMags = (props) => {


    const meters = ['Fpi Meter', 'Spi Meter', 'Pro Comm']
    return (
        <div>

            <section className="meterFlowSection">
                {meters.map(meter => (
                    <h2
                    className="meters"
                     key={meter}>
                        <a className="aboutMeters"
                            href={'#' + meter.toLowerCase()}
                            // Whenever a meter is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.setCurrentPdf(meter)}

                        >
                            {meter}
                        </a> <i className="fas fa-arrow-left"></i><span className="click">Click me</span>
                        <br/>
                        <button className="download"><a href={`/pdfDocs/${meter}.pdf`}  download>
                        PDF Download<i class="fas fa-file-download"></i>
                            </a> 
                        </button>
                    </h2>
                ))}
            </section>


        </div>
    )
}

export default FlowMags;