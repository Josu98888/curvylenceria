export const getProductsFetch = async () => {
     try {
          // trae la url 
          const url = 'https://curvylenceria.onrender.com/api/v1/products';
          const response = await fetch(url);
          if (!response.ok) {
               throw new Error('No se pudo obtener los productos');
          }
          // parsea los datos de la url
          const products = await response.json();

          return products;
     } catch (error) {
          console.error('ERROR al obtener los productos', error)
          throw error
     }
}