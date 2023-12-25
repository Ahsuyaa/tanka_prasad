import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
// import BottomBar from "./BottomBar";
import MidBar from "./MidBar";
import MenuBar from "./MenuBar";

const Header = () => {
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
        <div className="header-comp">
            <TopBar companyApi={companyApi && companyApi} />
            <MidBar companyApi={companyApi && companyApi} />
            <MenuBar />
            {/* <BottomBar companyApi={companyApi && companyApi} /> */}
        </div>
    );
};

export default Header;
