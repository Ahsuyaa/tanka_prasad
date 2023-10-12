import React from "react";
import banner from "../../images/forAll/birds.jpg";

const StartingBanner = () => {
    return (
        <div className="starting-banner-comp">
            <img src={banner} alt="" className="image" />
        </div>
    );
};

export default StartingBanner;
