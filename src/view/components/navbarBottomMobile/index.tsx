import React, { useState } from "react";
import "./css/index.css";
import { Link } from "react-router-dom";
import CategoriesDropdown from "../categoriesDropdown";


function NavbarBottomMobile() {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    function showDropdownMenu() {
        setShowDropdown(prev => !prev);
    }

    return (
        <div className="dropdown-mobile">
            <button className="btn-dropdown-mobile" onClick={showDropdownMenu}>
                <div className="btn-line-mobile"></div>
                <div className="btn-line-mobile"></div>
                <div className="btn-line-mobile"></div>
            </button>
            {
                showDropdown &&

                <div className="dropdown-list-mobile rounded">
                    <Link to="/" className="list-item-link-mobile">
                        <div className="list-item-mobile">
                            Home
                        </div>
                    </Link>
                    <Link to="/products" className="list-item-link-mobile">
                        <div className="list-item-mobile">
                            Products
                        </div>
                    </Link>
                    <Link to="/categories" className="list-item-link-mobile">
                        <div className="list-item-mobile">
                            Categories
                        </div>
                    </Link>
                    <Link to="/sale" className="list-item-link-mobile">
                        <div className="list-item-mobile">
                            <span className="sale-text-mobile">Sale</span>
                        </div>
                    </Link>
                </div>

            }
        </div>
    );

}

export default NavbarBottomMobile;