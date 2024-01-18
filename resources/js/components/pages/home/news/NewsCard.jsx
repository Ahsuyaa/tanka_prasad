import React from 'react';

const NewsCard = ({ img, title, description }) => {
  return (
    <div>
      <div>
        <img src={img} alt="img" className='w-full max-h-[350px]' />
       <div className='p-2'>
       <h4 className='font-semibold'>{title}</h4>
        <p>{description}</p>
        <button className='text-[#DC143C] font-bold'>read more</button>
       </div>
      </div>
    </div>
  );
};

export default NewsCard;
