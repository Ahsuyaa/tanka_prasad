import React, { useEffect, useState } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { useParams } from "react-router-dom";
import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const PramukhKaryaharuSubpage = () => {
    const { subLinkId } = useParams();
    const [majorWorksDetailApi, setMajorWorksDetailApi] = useState();
    const fetchMajorWorksDetail = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL +
                `/api/major-works/${subLinkId && subLinkId}`
        );
        const data = await res.data;
        setMajorWorksDetailApi(data);
    };
    useEffect(() => {
        fetchMajorWorksDetail();
    }, [subLinkId]);

    return (
        <>
            <StartingBanner />
            <div className="parichaya-subpage">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">
                            {majorWorksDetailApi &&
                                majorWorksDetailApi.title &&
                                majorWorksDetailApi.title}
                        </h1>
                        <span
                            dangerouslySetInnerHTML={{
                                __html:
                                    majorWorksDetailApi &&
                                    majorWorksDetailApi.description &&
                                    majorWorksDetailApi.description,
                            }}
                        />
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default PramukhKaryaharuSubpage;
