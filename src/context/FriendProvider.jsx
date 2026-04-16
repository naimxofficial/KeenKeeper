import { useState } from "react"
import { toast } from "react-toastify";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {

    const [timeline, setTimeline] = useState([]);

    const handleTimeline = (currentFriend, type) => {

        const isExistFriend = timeline.find(
            friend => friend.id === currentFriend.id);
            
        if (isExistFriend) {
            toast.error("This friend already exist on Timeline");
            return
        }

        const friendWithAction = { ...currentFriend, actionType: type, addedAt: new Date().toISOString() };

        setTimeline([...timeline, friendWithAction]);
        toast.success(`${currentFriend.name} added via ${type}`);
    };


    const data = {
        timeline, setTimeline, handleTimeline
    }
    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    )
}

export default FriendProvider;