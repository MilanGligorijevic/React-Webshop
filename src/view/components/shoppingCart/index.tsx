import React, { useEffect, useState } from "react";
import "./css/index.css";
import Product from "../../../types/product";
import AddMoreItems from "../addMoreItems";
import Newsletter from "../newsletter";
import emptyShoppingCartLogo from "../../assets/images/empty_shopping_cart.png";
import { Link } from "react-router-dom";

function ShoppingCartComponent() {

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState(localStorage.getItem("priceSum")); //mozda uvesti kao konstantu "priceSum"
    // const [sumPrice, setSumPrice] = useState(0); //skladisti ukupnu cenu svih itema iz korpe

    useEffect(() => {
        setCartItems(getItemsFromLocalStorage);
    }, [totalPrice]);

    function getItemsFromLocalStorage(): Product[] { //vraca sve iteme iz localStorage-a, ukljucujuci i neke nepotrebne poput theme itd
        let values: Product[] = [];
        let keys = Object.keys(localStorage);
        let i = keys.length;


        while (i--) {
            if (!isNaN(parseInt(keys[i]))) { //ruzno resenje za preskakanje light theme iz localStorage-a
                let item: string | null = localStorage.getItem(keys[i]);
                if (item !== null) {
                    let addItem: Product = JSON.parse(item);
                    if (addItem.inShoppingCart !== 0) {
                        values.push(JSON.parse(item));
                    }
                }
            }


        }

        return values;
        //funkcija vraca niz objekata (proizvoda) koje treba prikazati u shopping cart
    }

    function refresh() {
        setTotalPrice(localStorage.getItem("priceSum"));
    }

    function removeItem(item: Product, removePrice: number) {
        let priceSum: string = localStorage.getItem("priceSum") || "";
        localStorage.setItem("priceSum", (parseInt(priceSum) - removePrice).toString());
        localStorage.removeItem((item.id).toString());
        setTotalPrice(localStorage.getItem("priceSum"));
        window.location.reload();
    }


    return (
        <div className="test">
            {cartItems.length === 0 && <div className="empty-cart-div d-flex align-items-center"> {/* prikazuje se kada je prazna korpa */}
                <img src={emptyShoppingCartLogo} className="empty-cart-img mt-5 mb-3" />
                <div className="empty-cart-text">Your shopping cart is empty</div>
                <Link to="/" className="home-page-link mt-2">Get back to Home page</Link>
            </div>}
            {cartItems.length !== 0 && <div className="shopping-components d-flex align-items-center "> {/* prikazuje se kada korpa sadrzi proizvode*/}
                <div className="shopping-cart-root px-2 d-flex rounded m-4">
                    <div className="cart-title">Your cart</div>
                    {
                        cartItems && cartItems.map((item: Product, index) => {
                            // item.priceSum = getSum;
                            // console.log(item.priceSum);
                            item.removeItem = removeItem;
                            item.refresh = refresh;
                            return (

                                <div className="item-div d-flex">
                                    <img src={item.images[0]} className="item-thumbnail" />
                                    <div className="item-title">{item.title}</div>
                                    <AddMoreItems {...item} />
                                </div>


                            );
                        })
                    }
                    <div>
                    </div>
                </div>
                <div className="order-overview m-3 px-2 mb-5">
                    <div className="order-title">Order overview</div>
                    <div className="items-price">Items price: <span className="overview-text">${totalPrice} </span></div>
                    {totalPrice !== null && <div className="shipping-fee">Shipping fee: <span className="overview-text">${Math.floor(parseInt(totalPrice) * 0.11)}</span></div>}
                    {totalPrice !== null && <div className="loyalty-points">Loyalty points: <span className="overview-text">{Math.floor(parseInt(totalPrice) * 0.05)}</span></div>}
                    <hr></hr>
                    {totalPrice !== null && <div className="total-price my-4">Total price: <span className="overview-text">${Math.floor(parseInt(totalPrice) * 0.11) + parseInt(totalPrice)}</span></div>}
                    <button className="checkout-btn rounded mb-2">Proceed to checkout</button>
                </div>
                {/* <div className="top-reviews d-flex mb-5 mt-4">
                    <Review reviewNumber={0} />
                    <Review reviewNumber={2} />
                    <Review reviewNumber={5} />
                </div> */}
            </div>}



        </div>
    );
}

export default ShoppingCartComponent;