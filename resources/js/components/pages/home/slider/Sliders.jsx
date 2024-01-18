import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Sliders = ({ images }) => {

  return (
    <AwesomeSlider  className='h-[500px] object-cover'>
      {images.map((src, index) => (
        <div key={index} data-src={src} />
      ))}
    </AwesomeSlider>
  );
};

export default Sliders;
