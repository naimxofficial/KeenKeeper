import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='text-center p-10 '>
            <div className='flex flex-col gap-3 justify-center items-center py-10'>
            <img className='not-md:w-1/2' src={'KeenKeeperFooter.svg'} alt="keenkeeper footer logo"  />
            <p className='not-md:text-xs opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <h2 className='font-medium text-xl'>Social Links</h2>
            <ul className='flex items-center gap-3'>
                <li><Link to={"https://www.instagram.com/"}><img src={"Instagram.svg"} alt="instagram icon" /></Link></li>
                <li><a href="https://www.facebook.com/"><img src={"Facebook.svg"} alt="facebook icon" /></a></li>
                <li><a href="https://www.x.com/"><img src={"Twitter.svg"} alt="twitter icon" /></a></li>
            </ul>
            </div>
            <div className='pt-7 text-[#FAFAFA]/50 border-t border-[#FAFAFA]/10 flex items-center justify-between not-md:text-xs'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex items-center justify-between gap-4'>
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>Terms of Service</a></li>
                    <li><a href='/'>Cookies</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Footer;