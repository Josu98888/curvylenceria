export const loginFetch = async (data) => {
     try {
          const url = 'https://curvylenceria.onrender.com/api/v1/auth/login' ;

          const params = {
               method: 'POST',
               headers: {
                    'Content-Type' : 'application/json' ,
               },
               body: JSON.stringify({
                    email: data.email,
                    password: data.password,
               }),
          };

          const response = await fetch(url,params) ;
          const request = await response.json() ;

          if (!response.ok) {
               throw request;  // Aquí lanzamos el cuerpo del error que contiene el msg
             }

          return request ;
     } catch (error) {
          throw error ;
     }
}