import React from "react";

const RelatedNewsCard = ({ img, title, description }) => {
  return (
    <div className="border-2 p-3">
      <div className="grid grid-cols-3 gap-5">
        <div>
          <img src={img} alt="img" className="w-[200px] h-[100px]  object-cover" />
        </div>
        <div className="col-span-2">
          <h4 className="font-semibold">{title}</h4>
          <p>{description}</p>
          <button className="text-[#DC143C] font-bold">read more</button>
        </div>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
