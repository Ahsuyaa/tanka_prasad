import React, { useEffect, useState } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { useParams } from "react-router-dom";
import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const ParichayaSubpage = ({ subpageContent }) => {
    // const subLink = useParams().subLink;
    const { subLink } = useParams();
    const selectedContent =
        subpageContent && subpageContent[subLink && subLink];

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
            <div className="parichaya-subpage">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">
                            {selectedContent &&
                                selectedContent.heading &&
                                selectedContent.heading}
                        </h1>
                        {subLink === "udayashya" && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html:
                                        companyApi &&
                                        companyApi.objective &&
                                        companyApi.objective,
                                }}
                            />
                        )}
                        {subLink === "karyasamiti" && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html:
                                        companyApi &&
                                        companyApi.work_limit &&
                                        companyApi.work_limit,
                                }}
                            />
                        )}
                        {subLink === "bewasthapan" && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html:
                                        companyApi &&
                                        companyApi.management &&
                                        companyApi.management,
                                }}
                            />
                        )}
                        {subLink === "mukhyaKarya" && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html:
                                        companyApi &&
                                        companyApi.main_task &&
                                        companyApi.main_task,
                                }}
                            />
                        )}
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default ParichayaSubpage;

ParichayaSubpage.defaultProps = {
    subpageContent: {
        mukhyaKarya: {
            heading: "जन्म जयन्ति तथा अन्य समारोह",
        },
        udayashya: {
            heading: "उद्देश्य",
          
        },
        karyasamiti: {
            heading: "छात्रवृत्ती समन्धी कार्यहरूः",
        },
        bewasthapan: {
            heading: "शालिक तथा विभिन्न भौतिक संरचनाको निमार्ण तथा संरक्षण",
            samparka: "",
        },
    },
};
