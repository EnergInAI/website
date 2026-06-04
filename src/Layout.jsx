import react from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import ScrollToTop from "./components/scrolltotop";
import WhatsAppWidget from "./components/WhatsAppWidget";


function Layout() {
    return(
        <>
        <Navbar/>
        <ScrollToTop/>
        <Outlet/>
        <WhatsAppWidget/>
        <Footer/>
        </>
    )
}
export default Layout