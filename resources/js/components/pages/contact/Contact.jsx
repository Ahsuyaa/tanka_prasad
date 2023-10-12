import React, { useState, useEffect } from "react";
import StartingBanner from "../../forAll/StartingBanner";
import SnackBar from "../../forAll/SnackBar";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import Button from "@mui/material/Button";
import axios from "axios";
import { useForm } from "react-hook-form";

import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const Contact = () => {
    const [emailSubmitting, setEmailSubmitting] = useState(false);
    // const [formErrors, setFormErrors] = useState({});
    const [companyApi, setCompanyApi] = useState();
    const [formSubmitting, setFormSubmitting] = useState(false);

    const { register, handleSubmit, reset } = useForm();

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
    const handleClick = (newState) => () => {
        setSnackBarState((prev) => ({ ...prev, open: true }));
    };

    const fetchContact = async (data) => {
        try {
            const url = new URL(
                `${import.meta.env.VITE_API_BASE_URL}/api/contact/store?`
            );
            const searchParams = new URLSearchParams();
            searchParams.append("name", data.name);
            searchParams.append("email", data.email);
            searchParams.append("phone", data.phone);
            searchParams.append("message", data.description);

            const res = await axios.post(
                url.toString(),
                searchParams.toString()
            );

            setTimeout(() => {
                if (res.data.status === 200) {
                    setAlertMessage((prev) => ({
                        ...prev,
                        messageState: true,
                        successMessage:
                            "Your have Successfully send your Message.",
                    }));
                } else {
                    setAlertMessage((prev) => ({
                        ...prev,
                        messageState: false,
                        failedMessage: "Message was unable to send. Try later.",
                    }));
                }
                setFormSubmitting(false);
                setSnackBarState((prev) => ({
                    ...prev,
                    open: true,
                }));
                handleClick({
                    vertical: "bottom",
                    horizontal: "center",
                });
                reset();
            }, 3000);
        } catch (error) {
            // console.error("Error:", error);
        }
    };

    return (
        <>
            {formSubmitting && (
                <div className="spinner-wrapper">
                    <ProgressIndicator
                        className="spinner"
                        sentColor="#dc143c"
                    />
                </div>
            )}

            <StartingBanner />
            <div className="contact-page">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">सम्पर्क</h1>
                        <div className="text-wrapper">
                            <div className="title">सम्पर्क ठेगानाः</div>
                            <div className="info">
                                {companyApi &&
                                    companyApi.company_address &&
                                    companyApi.company_address}
                            </div>
                            <div className="info">
                                सम्पर्क नम्बरः
                                {companyApi &&
                                    companyApi.company_phone &&
                                    companyApi.company_phone}
                            </div>
                            <div className="info">
                                इमेल ठेगानाः{" "}
                                {companyApi &&
                                    companyApi.company_email &&
                                    companyApi.company_email}
                            </div>
                        </div>
                        <form
                            className="form"
                            onSubmit={handleSubmit(async (data) => {
                                setFormSubmitting(true);
                                await fetchContact(data);
                            })}
                        >
                            <label htmlFor="name" className="label">
                                नाम <span className="astrek">*</span>
                                <br />
                                <input
                                    id="name"
                                    className="input"
                                    {...register("name", {
                                        required: true,
                                    })}
                                />
                            </label>
                            <label htmlFor="email" className="label">
                                इमेल <span className="astrek">*</span>
                                <br />
                                <input
                                    id="email"
                                    className="input"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                            </label>
                            <label htmlFor="email" className="label">
                                फोन नं. <span className="astrek">*</span>
                                <br />
                                <input
                                    id="phone"
                                    className="input"
                                    {...register("phone", {
                                        required: true,
                                    })}
                                />
                            </label>
                            <label htmlFor="message" className="label">
                                सन्देश <span className="astrek">*</span>
                                <br />
                                <textarea
                                    id="message"
                                    className="input"
                                    rows="4"
                                    cols="50"
                                    {...register("description", {
                                        required: true,
                                    })}
                                />
                            </label>
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
                        <div className="desc"></div>
                    </div>
                    <LinksSection />
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

export default Contact;
