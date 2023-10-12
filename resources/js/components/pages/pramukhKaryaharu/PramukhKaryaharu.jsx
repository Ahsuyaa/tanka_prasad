import React, { useEffect, useState } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const PramukhKaryaharu = () => {
    const [majorWorksApi, setMajorWorksApi] = useState();

    const fetchMajorWorks = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/major-works"
        );
        const data = await res.data;
        setMajorWorksApi(data);
    };
    useEffect(() => {
        fetchMajorWorks();
    }, []);

    return (
        <>
            <StartingBanner />
            <div className="pramukhKaryaharu-page">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">
                            {majorWorksApi &&
                                majorWorksApi.title &&
                                majorWorksApi.title}
                        </h1>
                        <div
                            className="desc"
                            dangerouslySetInnerHTML={{
                                __html:
                                    majorWorksApi &&
                                    majorWorksApi.description &&
                                    majorWorksApi.description,
                            }}
                        />
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default PramukhKaryaharu;
