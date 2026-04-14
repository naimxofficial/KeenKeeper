import React, { use } from 'react';
import FriendCard from '../components/ui/FriendCard';
const friendsPromise = fetch('friends.json').then(res => res.json());

const Home = () => {
    const friends = use(friendsPromise);
    
    return (
        <div className='py-20 w-11/12 mx-auto'>

            {/* friends to keep close */}
            <div className='text-center'>
                <h2 className='mb-4 font-bold text-5xl not-md:text-2xl'>Friends to keep close in your life</h2>
                <p className='text-[#64748B] not-md:text-xs mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='not-md:hidden' />
                    relationships that matter most.</p>
                    <button className='btn bg-[#244D3F] font-semibold text-white'>+ Add a Friend</button>
            </div>

            {/* Stats */}
            <div className='text-center py-10 border-b border-[#E9E9E9] gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>

                <div className='bg-white rounded-lg drop-shadow-sm py-8 space-y-2 '>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>{friends.length}</h2>
                    <p className='text-[#64748B] text-[18px] not-md:text-sm'>Total Friends</p>
                </div>

                <div className='bg-white rounded-lg drop-shadow-sm  py-8  space-y-2'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>{friends.filter(f => f.status === "on-track").length}</h2>
                    <p className='text-[#64748B] text-[18px] not-md:text-sm'>On Track</p>
                </div>

                <div className='bg-white rounded-lg drop-shadow-sm  py-8 space-y-2'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>{friends.filter(f => f.status === "overdue").length}</h2>
                    <p className='text-[#64748B] text-[18px] not-md:text-sm'>Need Attention</p>
                </div>

                <div className='bg-white  rounded-lg drop-shadow-sm py-8  space-y-2'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>7</h2>
                    <p className='text-[#64748B] text-[18px] not-md:text-sm'>Interactions This Month</p>
                </div>

            </div>

            {/* Your Friends */}
            <div className='mt-10'>
                <h2 className='font-semibold mb-4 text-2xl'>Your Friends</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        friends.map(friend => <FriendCard friend={friend} key={friend.id}></FriendCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;