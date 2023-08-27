import React, { useState, useEffect } from "react";
import constants from "../../../constants";
import Category from "../../components/category";
import Navbar from "../../components/navbar";
import NavbarBottom from "../../components/navbarBottom";
import "./css/index.css"
import Footer from "../../components/footer";
import BackToTop from "../../components/backToTop";

function Categories() {

    const [categories, setCategories] = useState([]);

    //razmisliti jos oko ovog dela, ponavlja se kod sa Categories komponentom
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
        <>
            <Navbar />
            <NavbarBottom />
            <div className="all-categories-text text-center font-weight-bold mt-3">Categories</div>

            <div className="categories-container d-flex flex-wrap mt-3 mb-3">
                {
                    categories && categories.map((category: string, index: number) => {
                        return (
                            <Category categoryName={category} />
                        );
                    })
                }
            </div>
            <BackToTop />
            <Footer />
        </>
    );
}

export default Categories;