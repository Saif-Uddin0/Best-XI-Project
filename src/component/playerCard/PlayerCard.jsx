import React, { useState } from 'react';
import userImg from '../../assets/Group (1).png'
import flagImg from '../../assets/Group.png'
import { toast } from 'react-toastify';


const PlayerCard = ({ player, availableBalance, setAvailableBalance, purchasedPlayer, setPurchasedPlayer }) => {
    const playerPrice = parseInt(player.price.split("$").join("").split(",").join(""))
    const [isSelected, setisSelected] = useState(false)

    const handleSelected = (playerData) => {
        if (availableBalance < playerPrice) {
            toast('Need More Coin to Add!!');
            return;
        }
        if(purchasedPlayer.length === 6){
            toast("6 player already selected!!")
            return;
        }
            setisSelected(true)
            setAvailableBalance(availableBalance - playerPrice)
            setPurchasedPlayer([...purchasedPlayer , playerData])
            toast('player selected successfully')
        }
    return (
        <div className='card bg-base-100 shadow-sm p-4'>
            <figure>
                <img className='w-10/12 h-[300px] object-cover' src={player.player_img
                } alt="" />
            </figure>
            <div className='space-y-1.5 p-1 mt-3'>
                <div className='flex items-center gap-1.5'>
                    <img src={userImg} alt="UserImage" />
                    <h2 className='card-title'>{player.player_name}</h2>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-1.5 items-center text-gray-500'>
                        <img className='w-[15px] h-[15px]' src={flagImg} alt="Flag" />
                        <p className='text-sm'>{player.player_country}</p>
                    </div>
                    <button className='btn px-4 py-0 text-sm text-gray-600'>{player.playing_role}</button>

                </div>

                <div className='border-t border-gray-300 mt-5 space-y-1.5'>
                    <div className='flex justify-between items-center mt-4'>
                        <h4 className=' font-bold mb-3'>Rating</h4>
                        <p className='text-gray-500'>{player.rating}<i className="fa-solid fa-star text-orange-400"></i></p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-bold'>{player.batting_style}</h4>
                        <p className='text-gray-500'>{player.bowling_style}</p>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <h4 className='font-bold'>Price: {player.price}</h4>
                        <button disabled={isSelected} onClick={() => handleSelected(player)
                        } className='btn px-4 py-0 text-sm text-gray-600 bg-white'>{isSelected === true ? 'Selected' : 'Choose Players'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;