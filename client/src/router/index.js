import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Error404 from '../pages/Error';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import ForgotPassword from '../pages/ForgotPassword';
import PerfilUser from '../pages/PerfilUser';
import AllProducts from '../pages/AllProducts';
import Product from '../pages/Product';
import SearchResults from '../pages/SearchResults';
import Offers from '../pages/Offers';
import Favorites from '../pages/Favorites';
import AboutUs from '../pages/AboutUs';
import CartShopping from '../pages/CartShopping';



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
                path: '/perfilUser',
                element: <PerfilUser />,
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword />,
            },
            {
                path: '/products',
                element: <AllProducts />,
            },
            {
                path: '/products/:_id',
                element: <Product />,
            },
            {
                path: '/search',
                element: <SearchResults />,
            },
            {
                path: '/offers',
                element: <Offers />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
            },
            {
                path: '/aboutUs',
                element: <AboutUs />,
            },
            {
                path: '/cartShopping',
                element: <CartShopping />,
            },
        ]
    },
]);