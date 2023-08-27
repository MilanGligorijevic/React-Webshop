import React, { useState, useEffect } from "react";
import constants from "../../../constants";
import Product from "../../../types/product";
import Navbar from "../../components/navbar";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footer";
import ProductComponent from "../../components/product";
import "./css/index.css";
import BackToTop from "../../components/backToTop";


function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setProducts(data.products);
                    }
                    )
                }
            });

    }, []);
    console.log(products);

    function addFilteredProductCategory() {

    }

    function removeFilteredProductCategory() {

    }



    return (
        <>
            <Navbar />
            <NavbarBottom />
            <div className="all-products-text text-center font-weight-bold mt-3"> Products</div>
            <div className="products-container d-flex flex-wrap justify-content-center align-items-center mb-3">
                {
                    products && products.map((product: Product) => {
                        return (
                            <ProductComponent {...product} />
                        );

                    })
                }
            </div>
            <BackToTop />
            <Footer />
        </>
    );
}

export default Products