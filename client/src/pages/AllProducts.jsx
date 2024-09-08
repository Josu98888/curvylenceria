import React, { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { getProductsFetch } from "../api/getProductsFetch";

const AllProducts = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
          getProductsFetch()
              .then((data) => setProducts(data))
              .catch((error) => console.log(error));
      }, []);

    return (
     <div>
         <h2>Todos los productos</h2>
         {products.map((item) => (
         <div key={item._id} className='col-6 col-md-4 col-lg-3' >
             <CardProduct  item={item} />
         </div>
     ))}
     </div>
 );
};

export default AllProducts;
