import React, { useState, useEffect } from "react";
import constants from "../../../constants";
import "./css/index.css";
import { firstLetterUpperCase } from "../../../util";
import { Link } from "react-router-dom";

function CategoriesDropdown() {


    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    function handleHover() {

        setShowCategories(!showCategories);
    }

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setCategories(data);
                    })
                }
            })

    }, []);

    function handleClick() { //ruzno resenje za categories dropdown reload, bug sa React Routerom
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    return (
        <div className="categories-dropdown" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <span className="categories-text">Categories</span>
            {
                showCategories && <div className="categories-list">
                    {
                        categories && categories.map((category) => {
                            return <div className="categories-dropdown-element pl-1 pb-1"><Link className="link-categories" to={`/categories/${category}`} onClick={handleClick}>{firstLetterUpperCase(category)}</Link></div>
                        })
                    }
                </div>
            }
        </div>
    );
}

export default CategoriesDropdown;