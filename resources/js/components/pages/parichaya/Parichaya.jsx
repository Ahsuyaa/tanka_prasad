import React, { useState, useEffect } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const Parichaya = () => {
    const [companyApi, setCompanyApi] = useState();

    const fetchCompany = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/company-profile"
        );
        const data = await res.data;
        setCompanyApi(data);
    };
    useEffect(() => {
        fetchCompany();
    }, []);
    return (
        <>
            <StartingBanner />
            <div className="parichaya-page">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">प्रतिष्ठानको परिचय</h1>
                        <div
                            className="desc"
                            dangerouslySetInnerHTML={{
                                __html:
                                    companyApi &&
                                    companyApi.introduction &&
                                    companyApi.introduction,
                            }}
                        />
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default Parichaya;
