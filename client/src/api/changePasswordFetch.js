export const changePasswordFetch = async (data,token) => {
     try {
          const url = 'https://curvylenceria.onrender.com/api/v1/auth/changePassword'; 

          const params = {
               method: "PATCH",
               headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
               },
               body: JSON.stringify(data)
          };

          const response = await fetch(url, params);
          const result = await response.json();

          if (response.status !== 200) throw result;
          return result;
     } catch (error) {
          throw error;
     }
};
