import React from "react";

const NewsCard = ({ cardDetail }) => {
    const {
        id = "",
        title = "",
        image_link = "",
        description = "",
    } = cardDetail;
    return (
        <div className="news-card" key={id}>
            <img className="card-img" src={image_link} alt="" />
            <div className="texts-wrapper">
                <div className="title">{title}</div>
                <div className="desc">{description}</div>
            </div>
        </div>
    );
};

export default NewsCard;
