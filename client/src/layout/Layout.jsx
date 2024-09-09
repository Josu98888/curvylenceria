import { Outlet } from 'react-router-dom';
import Header from '../components/Header' ;
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = () => {
     return (
       <>
           <Header/>
           <Navbar/>
           <Outlet/>
           <Footer/>
       </>
     )
   }
   
   export default Layout