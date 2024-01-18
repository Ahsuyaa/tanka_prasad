import React, { useState, useEffect } from "react";
import axios from "axios";
import TimelineGuide from "./timelineGuide/TimelineGuide";
import Intro from "./Intro";
import Udayashya from "./Udayashya";
import PararastaNiti from "./PararastaNiti";
import HomeBanner from "./homeBanner/HomeBanner";
import NewsSec from "./NewsSec";
import Slider from "./slider/Sliders"
import img from "../../../images/img.jpg"
import Teams from "./teamsec/Teams";
import Udhyasay from "./udhyasay/Udhyasay";
import News from "./news/News";
import AboutUs from "./aboutus/AboutUs";
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
   
      const images = [
        "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
        "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg",
        "https://www.publicdomainpictures.net/pictures/320000/nahled/dusk-at-the-lake.jpg", // Assuming this image is in the same directory as your component
        // Add more image sources as needed
      ];
    return (
        <div className="home-page">
            {/* <HomeBanner /> */}
            <Slider images={images} />
             <AboutUs/>
            {/* <Udhyasay/> */}
            <Udayashya companyApi={companyApi && companyApi} />
           
            <News/>
            <Teams/>
           
            {/* <TimelineGuide /> */}
            {/* <div className="cols-container">
                <div className="main-col">
                    <Intro companyApi={companyApi && companyApi} />
                <Udayashya companyApi={companyApi && companyApi} />
                    <PararastaNiti />
              
                </div>
                <div className="side-col">
                    <NewsSec companyApi={companyApi && companyApi}/>
                </div>
            </div> */}
        </div>
    );
};

export default Home;
