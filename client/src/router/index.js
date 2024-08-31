import {createBrowserRouter} from 'react-router-dom' ;
import Layout from '../layout/Layout' ;
import Home from '../pages/Home' ;
import Error404 from '../pages/Error' ;
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import ForgotPassword from '../pages/ForgotPassword' ;


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
              {
               path: '/registerForm',
               element: <RegisterForm />,
           },
           {
               path: '/loginForm',
               element: <LoginForm />,
           },
           {
               path: '/forgotPassword',
               element: <ForgotPassword/>,
           },
          ]
      },
]);