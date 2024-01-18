import React from 'react';
import img from "../../../../images/img.jpg";
import TeamsCard from './TeamCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Teams = () => {
  const teamMember = [
    {
      img: img,
      name: 'John Doe',
      position: 'Software Engineer',
    },
    {
        img: img,
        name: 'John Doe',
        position: 'Software Engineer',
      },
      {
        img: img,
        name: 'John Doe',
        position: 'Software Engineer',
      },
      {
        img: img,
        name: 'John Doe',
        position: 'Software Engineer',
      },
    {
      img: img,
      name: 'John Doe',
      position: 'Software Engineer',
    },
    {
      img: img,
      name: 'John Doe',
      position: 'Software Engineer',
    },
    {
      img: img,
      name: 'John Doe',
      position: 'Software Engineer',
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaAngleLeft/>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
    <FaAngleRight/>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='mx-auto container my-10 '>
      <h2 className='text-center text-4xl font-semibold my-5'>कार्यसमिति</h2>
      <Slider {...settings}>
        {teamMember.map((card, index) => (
          <div key={index} className=''>
            <TeamsCard img={card.img} name={card.name} position={card.position} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Teams;
