import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SuchanaData from './SuchanaData';

const Suchana = () => {
  return (
    <>
      <div className='text-center bg-blue-100 p-5'>
    <h1 className='text-3xl'>सूचना</h1>
    <div className='my-2'>
      <NavLink to="/" >गृहपृष्ठ/</NavLink>
      <NavLink className="px-1">सूचना</NavLink>
    </div>
  </div>
 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {SuchanaData.map(item => (
        <div key={item.id} className="p-4">
          <Link to={`/suchanadetail/${item.id}`}>
            <div>
              <img src={item.imageUrl} alt={`Image ${item.id}`} className="w-full h-32 object-cover " />
             <div  className="bg-gray-200 p-4">
             <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
             <div className='flex justify-between'>
             <p className="text-sm text-gray-500 mb-2">{item.datePosted}</p>
              <p className="text-sm text-gray-500">Posted by: {item.postedBy}</p>
             </div>
            </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </>
  );

};

export default Suchana;
