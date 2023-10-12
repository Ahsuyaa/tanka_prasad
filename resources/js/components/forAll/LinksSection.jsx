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
        <div className="links-section">
            <h2 className="title">English</h2>
            <div className="links-wrapper">
                {linksApi &&
                    linksApi.map((item) => {
                        const { id = "", name = "", page = "" } = item;
                        return (
                            <NavLink
                                to={`/inner-links/${page.slug && page.slug}`}
                                className="link"
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
