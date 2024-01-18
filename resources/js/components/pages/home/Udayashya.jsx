import React from "react";
// import { useNavigate } from "react-router-dom";

const Udayashya = ({ companyApi }) => {
    // const navigate = useNavigate();
    return (
        <div className="udayashya-comp container mx-auto ">
            <h1 className="head text-center text-3xl font-medium my-10">
                उद्देश्य
            </h1>

            <div className="contents ">
                <div className="text-container md:flex items-center gap-8 ">
                    <img
                        src={
                            companyApi &&
                            companyApi.objective_image_link &&
                            companyApi.objective_image_link
                        }
                        alt=""
                        className="image w-full"
                    />
                    {/* <div className="text-lg">
                  <p
                        className="brief text-justify  leading-10 font-medium my-5"
                        dangerouslySetInnerHTML={{
                            __html:
                                companyApi &&
                                companyApi.objective &&
                                companyApi.objective,
                        }}
                    />
                  </div> */}
                   <p
  className="brief text-justify leading-10 font-medium my-5 text-lg"
  dangerouslySetInnerHTML={{ __html: companyApi && companyApi.objective }}
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
