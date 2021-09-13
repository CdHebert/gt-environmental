import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import FlowMags from "../components/FlowMeters";

const FPI = "/pdfDocs/Fpi-Mag.pdf"
const SPI = "/pdfDocs/Spi-Mag.pdf"
const ProComm = "/pdfDocs/Pro-Comm.pdf"
const FlowMeters = () => {
    const renderPdf = () => {
        switch (currentPdf) {
            case 'Spi-Mag':
                return SPI;
            case 'Pro-Comm':
                return ProComm;
            default:
                return FPI;
        }
    };

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [currentPdf, setCurrentPdf] = useState("FPI")
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1)
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    return (
        <section className="flowSection">
            <div className="aboutMeterBox">
                <FlowMags
                    currentPdf={currentPdf}
                    setCurrentPdf={setCurrentPdf}
                />
            </div>
            <div className="flowInfoBox">
                <Document
                    className="flowInfo"
                    file={renderPdf(currentPdf)}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div className="buttonControl">
                    <div className="pagec">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>
                    <div className="buttonc">
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="Pre"

                        >
                            Previous
                        </button>
                        <button
                            className="next"
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}

                        >
                            Next
                        </button>
                    </div>
                </div>


            </div>
            <div className="imageContainer">


                <div className="imgBox">
                    <img className="aboutPic3" src="/images/spiMag.jpg" alt="Single Profile Injection Mag Meter" />
                </div>
                <div className="imgBox">
                    <img className="aboutPic3" src="/images/fpimag.png" alt="Full Profile Injection Mag Meter" />
                </div>
                <div className="imgBox">
                    <img className="aboutPic3" src="/images/procomm.png" alt="ProComm Electromagnetic Flow Meter Converter" />
                </div>


            </div>

        </section>
    )
}

export default FlowMeters;