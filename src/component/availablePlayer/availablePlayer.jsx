import React, { use } from 'react';
import PlayerCard from '../playerCard/PlayerCard';

const AvailablePlayer = ({ playerPromise , availableBalance, setAvailableBalance , purchasedPlayer ,setPurchasedPlayer }) => {
    const playerData = use(playerPromise);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>

            {
                playerData.map(player => <PlayerCard 
                    purchasedPlayer={purchasedPlayer}
                    setPurchasedPlayer={setPurchasedPlayer}
                    availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} ></PlayerCard> )
            }


        </div>
    );
};

export default AvailablePlayer;