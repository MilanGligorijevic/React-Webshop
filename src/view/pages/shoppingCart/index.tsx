import React from "react";
import Navbar from "../../components/navbar";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footer";
import ShoppingCartComponent from "../../components/shoppingCart";
import Newsletter from "../../components/newsletter";

function ShoppingCart() {

    return (
        <div className="shopping-cart-page">
            <div className="sc-content">
                <Navbar />
                <NavbarBottom />
                <ShoppingCartComponent />
                <Newsletter />
                <Footer />
            </div>

        </div>
    );
}

export default ShoppingCart;