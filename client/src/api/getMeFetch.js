export const getMeFetch = async (token) => {
     try {
          const url = 'http://localhost:3933/api/v1/user/me' ;

          if(token) {
               throw new Error('Token no encontrado');
          }
          const params = {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
               },
          };

          const response = await fetch(url,params) ;
          const result = await response.json() ;

          if (!response.ok) {
               throw new Error('No se pudo obtener el usuario');
          }
          return result ;
     } catch (error) {
          console.error('ERROR al obtener usuario', error)
          throw error ;
     }
}