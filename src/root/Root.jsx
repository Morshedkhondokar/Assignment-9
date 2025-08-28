
import { Outlet } from 'react-router';
import Navbar from '../Layout/Navbar';
import "animate.css";
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Footer from '../Layout/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className='overflow-x-hidden'>
            <Toaster/>
            <header>
                <ScrollToTop/>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;