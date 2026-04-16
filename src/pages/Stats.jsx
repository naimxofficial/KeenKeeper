import React, { useContext } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { FriendContext } from '../context/FriendContext';

const Stats = () => {

    const { timeline } = useContext(FriendContext);

    const textCount = timeline.filter(item => item.actionType === 'text').length;
    const callCount = timeline.filter(item => item.actionType === 'call').length;
    const videoCount = timeline.filter(item => item.actionType === 'video').length;

    const hasData = timeline.length > 0;

    const data = [
        { name: 'Text', value: textCount, fill: '#7E35E1' },
        { name: 'Call', value: callCount, fill: '#244D3F' },
        { name: 'Video', value: videoCount, fill: '#37A163' },
    ];

    return (
        <div className='w-11/12 mx-auto py-20 space-y-6'>
            <h2 className='font-bold text-5xl'>Friendship Analytics</h2>
            <div className=' bg-white p-8 rounded-lg drop-shadow-sm space-y-6'>
                <h3 className='font-medium text-xl text-[#244D3F]'>By Interaction Type</h3>

                <div className='flex flex-col  justify-center gap-6'>
                    {/* Pie */}
                    <div className='mx-auto flex items-center w-full h-75 md:h-100 max-w-125'>
                        {hasData ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>

                                    <Pie data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"

                                        cornerRadius="10%"
                                        fill="#8884d8"

                                        paddingAngle={5}
                                        dataKey="value">
                                        {/* {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} ></Cell>
                                        ))} */}

                                    </Pie>
                                    <Tooltip></Tooltip>
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (<div className=' font-bold text-3xl not-md:text-2xl  bg-white text-center'>
                            <h2>No interaction data available yet.</h2>
                        </div>)}

                    </div>
                    {/* Text, Call, Video */}
                    <div className='flex items-center justify-center gap-6'>
                        <div className='gap-1 flex items-center'>
                            <div className='bg-[#7E35E1] rounded-full p-1'></div>
                            <h2 className='text-[#718096] text-sm'>Text</h2>
                        </div>
                        <div className='gap-1 flex items-center'>
                            <div className='bg-[#244D3F] rounded-full p-1'></div>
                            <h2 className='text-[#718096] text-sm'>Call</h2>
                        </div>
                        <div className='gap-1 flex items-center'>
                            <div className='bg-[#37A163] rounded-full p-1'></div>
                            <h2 className='text-[#718096] text-sm'>Video</h2>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stats;