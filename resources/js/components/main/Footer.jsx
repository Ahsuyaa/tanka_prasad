import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SnackBar from "../forAll/SnackBar";
import ProgressIndicator from "../forAll/ProgressIndicator";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const inputObj = {
    email: "",
};

const Footer = ({ footerLinks }) => {
    const [emailInput, setEmailInput] = useState(inputObj);
    const [emailSubmitting, setEmailSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
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

    const [snackBarState, setSnackBarState] = useState({
        open: false,
        vertical: "bottom ",
        horizontal: "center",
    });
    const [alertMessage, setAlertMessage] = useState({
        successMessage: "asdfads",
        failedMessage: "",
    });

    const navigate = useNavigate();

    const handleClick = (newState) => () => {
        setSnackBarState((prev) => ({ ...prev, open: true }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailInput({ ...emailInput, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(emailInput));
        setIsSubmit(true);
    };

    const postRequestFunc = async () => {
        const url = new URL(
            `${import.meta.env.VITE_API_BASE_URL}/api/subscription/store?`
        );
        const searchParams = new URLSearchParams();
        searchParams.append("email", emailInput.email);
        const res = await axios.post(url.toString(), searchParams.toString());
        console.log("res------>", res.data.status);
        setTimeout(() => {
            if (res.data.status === "success") {
                setEmailInput((prev) => ({
                    ...prev,
                    email: "",
                }));
                setAlertMessage((prev) => ({
                    ...prev,
                    successMessage:
                        "Your email has been successfully received.",
                }));
            } else {
                setEmailInput((prev) => ({
                    ...prev,
                    email: "",
                }));
                setAlertMessage((prev) => ({
                    ...prev,
                    successMessage:
                        "Already Subscribed With This Email Address.",
                }));
            }

            setSnackBarState((prev) => ({ ...prev, open: true }));
            handleClick({ vertical: "bottom", horizontal: "center" });
            setEmailSubmitting(false);
            // setOpen(true);
        }, 1500);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setEmailSubmitting(true);
            postRequestFunc();
            setIsSubmit(false);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const validRegex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
        if (!values.email) {
            errors.email = "This field is required.";
        } else if (!values.email.match(validRegex)) {
            errors.email = "This is not the valid email format.";
        }
        return errors;
    };
    return (
        <>
            <div className="footer-comp">
                <div className="contents">
                    <div className="top-bar">
                        <div className="company-column">
                            <img
                                src={
                                    companyApi &&
                                    companyApi.logo_link &&
                                    companyApi.logo_link
                                }
                                alt=""
                                className="company-logo"
                            />
                            <div
                                className="desc"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        companyApi &&
                                        companyApi.footer_text &&
                                        companyApi.footer_text,
                                }}
                            />
                        </div>
                        <div className="links-wrapper">
                            <div className="title">लिङ्कहरू</div>
                            <div className="links">
                                {footerLinks &&
                                    footerLinks.map((item) => {
                                        const { id, text, slug } = item;
                                        if (slug === "prakshan") {
                                            return (
                                                <div
                                                    key={id}
                                                    onClick={() => {
                                                        navigate(
                                                            `/pramukh-karyaharu/${slug}`
                                                        );
                                                    }}
                                                    className="link"
                                                >
                                                    {text && text}
                                                </div>
                                            );
                                        } else if (
                                            slug === "contact" ||
                                            slug === "gallery"
                                        ) {
                                            return (
                                                <div
                                                    key={id}
                                                    onClick={() => {
                                                        navigate(slug);
                                                    }}
                                                    className="link"
                                                >
                                                    {text && text}
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    key={id}
                                                    onClick={() => {
                                                        navigate(
                                                            `/parichaya/${slug}`
                                                        );
                                                    }}
                                                    className="link"
                                                >
                                                    {text && text}
                                                </div>
                                            );
                                        }
                                    })}
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="caption">
                                न्यूजलेटरको लागि साइन–अप गर्नुहोस् ।
                            </div>
                            <input
                                placeholder="इमेल टाइप गर्नुहोस् ।"
                                name="email"
                                id="email"
                                type="text"
                                className="email-input-field"
                                value={emailInput.email}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                            <span className="validation-error">
                                {formErrors && formErrors.email}
                            </span>
                            <Button type="submit" className="submit-btn">
                                {emailSubmitting ? (
                                    <ProgressIndicator
                                        className="spinner"
                                        sentColor="#fff"
                                    />
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="text">
                        © 2023 टंकप्रसाद आचार्य स्मृति प्रतिष्ठान सबै अधिकार
                        सुरक्षित । डिजिटल & बियोंड द्वारा निर्मित
                    </div>
                </div>
            </div>
            <SnackBar
                alertMessage={alertMessage}
                snackBarState={snackBarState}
                setSnackBarState={setSnackBarState}
            />
        </>
    );
};

export default Footer;

Footer.defaultProps = {
    footerLinks: [
        {
            id: 0,
            text: "सम्पर्क",
            slug: "contact",
        },
        {
            id: 2,
            text: "ग्यालेरी",
            slug: "gallery",
        },
        {
            id: 3,
            text: "कार्यसमिति",
            slug: "karyasamiti",
        },
        {
            id: 5,
            text: "व्यवस्थापन",
            slug: "bewasthapan",
        },
        {
            id: 6,
            text: "उदेश्य",
            slug: "udayashya",
        },
    ],
};
