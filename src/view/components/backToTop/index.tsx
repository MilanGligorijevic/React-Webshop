import React from "react";
import "./css/index.css"

function BackToTop() {

    function backToTop() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <button className="btn-back-top" onClick={backToTop} title="Go back to top">Back to top</button>
    );
}

export default BackToTop;