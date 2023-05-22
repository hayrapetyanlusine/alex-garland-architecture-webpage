import React from 'react'
import './Overlapping.scss'

export const Overlapping = ({ images }) => {
    return (
        <div className='overlap-container'>
            {
                images.map(({ id, url }, i) => (
                    <div
                        className='overlap-item'
                        key={id}
                        style={{ backgroundImage: `url(${require(`../../../images/${url}`)})` }}
                    >
                        {i === 0 && <h1> Alex Garland <br /> <span>ARCHITECTS</span> </h1>}
                    </div>
                ))
            }
        </div>
    );
};

