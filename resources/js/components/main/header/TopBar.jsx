import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsDot } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

const TopBar = ({ companyApi }) => {
    return (
        <>
            <div className="top-bar">
                <div className="contents">
                    <div className="social-icons-wrapper">
                        <a
                            href={
                                companyApi &&
                                companyApi.facebook &&
                                companyApi.facebook
                            }
                            target="_blank"
                        >
                            <BiLogoFacebookCircle className="icon" />
                        </a>
                        <a
                            href={
                                companyApi &&
                                companyApi.twitter &&
                                companyApi.twitter
                            }
                            target="_blank"
                        >
                            <TwitterIcon className="icon" />
                        </a>
                        <a
                            href={
                                companyApi &&
                                companyApi.youtube &&
                                companyApi.youtube
                            }
                            target="_blank"
                        >
                            <BsYoutube className="icon" />
                        </a>
                    </div>
                    <div className="info-wrapper">
                        <div className="info contact">
                            <Tooltip
                                title={
                                    companyApi &&
                                    companyApi.company_email &&
                                    companyApi.company_email
                                }
                                placement="bottom-start"
                            >
                                इमेल
                            </Tooltip>
                        </div>
                        <BsDot className="dot-icon" />
                        <div className="info contact">
                            <Tooltip
                                title={
                                    companyApi &&
                                    companyApi.company_phone &&
                                    companyApi.company_phone
                                }
                                placement="bottom-start"
                            >
                                फोन नं.
                            </Tooltip>
                        </div>
                        <BsDot className="dot-icon" />
                        <div className="info contact">
                            <Tooltip
                                title={
                                    companyApi &&
                                    companyApi.company_address &&
                                    companyApi.company_address
                                }
                                placement="bottom-start"
                            >
                                ठेगाना
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
