export async function getProductFetch({ params }) {
     try {
         const response = await fetch(`https://curvylenceria-server.onrender.com:3933/api/v1/products/${params._id}`);
         if (!response.ok) {
             throw new Error('No se pudo obtener el producto');
         }
         const product = await response.json();
         return product;
     } catch (error) {
         console.error('Error al obtener el producto:', error);
         throw error;
     }
 }
 