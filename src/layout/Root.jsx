import React, { Suspense } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <section>
            <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            </nav>

            <section  className='w-11/12 mx-auto bg-[#F8FAFC]'>
                <Outlet></Outlet>
            </section>

            <footer  className='w-11/12 mx-auto text-white bg-[#244D3F] '>
            <Footer></Footer>
            </footer>
        </section>
    );
};

export default Root;