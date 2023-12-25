import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const HomeBanner = ({ sliderImages }) => {
    const slider = (
        <AwesomeSlider
            className="awesome-slider"
            bullets={true}
            transitionDelay={200}
        >
            {sliderImages.map((item, idx) => {
                return <div data-src={item} key={idx} className="banner-img" />;
            })}
        </AwesomeSlider>
    );
    return <div className="home-banner">{slider}</div>;
};

export default HomeBanner;

HomeBanner.defaultProps = {
    sliderImages: [
        "https://i.pinimg.com/originals/b0/bc/a8/b0bca852d0a2420c1ce1b135b781e6ab.jpg",
        "https://wallpapercave.com/wp/cr2sy44.jpg",
        "https://wallpapers.com/images/featured/bird-gexou6yuac2g8fbu.jpg",
    ],
};
