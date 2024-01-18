// PhotoCarousel.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import photos from './photoData';

const PhotoCarousel = ({ photos, currentIndex, onClose }) => {
  const { index } = useParams();
  const photoIndex = currentIndex !== undefined ? currentIndex : parseInt(index, 10);
  console.log('photoIndex:', photoIndex);
  console.log('photos:', photos);
  if (isNaN(photoIndex) || photoIndex < 0 || photoIndex >= photos.length || !photos[photoIndex]) {
    return <p>Invalid photo index</p>;
  }

  const selectedPhoto = photos[photoIndex];

  if (!Array.isArray(selectedPhoto.url2) || selectedPhoto.url2.length === 0) {
    return <p>Error loading photo data</p>;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(selectedPhoto.url2.slice(0, 12));

  useEffect(() => {
    setVisibleThumbnails(selectedPhoto.url2.slice(0, 12));
  }, [selectedPhoto.url2]);

  const changeSlide = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % selectedPhoto.url2.length;
    updateVisibleThumbnails(newIndex);
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + selectedPhoto.url2.length) % selectedPhoto.url2.length;
    updateVisibleThumbnails(newIndex);
    setActiveIndex(newIndex);
  };

  const updateVisibleThumbnails = (newIndex) => {
    let endIndex = newIndex + 12;
    if (endIndex > selectedPhoto.url2.length) {
      endIndex = endIndex - selectedPhoto.url2.length;
      setVisibleThumbnails([
        ...selectedPhoto.url2.slice(newIndex, selectedPhoto.url2.length),
        ...selectedPhoto.url2.slice(0, endIndex),
      ]);
    } else {
      setVisibleThumbnails(selectedPhoto.url2.slice(newIndex, endIndex));
    }
  };

  return (
    <div className='photocarousel'>
          {/* Add a close button or any other UI elements for closing the modal */}
      <button className='pl-[90%] text-4xl focus:outline-none' onClick={onClose}>×</button>
      <AwesomeSlider selected={activeIndex} bullets={false}>
        {selectedPhoto.url2.map((img, imgIndex) => (
          <div key={imgIndex}>
            <img src={img} alt={`item ${photoIndex + 1}`} className="w-full h-auto rounded-md" />
          </div>
        ))}
      </AwesomeSlider>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className='text-2xl outline-none focus:outline-none' onClick={prevSlide}>&#8249;</button>
        {visibleThumbnails.map((img, imgIndex) => (
          <img
            key={imgIndex}
            src={img}
            alt={`thumbnail ${imgIndex + 1}`}
            className={`w-16 h-16 rounded-md cursor-pointer ${activeIndex === imgIndex ? 'border border-blue-500' : ''}`}
            style={{ margin: '0 5px' }}
            onClick={() => changeSlide(imgIndex)}
          />
        ))}
        <button className='text-2xl outline-none focus:outline-none' onClick={nextSlide}>&#8250;</button>
      </div>

    
    </div>
  );
};

export default PhotoCarousel;
