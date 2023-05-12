import React, { useState } from 'react'
import './WorkCarousel.scss'

export const WorkCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLeftClick = () => {
        setActiveIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const handleRightClick = () => {
        setActiveIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div className='carousel-container'>
            <button className="carousel-left" onClick={handleLeftClick}> &lt; </button>
            <button className="carousel-right" onClick={handleRightClick}> &gt; </button>
            {
                images.map(({ id, src }, index) => (
                    <div
                        key={id}
                        style={{ backgroundImage: `url(${require(`../../../images/${src}`)})` }}
                        className={`carousel ${index === activeIndex ? 'active' : ''}`}
                    >
                    </div>
                ))
            }
        </div>
    )
}