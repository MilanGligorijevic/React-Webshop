import React from "react";
import newsletterLogo from "../../assets/images/newsletter_logo.png";
import SearchBar from "../searchBar";
import "./css/index.css";

function Newsletter() {
    return (
        <div className="newsletter d-flex justify-content-center align-items-center mt-5">
            <img src={newsletterLogo} className="newsletter-img m-2" />
            <div className="newsletter-text">Sign up to the <span className="news">newsletter</span>, so you never miss a thing!</div>
            {/* <input className="newsletter p-1" type="text" placeholder="Email adress" /> */}
            {/* <button className="newsletter-btn rounded">Subscribe</button> */}
        </div>
    );
}

export default Newsletter;