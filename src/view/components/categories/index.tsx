import React, { useState, useEffect } from "react";
import "./css/index.css";
import constants from "../../../constants";
import Category from "../category";
import "./css/index.css";


function CategoriesSection() {



    let numberOfPopularCategories: number = 7; //prikaz 8 'popularnih' kategorija

    const [categories, setCategories] = useState([]);

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

    return (
        <div className="categories-container d-flex flex-wrap mt-5">
            {
                categories && categories.map((category: string, index: number) => {
                    if (index > numberOfPopularCategories) return;
                    return (
                        <Category categoryName={category} key={index} />
                    );
                })
            }
        </div>
    );
}
export default CategoriesSection;