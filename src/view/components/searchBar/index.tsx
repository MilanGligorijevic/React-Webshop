import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import "./css/index.css";
import searchIcon from "../../assets/images/searchicon.png";
import constants from "../../../constants";
import Product from "../../../types/product";
import { Link } from "react-router-dom";
import { firstLetterUpperCase } from "../../../util";

function SearchBar() {

    const [search, setSearch] = useState<string>();
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [open, setOpen] = useState<boolean>(false);

    const dropDownRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${search}`) //search radi po descriptionu
            .then(res => {
                if (res.status === constants.STATUS_OK) {
                    res.json().then(data => {
                        setSearchedProducts(data.products);
                    }
                    )
                }
            });
        let handler = (e: any) => {
            if (open && !dropDownRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [search]);
    // console.log(searchedProducts);
    // console.log(search);

    function handleClick() { //ruzno resenje za search dropdown reload, bug sa React Routerom
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    return (
        <>
            <form className="search-form d-flex" >
                <div className="search-btn-div d-flex border border-dark rounded" >
                    <input type="text" className="search-bar border-0 pl-2 rounded" placeholder="Search" onChange={e => { setSearch(e.target.value); setOpen(true) }} />
                    {open && search &&
                        <ul className="dropdown-list pl-2" ref={dropDownRef}>
                            {searchedProducts && searchedProducts.map((product: Product, index) => {
                                if (index > 9) return; //prikazuje se najvise 10 elemenata u pretrazi
                                return (
                                    <Link className="product-list-item-link" to={`/products/${product.id}`} onClick={handleClick}>
                                        <li className="product-list-item" key={product.id}>
                                            {firstLetterUpperCase(product.title)}
                                        </li>
                                    </Link>

                                );
                            })}
                        </ul>
                    }
                    <button type="submit" className="search-btn bg-transparent border-0 rounded">
                        <img src={searchIcon} className="search-icon img-fluid" alt="searchIcon" />
                    </button>
                </div>
            </form>
        </>
    );
}

export default SearchBar;