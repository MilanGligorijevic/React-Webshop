import React, { useState } from "react";
import "./css/index.css";
import ProductImages from "../../../types/productImages";

function MobileProductImageSlider(props: ProductImages) {

    //const [productImages, setProductImages] = useState(props.images);
    const [mainImage, setMainImage] = useState<string>(props.images[0]);

    function changeMainImage(img: string) {
        setMainImage(img);
    }

    return (
        <>
            <div className="main-image-div-mobile">
                <img className="main-image-mobile" src={mainImage} />
            </div>
            <div className="product-images-list-mobile d-flex">
                {
                    props.images && props.images.map((image) => {
                        return (
                            <img className="product-image-mobile mr-2" src={image} onClick={() => changeMainImage(image)} />
                        );
                    })
                }
            </div>

        </>
    );
}

export default MobileProductImageSlider;