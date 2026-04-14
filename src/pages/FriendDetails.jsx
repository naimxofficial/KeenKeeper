import React from 'react';
import { BiMessageDots } from 'react-icons/bi';
import { FiArchive } from 'react-icons/fi';
import { MdOutlineNotificationsPaused } from 'react-icons/md';
import { PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id);
    const friends = useLoaderData();
    console.log(friends);
    const friend = friends.find(friend => friend.id === Number(id));
    console.log(friend);
    const { picture, name, days_since_contact, tags, status, bio, email, goal, next_due_date } = friend;
    return (
        <div className='bg-[#F8FAFC] py-20 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 w-11/12 mx-auto'>
            {/* Left side */}
            <div className='col-span-1 space-y-4'>
                {/* Friend card */}
                <div className='p-6 bg-white  text-center flex flex-col items-center justify-center gap-2 rounded-lg drop-shadow-sm'>
                    <img className='mb-1 rounded-full' src={picture} alt="" />
                    <h3 className='font-semibold text-xl'>{name}</h3>
                    <p className={`text-xs font-semibold px-3 py-2 text-white rounded-full ${status === "overdue" ? 'bg-[#EF4444]' : status === "on-track" ? 'bg-[#244D3F]' : "bg-[#EFAD44]"}`}>{status}</p>
                    <div>

                        {
                            tags.map((tag, index) => <div tag={tag} key={index} className='badge mr-2 text-[#244D3F] bg-[#CBFADB] rounded-full p-4 font-semibold text-xs'>{tag}</div>)
                        }
                    </div>
                    <em className='text-[#64748B] font-medium'>"{bio}"</em>
                    <p className='text-[#64748B] text-xs'>email: {email}</p>

                </div>
                {/* Snooze, Archive, Delete */}
                <div className='space-y-2'>
                    <div className='btn p-6 bg-white rounded-sm drop-shadow-xs flex items-center gap-2 justify-center'>
                        <MdOutlineNotificationsPaused className='text-2xl' />
                        <h2 className='font-medium'>Snooze 2 weeks</h2>
                    </div>
                    <div className='btn p-6 bg-white rounded-sm drop-shadow-xs flex items-center gap-2 justify-center'>
                        <FiArchive className='text-xl' />
                        <h2 className='font-medium'>Archive</h2>
                    </div>
                    <div className='not-md:mb-6 btn p-6 bg-white rounded-sm drop-shadow-xs flex items-center gap-2 justify-center text-[#EF4444]'>
                        <RiDeleteBinLine className='text-2xl' />
                        <h2 className='font-medium'>Delete</h2>
                    </div>
                </div>

            </div>

            {/* Right side */}
            <div className='lg:col-span-2 space-y-6'>
                {/* More Stats */}
                <div className='text-center gap-6 grid grid-cols-1 lg:grid-cols-3'>

                    <div className='bg-white rounded-lg drop-shadow-sm py-8 space-y-2 '>
                        <h2 className='font-semibold text-[30px] text-[#244D3F]'>{days_since_contact}</h2>
                        <p className='text-[#64748B] text-[18px] not-md:text-sm'>Days Since Contact</p>
                    </div>

                    <div className='bg-white rounded-lg drop-shadow-sm  py-8  space-y-2'>
                        <h2 className='font-semibold text-[30px] text-[#244D3F]'>{goal}</h2>
                        <p className='text-[#64748B] text-[18px] not-md:text-sm'>Goal (Days)</p>
                    </div>

                    <div className='bg-white rounded-lg drop-shadow-sm  py-8 space-y-2'>
                        <h2 className='font-semibold text-[30px] text-[#244D3F]'>{next_due_date}</h2>
                        <p className='text-[#64748B] text-[18px] not-md:text-sm'>Next Due</p>
                    </div>

                </div>

                {/* Relationship Goal */}
                <div className='drop-shadow-sm rounded-lg bg-white  p-6 space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium text-xl text-[#244D3F]'>Relationship Goal</h2>
                        <button className='btn font-medium text-sm'>Edit</button>
                    </div>
                    <p className='text-[#64748B] text-lg'>Connect every <span className='text-black font-bold'>{goal} days</span></p>
                </div>

                {/* Quick Check-In */}
                <div className='drop-shadow-sm rounded-lg bg-white  p-6 space-y-4'>
                    <h2 className='font-medium text-xl text-[#244D3F]'>Quick Check-In</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {/* Call */}
                        <div className='text-lg flex flex-col items-center justify-center text-center p-4 bg-[#f8fafc] rounded-lg gap-2 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 drop-shadow-sm'><PiPhoneCallBold className='text-3xl' /> <p>Call</p></div>

                        {/* Text */}
                        <div className='text-lg flex flex-col items-center justify-center text-center p-4 bg-[#f8fafc] rounded-lg gap-2 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 drop-shadow-sm'><BiMessageDots  className='text-3xl' /> <p>Text</p></div>

                        {/* Video */}
                        <div className=' text-lg flex flex-col items-center justify-center text-center p-4 bg-[#f8fafc] rounded-lg gap-2 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 drop-shadow-sm'><PiVideoCameraBold   className='text-3xl' /> <p>Video</p></div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default FriendDetails;