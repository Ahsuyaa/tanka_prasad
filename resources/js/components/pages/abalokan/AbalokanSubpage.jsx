import React, { useEffect, useState } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { useParams } from "react-router-dom";

import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const AbalokanSubpage = () => {
    const { subLinkId } = useParams();

    const [majorObservationDetailApi, setObservationDetailApi] = useState();
    const fetchMajorWorksDetail = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL +
                `/api/observation/${subLinkId && subLinkId}`
        );
        const data = await res.data;
        setObservationDetailApi(data);
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
                            {majorObservationDetailApi &&
                                majorObservationDetailApi.title &&
                                majorObservationDetailApi.title}
                        </h1>
                        <span
                            dangerouslySetInnerHTML={{
                                __html:
                                    majorObservationDetailApi &&
                                    majorObservationDetailApi.description &&
                                    majorObservationDetailApi.description,
                            }}
                        />
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default AbalokanSubpage;
