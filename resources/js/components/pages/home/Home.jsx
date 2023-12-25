import React, { useState, useEffect } from "react";
import axios from "axios";
import TimelineGuide from "./timelineGuide/TimelineGuide";
import Intro from "./Intro";
import Udayashya from "./Udayashya";
import PararastaNiti from "./PararastaNiti";
import HomeBanner from "./homeBanner/HomeBanner";
import NewsSec from "./NewsSec";

const Home = () => {
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
        <div className="home-page">
            <HomeBanner />
            {/* <TimelineGuide /> */}
            <div className="cols-container">
                <div className="main-col">
                    <Intro companyApi={companyApi && companyApi} />
                <Udayashya companyApi={companyApi && companyApi} />
                    <PararastaNiti />
                    {/* <News companyApi={companyApi && companyApi} /> */}
                </div>
                <div className="side-col">
                    <NewsSec companyApi={companyApi && companyApi}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
