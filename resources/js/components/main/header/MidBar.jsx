import React from "react";

const MidBar = ({ companyApi }) => {
    return (
        <div className="midbar">
            <img
                className="comp-logo side-div"
                src={companyApi && companyApi.logo_link && companyApi.logo_link}
                alt=""
            />
            <div className="comp-name">टंकप्रसाद आचार्य प्रतिष्ठान</div>
            <div className="side-div"></div>
        </div>
    );
};

export default MidBar;
