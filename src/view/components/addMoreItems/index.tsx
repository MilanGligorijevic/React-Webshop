import React, { useState, useEffect } from "react";
import "./css/index.css"
import Product from "../../../types/product";
import removeItemIcon from "../../assets/images/remove_item_icon.png";

function AddMoreItems(props: Product) {

    const [numOfItems, setNumOfItems] = useState(0);

    useEffect(() => {
        let checkLocalItem: string | null = localStorage.getItem((props.id).toString());
        if (checkLocalItem !== null) {
            let item: Product = JSON.parse(checkLocalItem);
            console.log(item);


            setNumOfItems(item.inShoppingCart || 0);
        }
    }, []);

    //ponavljam kod i malo je konfuzan, sustina je da prvi put povlacim broj odredjenog proizvoda iz localStorage, onda na dugme povecavam ili smanjujem taj broj i upisujem ga nazad u localStorage, overwritujem isti taj proizvod

    function addNumOfItems() {
        let stringItem: string | null = localStorage.getItem((props.id).toString());
        let item: Product = JSON.parse(stringItem || "json failed");
        console.log(item.inShoppingCart);

        if (item.inShoppingCart) {
            item.inShoppingCart++;
            localStorage.setItem((item.id).toString(), JSON.stringify(item));
            console.log(item.inShoppingCart);
            setNumOfItems(prev => prev + 1);
            console.log(localStorage.getItem((item.id).toString()))
        }
        if (localStorage.getItem("priceSum") !== null) {
            let helpSum: string = localStorage.getItem("priceSum") || "";


            localStorage.setItem("priceSum", (parseInt(helpSum) + item.price).toString());
        }
        props.refresh && props.refresh();

    }


    function removeNumOfItems() {
        let stringItem: string | null = localStorage.getItem((props.id).toString());
        let item: Product = JSON.parse(stringItem || "json failed");


        if (item.inShoppingCart) {
            if (item.inShoppingCart === 1) {
                return;
            }
            item.inShoppingCart--;
            localStorage.setItem((item.id).toString(), JSON.stringify(item));
            console.log(item.inShoppingCart);
            setNumOfItems(prev => prev - 1);
            console.log(localStorage.getItem((item.id).toString()))
        }
        if (localStorage.getItem("priceSum") !== null) {
            let helpSum: string = localStorage.getItem("priceSum") || "";
            localStorage.setItem("priceSum", (parseInt(helpSum) - item.price).toString());
        }
        props.refresh && props.refresh();
    }

    return (
        <>
            <div className="plus-minus-items d-flex rounded">
                <button className="minus-item rounded" onClick={removeNumOfItems}>-</button>
                <div className="num-of-item">{numOfItems}</div>
                <button className="plus-item rounded" onClick={addNumOfItems}>+</button>
            </div>
            <div className="item-price">${props.price * numOfItems}</div>
            <button className="remove-item rounded d-flex align-items-center" onClick={() => props.removeItem && props.removeItem(props, numOfItems * props.price)}><img className="remove-item-icon" src={removeItemIcon} /></button>
            {console.log(numOfItems)}
        </>
    );
}

export default AddMoreItems;