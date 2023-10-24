import React from "react";
import './css/index.css';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import shoppingIcon from '../../assets/images/shoppingicon.png';
import SearchBar from "../searchBar";
import SignIn from "../signIn";
import NavbarBottomMobile from "../navbarBottomMobile";

function Navbar() {
    return (
        <nav className="nav-root">
            <div className="nav-bar d-flex align-items-center justify-content-between mb-0">
                <Link to="/">
                    <div className="nav-logo-brand">
                        <img className="logo-img img-fluid" src={logo} />
                    </div>
                </Link>
                <SearchBar />
                <div className="nav-bar-icons d-flex align-items-center">
                    <div className="nav-profile-icon ml-3 d-flex">
                        <SignIn />
                    </div>
                    <Link to="/shoppingCart" className="shopping-icon-link ml-3">
                        <div className="nav-shopping-icon ">
                            <img className="shopping-icon img-fluid" src={shoppingIcon} />
                        </div>
                    </Link>
                    <NavbarBottomMobile />
                </div>
            </div>
            <div className="hr-mobile"></div>
        </nav>
    );
}

export default Navbar;