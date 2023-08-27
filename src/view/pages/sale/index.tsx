import React, { useState, useEffect } from "react";
import "./css/index.css";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import constants from "../../../constants";
import Product from "../../../types/product";
import ProductComponent from "../../components/product";
import { productDiscount } from "../../../util";
import ShoppingCart from "../../components/shoppingCart";


function Sale() {

    const [discountProducts, setDiscountProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setDiscountProducts((data.products).filter((product: Product) => product.discountPercentage >= 15)); //uzimamo samo proizvode koji imaju popust veci od 15%
                    })
                }
            })

    }, []);

    // console.log(discountProducts);
    // let product: Product = discountProducts[0];

    return (
        <>
            <Navbar />
            <NavbarBottom />
            {/* <ShoppingCart {...product} /> */}
            <div className="sale-title font-weight-bold text-center mt-3 mb-2">
                Up to <span className="red-text">15% </span> off popular products!
            </div>
            <div className="sale-products-div d-flex flex-wrap justify-content-center align-items-center mb-3">
                {
                    discountProducts && discountProducts.map((product: Product) => {
                        let fullPrice = productDiscount(product.price, product.discountPercentage);
                        return (
                            <div className="product-on-sale">
                                <ProductComponent {...product} />
                                <div className="full-price font-weight-bold">${fullPrice}</div>
                            </div>
                        );

                    })
                }
            </div>
            <Footer />
        </>
    );
}

export default Sale;