import React, { useState, useEffect } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { useNavigate } from "react-router-dom";
import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const Gallery = () => {
    const [galleryApi, setGalleryApi] = useState();
    const navigate = useNavigate();

    const fetchGallery = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/gallery/list"
        );
        const data = await res.data;
        setGalleryApi(data);
    };
    useEffect(() => {
        fetchGallery();
    });
    return (
        <>
            <StartingBanner />
            <div className="gallery-page">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">Event’s Picture Gallery</h1>
                        <div className="desc">
                            <div className="gallery-containers">
                                {galleryApi &&
                                    galleryApi.map((item) => {
                                        const {
                                            id = "",
                                            name = "",
                                            slug = "",
                                            image_link = "",
                                        } = item;
                                        return (
                                            <div
                                                className="card-wrapper"
                                                key={id}
                                                onClick={() => {
                                                    navigate(
                                                        `/gallery/${slug}/images`
                                                    );
                                                }}
                                            >
                                                <div
                                                    className="image-card"
                                                    style={{
                                                        backgroundImage: `url(${image_link})`,
                                                    }}
                                                ></div>
                                                <div className="gallery-name">
                                                    <div className="name">
                                                        {name}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default Gallery;
