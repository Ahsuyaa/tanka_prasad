import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsDot } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const LinksSection = ({ englishLinks }) => {
    const [linksApi, setLinksApi] = useState();

    const fetchCompany = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/menu/list"
        );
        const data = await res.data;
        setLinksApi(data);
    };
    useEffect(() => {
        fetchCompany();
    }, []);
    return (
        <div className="links-section m-3 sm:m-0 pt-10">
            <h2 className="title font-bold text-[#003893] text-[35px]">English</h2>
            <div className="links-wrapper ">
                {linksApi &&
                    linksApi.map((item) => {
                        const { id = "", name = "", page = "" } = item;
                        return (
                            <NavLink
                                to={`/inner-links/${page.slug && page.slug}`}
                                className="link flex items-center gap-1 py-2 underline text-[#003893] text-[20px] font-semibold"
                                key={id}
                            >
                                <BsDot className="dot" />
                                {name}
                            </NavLink>
                        );
                    })}
            </div>
        </div>
    );
};

export default LinksSection;

LinksSection.defaultProps = {
    englishLinks: [
        {
            id: 0,
            text: "Organizational Profile",
            link: "profile",
        },
        {
            id: 1,
            text: "Workshop and Seminar",
            link: "workshop",
        },
        {
            id: 2,
            text: "Professional Rostrum",
            link: "rostrum",
        },
        {
            id: 3,
            text: "Board and Advisory Panel Members",
            link: "members",
        },
        {
            id: 4,
            text: "प्रकाशन",
            link: "prakashan",
        },
    ],
};
