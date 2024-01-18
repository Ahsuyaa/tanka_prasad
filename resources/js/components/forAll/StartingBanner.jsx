import React from "react";

const StartingBanner = ({ imageUrl, text }) => {
    return (
        <div className="relative ">
            <div className="absolute w-full h-full bg-gradient-to-b from-black via-blue-950 to-black opacity-50"></div>
            <img src={imageUrl} alt="" className="w-full h-[250px] object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold  text-center">
             <h2>टंकप्रसाद आचार्य</h2>
             <h2 className="my-2">   {text}</h2>
            </div>
        </div>
    );
};

export default StartingBanner;
