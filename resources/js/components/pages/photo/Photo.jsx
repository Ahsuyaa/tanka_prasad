// PhotoGallery.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import PhotoCarousel from './PhotoCarousel'; // Assuming you have a PhotoCarousel component

import photos from './photoData';

const PhotoGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
  <div className='text-center bg-blue-100 p-5'>
    <h1 className='text-2xl'>फोटो ग्यालरी</h1>
    <div>
      <NavLink to="/">Home/</NavLink>
      <NavLink>Gallery</NavLink>
    </div>
  </div>
    <div className="flex flex-wrap container mx-auto">
      {photos.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
          onClick={() => openModal(index)}
        >
          <div className="relative group overflow-hidden">
            <img
              src={item.url}
              alt={`item ${index + 1}`}
              className="w-full h-32 object-cover rounded-md transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-black transition-opacity duration-300">
              <p className="text-white text-center">{item.name}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Photo Carousel Modal"
      >
        {selectedPhotoIndex !== null && (
          <PhotoCarousel
            photos={photos}
            currentIndex={selectedPhotoIndex}
            onClose={closeModal}
          />
        )}
      </Modal>
    </div>
    </>
  );
};

export default PhotoGallery;
