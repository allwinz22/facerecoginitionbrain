import React from 'react';

const FaceRecoginition = ({imageUrl}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2 pb3'>
                <img src={imageUrl} alt="" width='500px' height='auto' />
            </div>
        </div>
    )
}

export default FaceRecoginition;