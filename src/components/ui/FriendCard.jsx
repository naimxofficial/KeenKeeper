import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    // console.log(friend);
    const {id, picture ,name, days_since_contact , tags, status} = friend;
    return (
        <Link to={`/friendDetails/${id}`} className='p-6 bg-white  text-center flex flex-col items-center justify-center gap-2 rounded-lg drop-shadow-sm'>
            <img className='mb-1 rounded-full' src={picture} alt="" />
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p className='text-[#64748B] text-xs'>{days_since_contact}d ago</p>
            <div>

            {
                tags.map((tag, index)=> <div tag={tag} key={index} className='badge mr-2 text-[#244D3F] bg-[#CBFADB] rounded-full p-4 font-semibold text-xs'>{tag}</div>)
            }
            </div>
            <p className={`text-xs font-semibold px-3 py-2 text-white rounded-full ${status === "overdue" ? 'bg-[#EF4444]' : status === "on-track" ? 'bg-[#244D3F]' : "bg-[#EFAD44]"}`}>{status}</p>
            
        </Link>
    );
};

export default FriendCard;