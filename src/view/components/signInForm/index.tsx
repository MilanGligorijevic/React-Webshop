import React, { useEffect, useRef, useState } from "react";
import "./css/index.css"
import closeIcon from "../../assets/images/closeicon.png";
import SignIn from "../../../types/signin";

function SignInForm(props: SignIn) {

    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (e: any) => {
            if (myRef.current && !myRef.current?.contains(e.target as Node)) {
                props.function();
            }
        }
        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [myRef]);

    return (
        <div className="div-sign-in" ref={myRef}>
            {props.visibleForm &&
                <form className="sign-in-form p-3 rounded" >
                    <button className="btn-close-form border-0 rounded" onClick={(event) => props.function()} type="button"><img className="close-icon rounded" src={closeIcon} /></button>
                    <h4>Sign In</h4>

                    <label htmlFor="email">Email</label>
                    <input className="input-email border-dark border rounded mb-2 pl-2" type="text" placeholder="" name="email"></input>

                    <label htmlFor="pass">Password</label>
                    <input className="input-pass border-dark border rounded mb-3 pl-2" type="password" placeholder="" name="pass"></input>

                    <button className="btn-sign-in border-dark  rounded " type="button">Sign In</button>
                    <div className="text-center">or</div>


                    <button className="btn-sign-in-google border-dark border rounded mb-1" type="button">Sign In With Google</button>


                    <div className="create-account"> Don't have an account? <span className="create-acc">Create account</span></div>
                </form>}

        </div>
    );
}

export default SignInForm;