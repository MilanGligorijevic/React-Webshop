import React from "react";
import './css/index.css';
import languageFlag from "../../assets/images/americanflag.png";
import instagramicon from "../../assets/images/instagramicon.png";
import facebookicon from "../../assets/images/facebookIcon.png";
import twittericon from "../../assets/images/twittericon.png";
import youtubeicon from "../../assets/images/youtubeicon.png";



function Footer() {

    return (
        <div className="footer-root">
            <div className="footer-div pt-4">
                <div className="footer-list-items d-flex justify-content-between">
                    <ul className="footer-list-about">
                        <li className="title-li">About Us</li>
                        <li>About A-Z</li>
                        <li>Purpose</li>
                        <li>Careers</li>
                    </ul>
                    <ul className="footer-list-help">
                        <li className="title-li">Help</li>
                        <li>Track order</li>
                        <li>Shipping policy</li>
                        <li>Warranty</li>
                        <li>FAQ</li>
                    </ul>
                    <ul className="footer-list-contact">
                        <li className="title-li">Contact Us</li>
                        <li>Help center</li>
                        <li>(000) 123-4567</li>
                    </ul>
                    <ul className="footer-list-socials">
                        <li className="title-li">Socials</li>
                        <li><img className="facebook-icon mr-1 mb-1" src={facebookicon} alt="facebook-logo" />Facebook</li>
                        <li><img className="instagram-icon mr-1 mb-1" src={instagramicon} alt="instagram-logo" />Instagram</li>
                        <li><img className="twitter-icon mr-1 mb-1" src={twittericon} alt="twitter-logo" />Twitter</li>
                        <li><img className="youtube-icon mr-1 mb-1" src={youtubeicon} alt="youtube-logo" />Youtube</li>
                    </ul>
                </div>
                <hr className="horizontal-line"></hr>
                <div className="footer-socials d-flex justify-content-center align-items-center pb-2">
                    <img className="language-img mr-2" src={languageFlag} alt="language logo" />
                    <div>© 2023 A-Z. All rights reserved. by <a className="my-github" href="https://github.com/MilanGligorijevic">MG</a></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;