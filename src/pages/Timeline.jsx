import React, { useContext, useState } from 'react';
import { FriendContext } from '../context/FriendContext';

const Timeline = () => {

    const { timeline } = useContext(FriendContext);

    const [filter, setFilter] = useState('All');

    const [sortOrder, setSortOrder] = useState('newest');


    if (timeline.length === 0) {
        return (
            <div className='w-11/12 mx-auto p-20 space-y-6'>
                <h2 className='font-bold text-5xl'>Timeline</h2>
            <div className=' font-bold text-3xl not-md:text-2xl not-md:p-20 p-50 bg-white text-center rounded-lg drop-shadow-xs'>
                <h2>No interactions on Timeline</h2>
            </div>
            </div>
        )
    }

    const processedTimeline = timeline
        .filter(item => filter === 'All' || item.actionType === filter)
        .sort((a, b) => {
            const dateA = new Date(a.addedAt);
            const dateB = new Date(b.addedAt);

            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });

    return (
        <div className='w-11/12 mx-auto p-20 space-y-6'>
            <div className='space-y-6'>
                <h2 className='font-bold text-5xl'>Timeline</h2>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Filter: {filter} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setFilter('All')}>All</a></li>
                        <li><a onClick={() => setFilter('call')}>Call</a></li>
                        <li><a onClick={() => setFilter('text')}>Text</a></li>
                        <li><a onClick={() => setFilter('video')}>Video</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn btn-outline m-1">
                        Sort: {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xs">
                        <li><a onClick={() => setSortOrder('newest')}>Newest First</a></li>
                        <li><a onClick={() => setSortOrder('oldest')}>Oldest First</a></li>
                    </ul>
                </div>
            </div>
            <div className='space-y-6'>
                {
                    processedTimeline.length > 0 ? (
                        processedTimeline.map((friend, ind) => (
                            <div className='bg-white p-4 flex items-center gap-4 rounded-lg drop-shadow-sm' key={ind} friend={friend}>
                                <img src={`/${friend.actionType}.png`} />
                                <div>
                                    <h2><span className='text-[#244D3F] font-medium text-xl'>{friend.actionType}</span> <span className='text-lg text-[#64748B]'>with {friend.name}</span></h2>
                                    <p className='font-medium text-[#64748B]'>{new Date(friend.addedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No {filter} entries found.</p>
                    )
                }
            </div>

        </div>
    );
};

export default Timeline;