import React from "react";

const Contact = () => {


    return (
        <section className="footer">
            <div className="contact-info">
                <ul>
                    <h1>Contact Us</h1>
                    <li>Glenn Hebert:</li>
                    <li>Daniel Hebert:</li>
                </ul>
            </div>
            <div className="contactUsDiv">
                <a style={{
                    textDecoration: "none",
                    color: "white"
                }}
                    className="hvr-underline-from-center"
                    href="mailto:trhebert@gtenviro.com">
                    <h1 className="contactH1 ">Email Us<i className=" fas fa-envelope"></i></h1>
                </a>

            </div>
            <div className="contactFoot">
                <h1 className="createdBy">Created With Care by HebertCreations. ©2021</h1>
            </div>
        </section>
    )
}

export default Contact;