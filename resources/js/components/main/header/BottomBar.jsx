// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import SideDrawer from "./SideDrawer";
// import { AiOutlineCaretDown } from "react-icons/ai";

// import { MdKeyboardArrowRight } from "react-icons/md";

// const BottomBar = ({ menuList, companyApi }) => {
//     const [majorWorksDropdownApi, setMajorWorksDropdownApi] = useState();
//     const [observationDropdownApi, setObservationDropdownApi] = useState();

//     const fetchDropdown = async () => {
//         const res = await axios.get(
//             import.meta.env.VITE_API_BASE_URL + "/api/major-works-list"
//         );
//         const data = await res.data;
//         setMajorWorksDropdownApi(data);
//         // -----------------------------------------------
//         const res2 = await axios.get(
//             import.meta.env.VITE_API_BASE_URL + "/api/observation-list"
//         );
//         const data2 = await res2.data;
//         setObservationDropdownApi(data2);
//     };
//     useEffect(() => {
//         fetchDropdown();
//     }, []);

//     const [drawerState, setDrawerState] = React.useState({
//         right: false,
//     });

//     const navigate = useNavigate();

//     return (
//         <>
//             <SideDrawer
//                 drawerState={drawerState}
//                 setDrawerState={setDrawerState}
//                 menuList={menuList}
//                 companyApi={companyApi && companyApi}
//                 majorWorksDropdownApi={
//                     majorWorksDropdownApi && majorWorksDropdownApi
//                 }
//                 observationDropdownApi={
//                     observationDropdownApi && observationDropdownApi
//                 }
//             />
//             <div className="bottom-bar">
//                 <div className="contents">
//                     <img
//                         src={
//                             companyApi &&
//                             companyApi.logo_link &&
//                             companyApi.logo_link
//                         }
//                         alt=""
//                         className="main-logo"
//                         onClick={() => {
//                             navigate("/");
//                         }}
//                     />
//                     <div className="menu-items">
//                         {menuList &&
//                             menuList.map((item) => {
//                                 const {
//                                     id = "",
//                                     head = "",
//                                     headNavigate = "",
//                                     subHeadList = "",
//                                     navType = "",
//                                 } = item;
//                                 if (subHeadList) {
//                                     if (navType === "pramukhKaryaharu") {
//                                         return (
//                                             <div
//                                                 className="dropdown menu-item"
//                                                 key={id}
//                                             >
//                                                 <NavLink
//                                                     className="nav-btn"
//                                                     to={`${headNavigate}`}
//                                                     style={{
//                                                         textDecoration: "none",
//                                                         color: "#003893",
//                                                     }}
//                                                 >
//                                                     <div className="head-text">
//                                                         {head}
//                                                     </div>
//                                                     <AiOutlineCaretDown className="cart-icon" />
//                                                 </NavLink>
//                                                 <div className="dropdown-content">
//                                                     <div className="dropdown-inner">
//                                                         {majorWorksDropdownApi &&
//                                                             majorWorksDropdownApi.map(
//                                                                 (item) => {
//                                                                     const {
//                                                                         id = "",
//                                                                         title = "",
//                                                                     } = item;

//                                                                     return (
//                                                                         <NavLink
//                                                                             to={`${headNavigate}/${id}`}
//                                                                             className="sub-cat nav-link"
//                                                                             key={
//                                                                                 id
//                                                                             }
//                                                                         >
//                                                                             {
//                                                                                 title
//                                                                             }
//                                                                         </NavLink>
//                                                                     );
//                                                                 }
//                                                             )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         );
//                                     } else if (navType === "abalokan") {
//                                         return (
//                                             <div
//                                                 className="dropdown menu-item"
//                                                 key={id}
//                                             >
//                                                 <NavLink
//                                                     className="nav-btn"
//                                                     to={`${headNavigate}`}
//                                                     style={{
//                                                         textDecoration: "none",
//                                                         color: "#003893",
//                                                     }}
//                                                 >
//                                                     <div className="head-text">
//                                                         {head}
//                                                     </div>
//                                                     <AiOutlineCaretDown className="cart-icon" />
//                                                 </NavLink>

//                                                 <div className="dropdown-content">
//                                                     <div className="dropdown-inner">
//                                                         {observationDropdownApi &&
//                                                             observationDropdownApi.map(
//                                                                 (item) => {
//                                                                     const {
//                                                                         id = "",
//                                                                         title = "",
//                                                                     } = item;

//                                                                     return (
//                                                                         <NavLink
//                                                                             to={`${headNavigate}/${id}`}
//                                                                             className="sub-cat nav-link"
//                                                                             key={
//                                                                                 id
//                                                                             }
//                                                                         >
//                                                                             {
//                                                                                 title
//                                                                             }
//                                                                         </NavLink>
//                                                                     );
//                                                                 }
//                                                             )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         );
//                                     } else {
//                                         return (
//                                             <div
//                                                 className="dropdown menu-item"
//                                                 key={id}
//                                             >
//                                                 <NavLink
//                                                     className="nav-btn"
//                                                     to={`${headNavigate}`}
//                                                     style={{
//                                                         textDecoration: "none",
//                                                         color: "#003893",
//                                                     }}
//                                                 >
//                                                     <div className="head-text">
//                                                         {head}
//                                                     </div>
//                                                     <AiOutlineCaretDown className="cart-icon" />
//                                                 </NavLink>
//                                                 <div className="dropdown-content">
//                                                     <div className="dropdown-inner">
//                                                         {subHeadList.map(
//                                                             (item) => {
//                                                                 const {
//                                                                     id = "",
//                                                                     link = "",
//                                                                     subNavigate = "",
//                                                                     links = "",
//                                                                 } = item;

//                                                                 if (links) {
//                                                                     return (
//                                                                         <div
//                                                                             // to={`${headNavigate}/${subNavigate}`}
//                                                                             className="drop-sub-cat nav-link"
//                                                                             key={
//                                                                                 id
//                                                                             }
//                                                                         >
//                                                                             <NavLink
//                                                                                 to={`${headNavigate}/${subNavigate}`}
//                                                                                 className="child-link"
//                                                                                 key={
//                                                                                     id
//                                                                                 }
//                                                                             >
//                                                                                 {
//                                                                                     link
//                                                                                 }
//                                                                                 <MdKeyboardArrowRight className="arrow-icon" />
//                                                                             </NavLink>
//                                                                             <div className="child-dropdown-content">
//                                                                                 <div className="child-dropdown-inner">
//                                                                                     {links.map(
//                                                                                         (
//                                                                                             item
//                                                                                         ) => (
//                                                                                             <NavLink
//                                                                                                 className="child-item"
//                                                                                                 key={
//                                                                                                     item?.id
//                                                                                                 }
//                                                                                             >
//                                                                                                 {
//                                                                                                     item?.link
//                                                                                                 }
//                                                                                             </NavLink>
//                                                                                         )
//                                                                                     )}
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     );
//                                                                 } else {
//                                                                     return (
//                                                                         <NavLink
//                                                                             to={`${headNavigate}/${subNavigate}`}
//                                                                             className="sub-cat nav-link"
//                                                                             key={
//                                                                                 id
//                                                                             }
//                                                                         >
//                                                                             {
//                                                                                 link
//                                                                             }
//                                                                         </NavLink>
//                                                                     );
//                                                                 }
//                                                                 {
//                                                                     /* } */
//                                                                 }
//                                                             }
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         );
//                                     }
//                                 } else {
//                                     return (
//                                         <NavLink
//                                             className=" menu-item"
//                                             key={id}
//                                             to={`${headNavigate}`}
//                                         >
//                                             {head}
//                                         </NavLink>
//                                     );
//                                 }
//                             })}
//                     </div>
//                     <RxHamburgerMenu
//                         className="burger-icon toggle-icon"
//                         onClick={() => {
//                             setDrawerState((prev) => ({
//                                 ...prev,
//                                 right: true,
//                             }));
//                         }}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BottomBar;
// BottomBar.defaultProps = {
//     menuList: [
//         {
//             id: 0,
//             head: "गृहपृष्ठ",
//             headNavigate: "/",
//         },
//         {
//             id: 1,
//             head: "प्रतिष्ठानको परिचय",
//             headNavigate: "/parichaya",
//             subHeadList: [
//                 {
//                     id: 0,
//                     link: "परराष्ट्र निति",
//                     subNavigate: "pararastaniti",
//                     links: [
//                         {
//                             id: 0,
//                             link: "उद्देश्य",
//                             subNavigate: "udayashya",
//                         },
//                         {
//                             id: 1,
//                             link: "कार्यसमिति",
//                             subNavigate: "karyasamiti",
//                         },
//                         {
//                             id: 2,
//                             link: "व्यबस्थापन",
//                             subNavigate: "bewasthapan",
//                         },
//                         {
//                             id: 3,
//                             link: "मुख्यकार्य",
//                             subNavigate: "mukhyaKarya",
//                         },
//                         {
//                             id: 4,
//                             link: "सम्पर्क",
//                             subNavigate: "contact",
//                         },
//                     ],
//                 },
//                 {
//                     id: 1,
//                     link: "टंकप्रसाद आचार्य",
//                     subNavigate: "karyasamiti",
//                 },
//             ],
//         },
//         {
//             id: 2,
//             head: "प्रमुख कार्यहरू",
//             headNavigate: "/pramukh-karyaharu",
//             navType: "pramukhKaryaharu",
//             subHeadList: [
//                 {
//                     id: 0,
//                     link: "अनुसन्धानात्मक प्रकाशनहरु",
//                     subNavigate: "anusandhanatmak",
//                 },
//                 {
//                     id: 1,
//                     link: "प्रकाशन",
//                     subNavigate: "prakshan",
//                 },
//             ],
//         },
//         {
//             id: 3,
//             head: "अवलोकन (१९९७ – २०१७)",
//             headNavigate: "/abalokan",
//             navType: "abalokan",
//             subHeadList: [
//                 {
//                     id: 0,
//                     link: "टंकप्रसाद आचार्यको परराष्ट्र निति, २०६९",
//                     subNavigate: "pararasta",
//                 },
//             ],
//         },
//         {
//             id: 4,
//             headNavigate: "/gallery",
//             head: "ग्यालेरी",
//         },
//     ],
// };

// -------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import SideDrawer from "./SideDrawer";
import { AiOutlineCaretDown } from "react-icons/ai";

import { MdKeyboardArrowRight } from "react-icons/md";

const BottomBar = ({ menuList, companyApi }) => {
    const [majorWorksDropdownApi, setMajorWorksDropdownApi] = useState();
    const [observationDropdownApi, setObservationDropdownApi] = useState();

    const fetchDropdown = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/major-works-list"
        );
        const data = await res.data;
        setMajorWorksDropdownApi(data);
        // -----------------------------------------------
        const res2 = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/observation-list"
        );
        const data2 = await res2.data;
        setObservationDropdownApi(data2);
    };
    useEffect(() => {
        fetchDropdown();
    }, []);

    const [drawerState, setDrawerState] = React.useState({
        right: false,
    });

    const navigate = useNavigate();

    return (
        <>
            <SideDrawer
                drawerState={drawerState}
                setDrawerState={setDrawerState}
                menuList={menuList}
                companyApi={companyApi && companyApi}
                majorWorksDropdownApi={
                    majorWorksDropdownApi && majorWorksDropdownApi
                }
                observationDropdownApi={
                    observationDropdownApi && observationDropdownApi
                }
            />
            <div className="bottom-bar">
                <div className="contents">
                    <img
                        src={
                            companyApi &&
                            companyApi.logo_link &&
                            companyApi.logo_link
                        }
                        alt=""
                        className="main-logo"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <div className="menu-items">
                        {menuList &&
                            menuList.map((item) => {
                                const {
                                    id = "",
                                    head = "",
                                    headNavigate = "",
                                    subHeadList = "",
                                    navType = "",
                                } = item;
                                if (subHeadList) {
                                    if (navType === "pramukhKaryaharu") {
                                        return (
                                            <div
                                                className="dropdown menu-item"
                                                key={id}
                                            >
                                                <NavLink
                                                    className="nav-btn"
                                                    to={`${headNavigate}`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "#003893",
                                                    }}
                                                >
                                                    <div className="head-text">
                                                        {head}
                                                    </div>
                                                    <AiOutlineCaretDown className="cart-icon" />
                                                </NavLink>
                                                <div className="dropdown-content">
                                                    <div className="dropdown-inner">
                                                        {majorWorksDropdownApi &&
                                                            majorWorksDropdownApi.map(
                                                                (item) => {
                                                                    const {
                                                                        id = "",
                                                                        title = "",
                                                                    } = item;

                                                                    return (
                                                                        <NavLink
                                                                            to={`${headNavigate}/${id}`}
                                                                            className="sub-cat nav-link"
                                                                            key={
                                                                                id
                                                                            }
                                                                        >
                                                                            {
                                                                                title
                                                                            }
                                                                        </NavLink>
                                                                    );
                                                                }
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else if (navType === "abalokan") {
                                        return (
                                            <div
                                                className="dropdown menu-item"
                                                key={id}
                                            >
                                                <NavLink
                                                    className="nav-btn"
                                                    to={`${headNavigate}`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "#003893",
                                                    }}
                                                >
                                                    <div className="head-text">
                                                        {head}
                                                    </div>
                                                    <AiOutlineCaretDown className="cart-icon" />
                                                </NavLink>

                                                <div className="dropdown-content">
                                                    <div className="dropdown-inner">
                                                        {observationDropdownApi &&
                                                            observationDropdownApi.map(
                                                                (item) => {
                                                                    const {
                                                                        id = "",
                                                                        title = "",
                                                                    } = item;

                                                                    return (
                                                                        <NavLink
                                                                            to={`${headNavigate}/${id}`}
                                                                            className="sub-cat nav-link"
                                                                            key={
                                                                                id
                                                                            }
                                                                        >
                                                                            {
                                                                                title
                                                                            }
                                                                        </NavLink>
                                                                    );
                                                                }
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className="dropdown menu-item"
                                                key={id}
                                            >
                                                <NavLink
                                                    className="nav-btn"
                                                    to={`${headNavigate}`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "#003893",
                                                    }}
                                                >
                                                    <div className="head-text">
                                                        {head}
                                                    </div>
                                                    <AiOutlineCaretDown className="cart-icon" />
                                                </NavLink>
                                                <div className="dropdown-content">
                                                    <div className="dropdown-inner">
                                                        {subHeadList.map(
                                                            (item) => {
                                                                const {
                                                                    id = "",
                                                                    link = "",
                                                                    subNavigate = "",
                                                                    links = "",
                                                                } = item;

                                                                if (links) {
                                                                    return (
                                                                        <div
                                                                            // to={`${headNavigate}/${subNavigate}`}
                                                                            className="drop-sub-cat nav-link"
                                                                            key={
                                                                                id
                                                                            }
                                                                        >
                                                                            <NavLink
                                                                                to={`${headNavigate}/${subNavigate}`}
                                                                                className="child-link"
                                                                                key={
                                                                                    id
                                                                                }
                                                                            >
                                                                                {
                                                                                    link
                                                                                }
                                                                                <MdKeyboardArrowRight className="arrow-icon" />
                                                                            </NavLink>
                                                                            <div className="child-dropdown-content">
                                                                                <div className="child-dropdown-inner">
                                                                                    {links.map(
                                                                                        (
                                                                                            item
                                                                                        ) => (
                                                                                            <NavLink
                                                                                                className="child-item"
                                                                                                key={
                                                                                                    item?.id
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    item?.link
                                                                                                }
                                                                                            </NavLink>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <NavLink
                                                                            to={`${headNavigate}/${subNavigate}`}
                                                                            className="sub-cat nav-link"
                                                                            key={
                                                                                id
                                                                            }
                                                                        >
                                                                            {
                                                                                link
                                                                            }
                                                                        </NavLink>
                                                                    );
                                                                }
                                                                {
                                                                    /* } */
                                                                }
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                } else {
                                    return (
                                        <NavLink
                                            className=" menu-item"
                                            key={id}
                                            to={`${headNavigate}`}
                                        >
                                            {head}
                                        </NavLink>
                                    );
                                }
                            })}
                    </div>
                    <RxHamburgerMenu
                        className="burger-icon toggle-icon"
                        onClick={() => {
                            setDrawerState((prev) => ({
                                ...prev,
                                right: true,
                            }));
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default BottomBar;
BottomBar.defaultProps = {
    menuList: [
        {
            id: 0,
            head: "गृहपृष्ठ",
            headNavigate: "/",
        },
        {
            id: 1,
            head: "हाम्रो बारेमा",
            // headNavigate: "/parichaya",
            subHeadList: [
                {
                    id: 0,
                    link: "परराष्ट्र निति",
                    subNavigate: "pararastaniti",
                    links: [
                        {
                            id: 0,
                            link: "उद्देश्य",
                            subNavigate: "udayashya",
                        },
                        {
                            id: 1,
                            link: "कार्यसमिति",
                            subNavigate: "karyasamiti",
                        },
                        {
                            id: 2,
                            link: "व्यबस्थापन",
                            subNavigate: "bewasthapan",
                        },
                        {
                            id: 3,
                            link: "मुख्यकार्य",
                            subNavigate: "mukhyaKarya",
                        },
                        {
                            id: 4,
                            link: "सम्पर्क",
                            subNavigate: "contact",
                        },
                    ],
                },
                {
                    id: 1,
                    link: "टंकप्रसाद आचार्य",
                    subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 2,
            head: "प्रमुख कार्यहरू",
            headNavigate: "/pramukh-karyaharu",
            navType: "pramukhKaryaharu",
            subHeadList: [
                {
                    id: 0,
                    link: "अनुसन्धानात्मक प्रकाशनहरु",
                    subNavigate: "anusandhanatmak",
                },
                {
                    id: 1,
                    link: "प्रकाशन",
                    subNavigate: "prakshan",
                },
            ],
        },
        {
            id: 3,
            head: "अवलोकन (१९९७ – २०१७)",
            headNavigate: "/abalokan",
            navType: "abalokan",
            subHeadList: [
                {
                    id: 0,
                    link: "टंकप्रसाद आचार्यको परराष्ट्र निति, २०६९",
                    subNavigate: "pararasta",
                },
            ],
        },
        {
            id: 4,
            headNavigate: "/gallery",
            head: "ग्यालेरी",
        },
    ],
};
