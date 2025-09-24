import React from 'react';
import SelectedPlayerCard from '../selected-player-Card/SelectedPlayerCard';

const SelectedPlayer = ({ purchasedPlayer }) => {
    return (
        <div className='max-w-[1200px] mx-auto sm:p-2.5 space-y-2'>
            {
                purchasedPlayer.map(player => <SelectedPlayerCard player={player}></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayer;