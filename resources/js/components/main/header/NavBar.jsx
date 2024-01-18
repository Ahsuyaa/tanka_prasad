import React, { useState, useEffect } from "react";
import logo from "../../../images/forAll/logo.png";
import logo2 from "../../../images/logo2.png";
import { NavLink } from "react-router-dom";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { debounce } from "lodash";
const NavBar = ({ menuList }) => {
    const [isFixed, setIsFixed] = useState(false);
    const [isDropDownClass, setIsDropDownClass] = useState("");
    const [dropdownStates, setDropdownStates] = useState({});
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Define the height at which the navigation should become fixed
            const fixedThreshold = 100;

            // Update the state based on the scroll position
            setIsFixed(scrollPosition > fixedThreshold);
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once
    const toggleDropdown = (title) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };
    const transitionStyles = {
        transition: 'top 0.3s',
    
      };
    return (
        <>
            <div>
                {/* upper logo */}
                <div className={`upper nav hidden lg:flex justify-between px-5 bg-white`}>
                    <div>
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                    <div>
                        <img src={logo2} alt="logo" className="h-[70px]" />
                    </div>
                </div>
                {/* lowernav */}
                <div className="hidden lg:flex mx-auto menu-bar bg-[#003893]">
            <div className="content flex justify-center">
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
                {/* fixednav */}
                <div
                    className={`upperfixed  ${
                        isFixed
                            ? "hidden lg:fixed py-10 top-0 w-full bg-white shadow-md z-50 lg:flex items-center justify-between h-16 transition-all duration-600 ease-in-out text-white"
                            : "hidden"
                    }`}
                    style={transitionStyles}
                >
                    <div>
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                    <div className="menu-bar bg-white ">
            <div className="content text-black flex justify-center">
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
                                    className="nav-link text-black"
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
                    <div>
                        <img src={logo2} alt="logo" className="h-[70px]" />
                    </div>
                </div>
                {/* responsive */}
                <div>
            {/* Hamburger Icon for small screens */}
          <div className="lg:hidden flex justify-between items-center">
          <img src={logo} alt="logo" className="h-[70px]" />
            <div className="hamburger-icon " onClick={toggleMenu}>
                ☰
            </div>
          </div>

            {/* Navigation menu */}
            <div className={`flex justify-center lowernav p-8 text-[20px] text-white relative ${isMenuOpen ? 'visible' : 'hidden'}`}>
            <div className="menu-bar bg-transparent">
            <div className="content inline-block mobile-content">
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
            </div>
        </div>
            </div>
        </>
    );
};

export default NavBar;
NavBar.defaultProps = {
    menuList: [
        {
            id: 0,
            title: "गृहपृष्ठ",
            path: "/",
        },
        {
            id: 1,
            title: "हाम्रो बारेमा",
            
            sublinks: [
                {
                    id: 0,
                    title: "परराष्ट्र निति",
                    path: "/pararastaNiti",
                    subNavigate: "pararastaniti",
                    childlinks: [
                        {
                            id: 0,
                            title: "परिचय",
                            subNavigate: "udayashya",
                            path: "/parichaye",
                        },
                        {
                            id: 2,
                            title: "उद्देश्य",
                            subNavigate: "udayashya",
                            path: "/aboutus/",
                        },
                        {
                            id: 3,
                            title: "व्यबस्थापन",
                            subNavigate: "bewasthapan",
                            path: "/tankaprasad",
                        },
                        {
                            id: 4,
                            title: "कार्यसमिति",
                            subNavigate: "karyasamiti",
                            path: "/teamsmember",
                        }
                    ],
                },
                {
                    id: 1,
                    title: "टंकप्रसाद आचार्य",
                    path: "/tankaprasad",
                    subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 2,
            title: "प्रकासन",
        
            sublinks: [
                {
                    id: 0,
                    title: "प्रतिष्ठान",
                    // subNavigate: "pararastaniti",
                },
                {
                    id: 1,
                    title: "टंकप्रसाद आचार्य",

                    // subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 3,
            title: "पुस्तकालय",
            path: "/pustakalaya",
        },
        {
            id: 4,
            title: "गतिबिधि",
            path: "/gatibidi",
        },
        {
            id: 5,
            title: "सुचना/ विज्ञप्ति ",
        
            sublinks: [
                {
                    id: 0,
                    title: "विज्ञप्ति",
                //  path:"bigaypti"
                },
                {
                    id: 1,
                    title: "सूचना",
                    path: "/suchana",
                    // subNavigate: "karyasamiti",
                },
            ],
        },
        {
            id: 6,
            title: "सङ्ग्रहालय",
            path: "/sangralaya",
        },
        {
            id: 7,
        
            title: "ग्यालेरी",
            sublinks: [
                {
                    id: 0,
                    title: "फोटोहरु",
                   path:"photos"
                },
                {
                    id: 1,
                    title: "भिडियोहरु",
                    path: "/gallerys",
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
