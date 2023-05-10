import React, { useState } from 'react';
import './workGallery.scss';

export const WorkGallery = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className='gallery-container'>
      {
        images.map(({ id, src, title }, index) => (
          <div
            key={id}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${require(`../../../images/${src}`)})` }}
            onClick={() => handleSlideClick(index)}
          >
            <h2>{title}</h2>
          </div>
        ))
      }
    </div>
  );
};

