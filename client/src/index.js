import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {router} from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap-icons/font/bootstrap-icons.css';
import FavoritesProvider from './context/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </>
);

