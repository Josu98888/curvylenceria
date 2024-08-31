import {createBrowserRouter} from 'react-router-dom' ;
import Layout from '../layout/Layout' ;
import Home from '../pages/Home' ;
import Error404 from '../pages/Error' ;


//crea un enrutador del navegador
export const router = createBrowserRouter([
     {
          path: '/',
          element: <Layout />,
          errorElement: <Error404 />,
          children: [
              {
                  path: '/',
                  element: <Home />,
              },
          ]
      },
]);