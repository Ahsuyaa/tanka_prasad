import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PararastaNiti = () => {
    const navigate = useNavigate();

    const [lastSection, setLastSection] = useState();

    const fetchLastSection = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/last-section"
        );
        const data = await res.data;
        setLastSection(data);
    };
    useEffect(() => {
        fetchLastSection();
    }, []);

    return (
        <div className="pararasta-niti-comp">
            <div className="contents">
                <h1
                    className="title"
                    // onClick={() => {
                    //     navigate(
                    //         `/abalokan/${
                    //             lastSection && lastSection.id && lastSection.id
                    //         }`
                    //     );
                    // }}
                >
                    {lastSection && lastSection.title && lastSection.title}
                </h1>
                <div className="title-underline"></div>

                <div
                    className="desc"
                    // onClick={() => {
                    //     navigate(
                    //         `/abalokan/${
                    //             lastSection && lastSection.id && lastSection.id
                    //         }`
                    //     );
                    // }}
                    dangerouslySetInnerHTML={{
                        __html:
                            lastSection &&
                            lastSection.description &&
                            lastSection.description,
                    }}
                />
                <div className="read-more-wrapper">
                    {window.innerWidth <= "1020" && (
                        <span
                            className="btn-text"
                            onClick={() => {
                                navigate("/abalokan/pararasta");
                            }}
                        >
                            थप पढ्नुहोस्
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PararastaNiti;
