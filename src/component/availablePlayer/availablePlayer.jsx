import React, { use } from 'react';

const AvailablePlayer = ({playerPromise}) => {
    const playerData = use(playerPromise);
    console.log(playerData);
    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayer;