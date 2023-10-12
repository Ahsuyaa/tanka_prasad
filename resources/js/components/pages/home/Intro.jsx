import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = ({ companyApi }) => {
    const navigate = useNavigate();
    return (
        <div className="intro-comp">
            <div className="contents">
                <div className="text-wrapper">
                    <h1 className="title">प्रतिष्ठानको परिचय</h1>
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
                        {/* <div className="btn-wrapper">
              <CgMoreO className="read-more-btn" />
            </div> */}
                        <span
                            className="btn-text"
                            onClick={() => {
                                navigate("/parichaya");
                            }}
                        >
                            थप पढ्नुहोस्{" "}
                        </span>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img
                        src={
                            companyApi &&
                            companyApi.image_link &&
                            companyApi.image_link
                        }
                        alt=""
                        className="profile-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
