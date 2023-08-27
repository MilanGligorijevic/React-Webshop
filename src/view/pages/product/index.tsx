import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/index.css";
import constants from "../../../constants";
import Navbar from "../../components/navbar";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footer";
import Product from "../../../types/product";
import ProductImageSlider from "../../components/productImageSlider";
import deliverypin from "../../assets/images/deliverypin.png";
import Rating from "@mui/material/Rating";
import Review from "../../components/review";
import addedItemIcon from "../../assets/images/added-to-cart.png";


//SMANJITI OVU KOMPONENTU NEKAKO, PRETRPANA JE
function ProductPage() {

    const priceSum: string = "priceSum"; //za potrebe localStorage sume svih proizvoda

    const { productId } = useParams();

    const [product, setProduct] = useState<Product>();
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setProduct(data);
                    })
                }
            })

    }, []);



    function deliveryCost(price: number): number {
        return Math.floor(price * 0.11);
    }

    function addItemToLocalStorage(item: Product) { //dodavanje proizvoda u localStorage za potrebe shopping cart-a

        if (localStorage.getItem(priceSum) !== null) {
            let helpSum: string = localStorage.getItem(priceSum) || "";
            console.log(helpSum);

            localStorage.setItem(priceSum, (parseInt(helpSum) + item.price).toString());

            console.log(localStorage.getItem(priceSum));
            console.log("IMA NESTO U LSTORAGE");

        } else {
            localStorage.setItem(priceSum, (item.price).toString());
            console.log(localStorage.getItem(priceSum));
        }

        if (item.inShoppingCart !== undefined) {
            item.inShoppingCart++;
        } else {
            item.inShoppingCart = 1;
        }

        localStorage.setItem((item.id).toString(), JSON.stringify(item));
        console.log(localStorage.getItem((item.id).toString()));
        console.log(item.brand + " item added");
        addingToCart();
    }

    function addingToCart() {
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 1200);
    }

    return (
        <>
            <Navbar />
            <NavbarBottom />
            {
                product &&
                <div className="products-page d-flex mt-3 mb-2">
                    <ProductImageSlider images={product.images} />
                    <div className="product-details ml-3">
                        <h2>{product.title}</h2>
                        <Rating
                            name="half-rating-read"
                            value={product.rating}
                            precision={0.5}
                            readOnly
                            size="medium"
                        />
                        <div className="product-detail">On stock: <span className="font-weight-bold">Yes</span> </div>
                        {/* napraviti proveru da li je proizvod na stanju mozda*/}
                        <div className="product-detail-price mb-3 mt-1">${product.price}</div>
                        <hr></hr>
                        <div className="product-detail"><span className="font-weight-bold">Brand: </span>{product.brand}</div>
                        <div className="product-detail"><span className="font-weight-bold">Category: </span> {product.category}</div>
                        <hr></hr>
                        <div className="product-detail font-weight-bold mt-3">About this product</div>
                        <div className="product-detail-description">{product.description}</div>
                    </div>
                    <div className="add-to-cart-div rounded p-2">
                        <div className="add-to-cart-price">${product.price}</div>
                        <div className="delivery-cost">${deliveryCost(product.price)} Shipping Fee</div>
                        <div className="delivery"><img className="delivery-pin" src={deliverypin} alt="delivery-pin" />Available for delivery</div>
                        <div className="returns mt-3">Eligible for Return,<br></br> Refund or Replacement within 2 weeks of receipt</div>
                        <button className="add-to-cart-button rounded mt-3" onClick={() => addItemToLocalStorage(product)}>{addedToCart ? <div className="added-to-cart d-flex align-items-center justify-content-center p-0 m-0"><img src={addedItemIcon} className="added-item-icon mr-1" />Added to cart</div> : "Add to cart"}</button>
                        {/* {addedToCart && <div className="added-product d-flex"><img src={addedItemIcon} className="added-item-icon mr-1" />Item added to cart</div>} */}
                    </div>
                </div>
            }
            <hr className="horizontal-line"></hr>
            <div className="top-reviews-title">Top reviews</div>
            <div className="top-reviews d-flex mb-5 mt-4">
                <Review reviewNumber={7} />
                <Review reviewNumber={4} />
                <Review reviewNumber={3} />
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;