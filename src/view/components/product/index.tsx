import React, { useState, useEffect } from "react";
import Product from "../../../types/product";
import { Link } from "react-router-dom";
import "./css/index.css";
import Rating from "@mui/material/Rating"; //importovana komponenta za Rating zvezdice


function ProductComponent({ id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images }: Product) {



    return (
        <div className="product mx-1 my-1 rounded">
            <Link to={`/products/${id}`} >
                <div className="product-div p-2">
                    <img className="product-preview-img rounded" src={images[0]} />
                </div>
            </Link>
            <div className="product-caption pl-2">
                <Link className="product-link" to={`/products/${id}`} >
                    <div className="product-title">{title}</div>
                </Link>
                {/* <div className="product-rating">Rating: {rating}</div> */}
                <Rating
                    name="half-rating-read"
                    value={rating}
                    precision={0.5}
                    readOnly
                    size="medium"
                />
                <div className="product-price">${price}</div>
            </div>
        </div>
    );
}

export default ProductComponent;