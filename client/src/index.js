import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartShoppingProvider } from './context/CartShoppingContext';
import { AuthProvider } from './context/AuthContext';
import FavoritesProvider from './context/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CartShoppingProvider>
      <AuthProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </AuthProvider>
    </CartShoppingProvider>
  </>
);
