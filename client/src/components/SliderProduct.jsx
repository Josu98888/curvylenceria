import React, { useEffect, useState } from "react";
import { getProductsFetch } from '../api/getProductsFetch';
import CardProduct from "./CardProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SliderProducts = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 1440, min: 769 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 426 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 2
        }
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFetch()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    const outstanding = products.filter(e => e.outstanding === true);
    return (
        <div>
            <h2>Destacados</h2>
            <Carousel responsive={responsive}>
            {outstanding.map((item) => (
            <div key={item._id} >
                <CardProduct item={item} />
            </div>
        ))}
        </Carousel>
        </div>
    );
};

export default SliderProducts;
