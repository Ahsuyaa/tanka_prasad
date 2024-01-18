import React from 'react';

const TeamsCard = ({ img, name, position }) => {
  return (
    <div className='p-2'>
      <div className='border-2 p-3 '>
     <div className='flex justify-center'>
     <img src={img} alt="img" className='rounded-full w-[100px] h-[100px] object-cover mt-2 '/>
     </div>
        <div className=''>
          <h4 className='text-center mt-2 font-semibold'>{name}</h4>
          <h5 className='text-center py-2'>{position}</h5>
        </div>
      </div>
    </div>
  );
}

export default TeamsCard;
