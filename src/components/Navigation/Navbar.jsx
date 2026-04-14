import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-4'>
            <img src={"keenkeeper.svg"} alt="" />
            <ul className='flex items-center font-semibold not-md:text-xs not-md:font-extralight' >
                <li>

                <NavLink className={({ isActive }) => `flex items-center gap-1 text-[#64748B] px-4 py-3 rounded-sm ${isActive ? 'bg-[#244D3F] text-white font-semibold' : "" }`} to='/' ><RiHome2Line />Home</NavLink>
                </li>
                <li>

                <NavLink className={({ isActive }) => `flex items-center gap-1 text-[#64748B] px-4 py-3 rounded-sm ${isActive ? "bg-[#244D3F] text-white font-semibold" : ""}`}  to='/timeline'><IoTimeOutline />Timeline</NavLink>
                </li>
                <li>

                <NavLink className={({ isActive }) => `flex items-center gap-1 text-[#64748B] px-4 py-3 rounded-sm ${isActive ? "bg-[#244D3F] text-white font-semibold" : ""}`} to='/stats'><TfiStatsUp />Stats</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;