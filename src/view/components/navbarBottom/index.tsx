import React from "react";
import "./css/index.css"
import { Link } from "react-router-dom";
import CategoriesDropdown from "../categoriesDropdown";

function NavbarBottom() {

    return (
        <nav className="nav-bottom-root">
            <div className="nav-bar-bottom w-100 d-flex align-items-center p-1">
                <ul className="nav-bar-bottom-links w-100 list-unstyled d-flex align-items-center justify-content-around mb-0">
                    <li className="list-item">
                        <Link to="/" className="list-item-link">
                            Home
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/products" className="list-item-link">
                            Products
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/categories" className="list-item-link">
                            <CategoriesDropdown />
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/sale" className="list-item-link">
                            <span className="sale-text">Sale</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarBottom;