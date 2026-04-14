import React, { use } from 'react';
import FriendCard from './ui/FriendCard';
const friendsPromise = fetch('friends.json').then(res => res.json());

const AllFriends = () => {
       const friends = use(friendsPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                friends.map(friend => <FriendCard friend={friend} key={friend.id}></FriendCard>)
            }
        </div>
    );
};

export default AllFriends;