import React from "react";
import { useNavigate } from "react-router-dom";

const Udayashya = ({ companyApi }) => {
    const navigate = useNavigate();
    return (
        <div className="outer">
            <div className="udayashya-comp">
                <div className="contents">
                    <img
                        src={
                            companyApi &&
                            companyApi.objective_image_link &&
                            companyApi.objective_image_link
                        }
                        alt=""
                        className="image"
                    />
                    <div className="text-container">
                        <h1 className="head">उद्देश्य</h1>
                        <div className="brief">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        companyApi &&
                                        companyApi.objective &&
                                        companyApi.objective,
                                }}
                            />
                        </div>
                        <div className="read-more-wrapper">
                            <span
                                className="btn-text"
                                onClick={() => {
                                    navigate("/parichaya/udayashya");
                                }}
                            >
                                थप पढ्नुहोस्
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Udayashya;
