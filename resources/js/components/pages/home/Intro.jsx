import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = ({ companyApi }) => {
    const navigate = useNavigate();
    return (
        <div className="intro-comp">
            <div className="contents">
                <h1 className="title">प्रतिष्ठानको परिचय</h1>
                <div className="title-underline"></div>
                <div className="text-wrapper">
                    <img
                        src={
                            companyApi &&
                            companyApi.image_link &&
                            companyApi.image_link
                        }
                        alt=""
                        className="profile-img"
                    />
                    <div
                        className="desc"
                        dangerouslySetInnerHTML={{
                            __html:
                                companyApi &&
                                companyApi.introduction &&
                                companyApi.introduction,
                        }}
                    />
                    <div className="read-more-wrapper">
                        {/* <span
                            className="btn-text"
                            onClick={() => {
                                navigate("/parichaya");
                            }}
                        >
                            थप पढ्नुहोस्{" "}
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
