import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Error404 from '../pages/Error';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import ForgotPassword from '../pages/ForgotPassword';
import { AuthProvider } from '../context/AuthContext';
import PerfilUser from '../pages/PerfilUser';
import ProtectedRoute from '../pages/ProtectedRoute';


//crea un enrutador del navegador
export const router = createBrowserRouter([
    {
        path: '/',
        element:  <AuthProvider> <Layout /> </AuthProvider>,
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
                element:
                    <ProtectedRoute>
                        <PerfilUser />
                    </ProtectedRoute>
                ,
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword />,
            },
        ]
    },
]);