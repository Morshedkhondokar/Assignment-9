
import { Outlet } from 'react-router';
import Navbar from '../Layout/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Root = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className='overflow-x-hidden'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
            
        </div>
    );
};

export default Root;