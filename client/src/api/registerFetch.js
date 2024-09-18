export const registerFetch = async (data) => {
     try {
          const url = 'https://curvylenceria-server.onrender.com:3933/api/v1/auth/register' ;

          const params = {
               method: "POST",
               headers: {
                    "Content-Type" : "application/json"
               },
               body: JSON.stringify(data)
          }

          const response = await fetch(url, params) ;
          const result = await response.json() ;

          if(response.status !== 200) throw result ;
          return result ;
     } catch (error) {
          throw error ;
     }


};