import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";

const MenuBar = ({ menuList }) => {
    const [isDropDownClass, setIsDropDownClass] = useState("");
    return (
        <div className="menu-bar">
            <div className="content">
                {menuList.map((item) => {
                    const {
                        id = "",
                        title = "",
                        path = "",
                        sublinks = "",
                    } = item;
                    if (!sublinks) {
                        return (
                            <NavLink key={id} to={path} className="nav-link">
                                {title}
                            </NavLink>
                        );
                    } else {
                        return (
                            <span
                                key={id}
                                // to={NavLink}
                                className="nav-dropdown"
                            >
                                <NavLink
                                    className="nav-link"
                                    onMouseEnter={() => {
                                        setIsDropDownClass("");
                                    }}
                                >
                                    {title}
                                    <RxCaretDown className="drop-caret" />
                                </NavLink>
                                <div
                                    className="sublinks"
                                    style={{
                                        display: isDropDownClass,
                                    }}
                                >
                                    <div className="inner-wrapper">
                                        {sublinks.map((sublink) => {
                                            const {
                                                id = "",
                                                title = "",
                                                path = "",
                                                childlinks = "",
                                            } = sublink;
                                            if (!childlinks) {
                                                return (
                                                    <NavLink className="xchild-link">
                                                        <div
                                                            className="title"
                                                            onClick={() => {
                                                                setIsDropDownClass(
                                                                    "none"
                                                                );
                                                            }}
                                                        >
                                                            {title}
                                                        </div>
                                                        {/* <RxCaretRight className="drop-caret" /> */}
                                                    </NavLink>
                                                );
                                            } else {
                                                return (
                                                    <div
                                                        key={id}
                                                        className="sublink"
                                                    >
                                                        <NavLink className="sub-link">
                                                            <div className="title">
                                                                {title}
                                                            </div>
                                                            <RxCaretRight className="drop-caret" />
                                                        </NavLink>
                                                        <div
                                                            className="child-links"
                                                            onClick={() => {
                                                                setIsDropDownClass(
                                                                    "none"
                                                                );
                                                            }}
                                                        >
                                                            <div className="innner-links">
                                                                {childlinks.map(
                                                                    (
                                                                        sublink
                                                                    ) => {
                                                                        const {
                                                                            id = "",
                                                                            title = "",
                                                                            path = "",
                                                                        } = sublink;
                                                                        return (
                                                                            <NavLink
                                                                                className="child-link"
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
                                            }
                                        })}
                                    </div>
                                </div>
                            </span>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default MenuBar;

MenuBar.defaultProps = {
    menuList: [
        {
            id: 0,
            title: "गृहपृष्ठ",
            path: "/",
        },
        {
            id: 1,
            title: "हाम्रो बारेमा",
            // headNavigate: "/parichaya",
            sublinks: [
                {
                    id: 0,
                    title: "परराष्ट्र निति",
                    subNavigate: "pararastaniti",
                    childlinks: [
                        {
                            id: 0,
                            title: "परिचय",
                            subNavigate: "udayashya",
                        },
                        {
                            id: 2,
                            title: "उद्देश्य",
                            subNavigate: "udayashya",
                        },
                        {
                            id: 3,
                            title: "व्यबस्थापन",
                            subNavigate: "bewasthapan",
                        },
                        {
                            id: 4,
                            title: "कार्यसमिति",
                            subNavigate: "karyasamiti",
                        },
                        {
                            id: 5,
                            title: "मुख्यकार्य",
                            subNavigate: "mukhyaKarya",
                        },
                    ],
                },
                {
                    id: 1,
                    title: "टंकप्रसाद आचार्य",
                    path: "",
                    subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 2,
            title: "प्रकासन",
            headNavigate: "/",
            sublinks: [
                {
                    id: 0,
                    title: "प्रतिष्ठान",
                    // subNavigate: "pararastaniti",
                },
                {
                    id: 1,
                    title: "टंकप्रसाद आचार्य",
                    path: "",
                    // subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 3,
            title: "पुस्तकालय",
            path: "/",
        },
        {
            id: 4,
            title: "गतिबिधि",
            path: "/",
        },
        {
            id: 5,
            title: "सुचना/ विज्ञप्ति ",
            path: "/",
            sublinks: [
                {
                    id: 0,
                    title: "विज्ञप्ति",
                    // subNavigate: "pararastaniti",
                },
                {
                    id: 1,
                    title: "सूचना",
                    path: "",
                    // subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 6,
            title: "सङ्ग्रहालय",
            path: "/",
        },
        {
            id: 7,
            path: "/gallery",
            title: "ग्यालेरी",
            sublinks: [
                {
                    id: 0,
                    title: "फोटोहरु",
                    // subNavigate: "pararastaniti",
                },
                {
                    id: 1,
                    title: "भिडियोहरु",
                    path: "",
                    // subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 7,
            path: "/contact",
            title: "सम्पर्क",
        },
    ],
};
