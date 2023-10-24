import React, { useState, useEffect } from "react";
import './css/index.css';
import Navbar from "../../components/navbar";
import CategoriesSection from "../../components/categories";
import image from "../../assets/images/onlineshopping.jpg";
import imageMobile from "../../assets/images/onlineshoppingmobile.jpg";
import NavbarBottom from "../../components/navbarBottom";
import Footer from "../../components/footer";
import CategorySlider from "../../components/categorySlider";
import BackToTop from "../../components/backToTop";




function Home() {
    return (
        <>
            <Navbar />
            <NavbarBottom />
            <section className="hero-section">
                <img src={image} className="background-image" alt="background-image" />
                <div className="best-seller-text text-center font-weight-bold mt-3"> Best-Selling categories</div>
            </section>
            <CategoriesSection />
            <section className="category-slider-section">
                <div className="category-slider-title text-center font-weight-bold"> Men's watches</div>
                <CategorySlider category="mens-watches" />
                <div className="category-slider-title text-center font-weight-bold"> Women's bags and purses</div>
                <CategorySlider category="womens-bags" />
                <div className="category-slider-title text-center font-weight-bold"> Sunglasses</div>
                <CategorySlider category="sunglasses" />
            </section>
            <BackToTop />
            <Footer />
        </>
    );

}

export default Home;