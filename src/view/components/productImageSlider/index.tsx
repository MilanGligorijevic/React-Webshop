import React, { useState } from "react";
import "./css/index.css";
import ProductImages from "../../../types/productImages";

function ProductImageSlider(props: ProductImages) {

    //const [productImages, setProductImages] = useState(props.images);
    const [mainImage, setMainImage] = useState<string>(props.images[0]);

    function changeMainImage(img: string) {
        setMainImage(img);
    }

    return (
        <>
            <div className="product-images-list d-flex flex-column">
                {
                    props.images && props.images.map((image) => {
                        return (
                            <img className="product-image mb-1" src={image} onClick={() => changeMainImage(image)} />
                        );
                    })
                }
            </div>
            <div className="main-image-div">
                <img className="main-image" src={mainImage} />
            </div>
        </>
    );
}

export default ProductImageSlider;