import React from 'react';

const SelectedPlayerCard = ({player, removePlayer}) => {
    const handleRemove =() =>{
        removePlayer(
            player
        )
    }
    return (
        
            <div className=' border-1 border-gray-300 rounded-md flex items-center justify-between p-4 shadow-xs '>
                <div className='flex items-center gap-3 '>
                    <img src={player.player_img} className='w-[50px] h-[50px] rounded-xl' alt="" />
                    <div>
                        <h4 className='font-semibold'>{player.player_name
                        }</h4>
                        <p className='text-sm text-gray-500'>{player.playing_role}</p>
                    </div>
                </div>
                <span onClick={handleRemove}>
                    <i className="fa-solid fa-trash text-red-700"></i>
                </span>
                
            </div>
        
    );
};

export default SelectedPlayerCard;