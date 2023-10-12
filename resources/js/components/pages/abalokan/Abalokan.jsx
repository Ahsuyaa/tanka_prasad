import React, { useEffect, useState } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const Abalokan = () => {
    const [observationApi, setObservationApi] = useState();

    const fetchObservation = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/observations"
        );
        const data = await res.data;
        setObservationApi(data);
    };
    useEffect(() => {
        fetchObservation();
    }, []);

    return (
        <>
            <StartingBanner />
            <div className="abalokan-page">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">
                            {observationApi &&
                                observationApi.title &&
                                observationApi.title}
                        </h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    observationApi &&
                                    observationApi.description &&
                                    observationApi.description,
                            }}
                        />
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default Abalokan;
