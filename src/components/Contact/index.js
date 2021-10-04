import React from "react";

const Contact = () => {


    return (
        <section className="footer">
            <div className="contactUsDiv">
                <a style={{
                    textDecoration: "none",
                    color: "white"
                }}
                    className="hvr-pulse-grow"
                    href="mailto:trhebert@gtenviro.com">
                    <h1 className="contactH1 ">Contact Us<i class=" fas fa-envelope"></i></h1>
                </a>
            </div>
            <div className="contactFoot">
                <h1 className="createdBy">Created With Care by HebertCreations. ©2021</h1>
            </div>
        </section>
    )
}

export default Contact;