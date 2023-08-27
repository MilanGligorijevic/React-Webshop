import React, { useState, useEffect } from "react";
import "./css/index.css";
import constants from "../../../constants";
import Product from "../../../types/product";
import { firstLetterUpperCase } from "../../../util";
import { Link } from "react-router-dom";
import "./css/index.css";


function Category(props: { categoryName: string }) {

    const [productsInCategory, setProductsInCategory] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${props.categoryName}`)
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
            {
                productsInCategory && productsInCategory.map((product: Product, index: number) => {
                    if (index > 0) return;
                    // prikaz samo jedne slike prvog proizvoda iz kategorije, iako povlacim sve proizvode za svaki slucaj
                    return (
                        <div className="products-category mx-1 my-1 d-flex flex-column mx-2 my-2 rounded">
                            <div className="category-name text-center">
                                {firstLetterUpperCase(product.category)}
                            </div>
                            {/* Link prema proizvodima kategorije */}
                            <Link className="link-div" to={`/categories/${product.category}`} >
                                <div className="product-img-div rounded mx-auto d-block d-flex justify-content-center align-items-center
                                ">
                                    <img className="product-img rounded" src={product.images[2]} />
                                </div>
                                <div className="show-more-text text-center">Show more</div>
                            </Link>
                        </div>
                    );
                })
            }
        </>
    );
}
export default Category;