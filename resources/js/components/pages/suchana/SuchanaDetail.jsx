import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import SuchanaData from './SuchanaData';

const SuchanaDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const selectedItem = SuchanaData.find(item => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <>
       <div className='text-center bg-blue-100 p-5'>
    <h1 className='text-3xl'>{selectedItem.title}</h1>
    <div className='my-2'>
      <NavLink to="/" >गृहपृष्ठ /</NavLink>
      <NavLink className="px-1" to="/suchana">सूचना /</NavLink>
      <NavLink className="px-1">{selectedItem.title}</NavLink>
    </div>
  </div>
 
    <div className='container mx-auto'>
     
      <img src={selectedItem.imageUrl} alt={`Image ${selectedItem.id}`}  className='w-full'/>
 
    <p className='text-justify my-2'> {selectedItem.desc}</p>
    <div className='flex justify-between'>
   <p>Date Posted: {selectedItem.datePosted}</p>
      <p>Posted by: {selectedItem.postedBy}</p>
   </div>
     
      {/* Add more details as needed */}
    </div>
    </>
  );
};

export default SuchanaDetail;
