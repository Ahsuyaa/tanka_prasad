import React from "react";
// import { useNavigate } from "react-router-dom";

const Udayashya = ({ companyApi }) => {
    // const navigate = useNavigate();
    return (
        <div className="udayashya-comp">
            <h1 className="head">उद्देश्य</h1>
            <div className="title-underline"></div>

            <div className="contents">
                <div className="text-container">
                    <img
                        src={
                            companyApi &&
                            companyApi.objective_image_link &&
                            companyApi.objective_image_link
                        }
                        alt=""
                        className="image"
                    />
                    <div
                        className="brief"
                        dangerouslySetInnerHTML={{
                            __html:
                                companyApi &&
                                companyApi.objective &&
                                companyApi.objective,
                        }}
                    />
                    {/* <div className="read-more-wrapper">
                        <span
                            className="btn-text"
                            onClick={() => {
                                navigate("/parichaya/udayashya");
                            }}
                        >
                            थप पढ्नुहोस्
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Udayashya;
