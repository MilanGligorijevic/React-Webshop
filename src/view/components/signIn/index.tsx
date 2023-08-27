import React, { ReactComponentElement, useEffect, useRef, useState } from "react";
import profileIcon from "../../assets/images/profileicon.png";
import "./css/index.css";
import SignInForm from "../signInForm";

function SignIn() {

    const [showForm, setShowForm] = useState(false);




    function closeForm() {
        setShowForm(false);
    }

    function toggleForm() {
        setShowForm((prevState) => !prevState);
    }

    return (
        <>
            <button className="sign-in-btn border-0 d-flex align-items-center justify-content-center" onClick={toggleForm}>
                <img className="profile-icon img-fluid" src={profileIcon} />
            </button>

            <SignInForm visibleForm={showForm} function={closeForm} />

        </>
    );
}

export default SignIn;