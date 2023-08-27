import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import constants from "../../../constants";
import Product from "../../../types/product";
import ProductComponent from "../../components/product";
import Navbar from "../../components/navbar";
import NavbarBottom from "../../components/navbarBottom";
import "./css/index.css"
import { firstLetterUpperCase } from "../../../util";
import Footer from "../../components/footer";
import Review from "../../components/review";


function CategoryProducts() {

    const { categoryProducts } = useParams();

    const [productsInCategory, setProductsInCategory] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryProducts}`)
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setProductsInCategory(data.products);
                    })
                }
            })

    }, []);

    console.log(productsInCategory);

    return (
        <>
            <Navbar />
            <NavbarBottom />
            <div className="category-products-text text-center font-weight-bold mt-3">{categoryProducts && firstLetterUpperCase(categoryProducts)}</div>
            <div className="category-products-container d-flex flex-wrap justify-content-center align-items-center mb-3">
                {
                    productsInCategory && productsInCategory.map((product: Product, index: number) => {
                        return (
                            <ProductComponent {...product} />
                        );
                    })
                }
            </div>
            <hr className="horizontal-line"></hr>
            <div className="top-reviews-title">Top reviews</div>
            <div className="top-reviews d-flex mb-5 mt-4">
                <Review reviewNumber={3} />
                <Review reviewNumber={4} />
                <Review reviewNumber={5} />
            </div>
            <Footer />
        </>
    );
}

export default CategoryProducts;