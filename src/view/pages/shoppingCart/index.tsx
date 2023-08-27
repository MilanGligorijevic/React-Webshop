import React from "react";
import "./css/index.css";
import Navbar from "../../components/navbar";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footer";
import ShoppingCartComponent from "../../components/shoppingCart";

function ShoppingCart() {

    return (
        <div>
            <Navbar />
            <NavbarBottom />
            <ShoppingCartComponent />
            <Footer />
        </div>
    );
}

export default ShoppingCart;