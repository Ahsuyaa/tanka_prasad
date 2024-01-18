import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GalleryCarousel from "./GalleryCarousel";
import { VscClose } from "react-icons/vsc";

import StartingBanner from "../../forAll/StartingBanner";

const GalleryImages = () => {
    const [imagesApi, setImagesApi] = useState();

    const { galleryName = "" } = useParams();
    const [isSliderOverlay, setIsSliderOverlay] = useState(false);
    const [currentImageIdx, setCurrentImageIdx] = useState();

    const fetchImages = async (image) => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL +
                `/api/gallery/${
                    image ? image : galleryName && galleryName
                }/images`
        );
        const data = await res.data;
        setImagesApi(data);
    };

    useEffect(() => {
        fetchImages(galleryName && galleryName);
    }, []);

    return (
        <div className="gallery-images-page">
           
            <div className="images-wrapper flex flex-wrap">
                {imagesApi &&
                    imagesApi.map((item, idx) => {
                        const { id = "", image_link = "" } = item;
                        return (
                            <div
                                className="card-wrapper"
                                key={id}
                                onClick={() => {
                                    setIsSliderOverlay(true);
                                    setCurrentImageIdx(idx);
                                }}
                            >
                                <div
                                    className="image-card"
                                    style={{
                                        backgroundImage: `url(${image_link})`,
                                    }}
                                ></div>
                            </div>
                        );
                    })}
            </div>
            {isSliderOverlay && (
                <div className="overlay-outer">
                    <div
                        className="slider-overlay"
                        onClick={() => {
                            setIsSliderOverlay(false);
                        }}
                    >
                        <div className="btn-wrapper">
                            <VscClose
                                className="close-btn"
                                onClick={() => {
                                    setIsSliderOverlay(false);
                                }}
                            />
                        </div>
                    </div>
                    <div className="silder-comp">
                        <GalleryCarousel
                            currentImageIdx={currentImageIdx && currentImageIdx}
                            imagesList={imagesApi && imagesApi}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryImages;
