import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductComponent from "../product";
import testImg from "../../assets/images/logo.png";
import constants from "../../../constants";
import Product from "../../../types/product";
import "./css/index.css";
import { Link } from "react-router-dom";

//klasa za rad sa carouselom
function CategorySlider({ category }: { category: string }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setProducts(data.products);
                    })
                }
            })

    }, []);

    console.log(products);

    return (
        <Carousel className="carousel mt-3 mb-3 rounded" draggable={false} responsive={responsive}>
            {products && products.map((product: Product, index: number) => {
                return (
                    <Link className="link-div" to={`/products/${product.id}`} >
                        <div>
                            <img className="carousel-product-img img-fluid ml-2 mr-2 rounded" src={product.images[0]} alt="product-img" />
                        </div>
                    </Link>
                );
            })}
        </Carousel>
    );
}


export default CategorySlider;