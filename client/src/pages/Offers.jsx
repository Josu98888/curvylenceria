import React, { useEffect, useState } from "react";
import { getProductsFetch } from '../api/getProductsFetch';
import CardProduct from "../components/CardProduct";


const Offers = () => {
     const [products, setProducts] = useState([]);
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

     useEffect(() => {
          getProductsFetch()
              .then((data) => setProducts(data))
              .catch((error) => console.log(error));
      }, []);
  
      const offers = products.filter(e => e.offer === true);
      return (
          <div>
              <h2>Ofertas</h2>
              {offers.map((item) => (
              <div responsive={responsive} key={item._id} className='col-6 col-md-4 col-lg-3' >
                  <CardProduct  item={item} />
              </div>
          ))}
          </div>
      );
  
}
export default Offers
