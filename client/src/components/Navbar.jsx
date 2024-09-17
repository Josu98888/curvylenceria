import React, { useContext, useEffect, useState } from "react";
import styles from "../css/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getProductsFetch } from "../api/getProductsFetch";
import { CartContext } from "../context/CartShoppingContext";
import MenuLaptop from "./MenuLaptop";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        getProductsFetch()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    const searcher = (e) => {
        setSearch(e.target.value);
    };
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);
    // metodo de filtrado
    const handleSearch = (e) => {
        e.preventDefault();
        // Dividimos el término de búsqueda en palabras individuales
        const searchTerms = search.toLowerCase().split(" ");

        // Filtramos los productos para incluir solo aquellos que contengan todas las palabras de búsqueda
        const results =
            searchTerms.length > 0
                ? products.filter((item) =>
                      searchTerms.every((term) =>
                          item.title.toLowerCase().includes(term)
                      )
                  )
                : products;

        navigate("/search", { state: { results } });
    };
    return (
        <div className={styles.navbar}>
            <MenuLaptop />
            <nav className="navbar">
                <form className={styles.navbar__form} role="search">
                    <input
                        className="form-control  me-2"
                        type="search"
                        name="search"
                        placeholder="buscar"
                        aria-label="buscar"
                        value={search}
                        onChange={searcher}
                    />
                    <button
                        onClick={handleSearch}
                        className={`btn btn-light me-2 ${styles.navbar__btn}`}
                        type="submit"
                    >
                        <i className={`bi bi-search-heart-fill`}></i>
                    </button>
                </form>
            </nav>
            <Link className={styles.navbar__link} to={"/cartShopping"}>
                <button
                    className={`btn btn-light me-2 d-flex ${styles.navbar__btn}`}
                >
                    <i className="bi bi-bag-heart me-1"></i>
                    <span>{quantity}</span>
                </button>
            </Link>
        </div>
    );
};

export default Navbar;
