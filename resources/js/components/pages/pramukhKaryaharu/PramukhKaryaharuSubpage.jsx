import React, { useEffect, useState } from "react";
import axios from "axios";
import StartingBanner from "../../forAll/StartingBanner";
import { useParams } from "react-router-dom";
import book1 from "../../../images/img.jpg";
import book2 from "../../../images/img2.webp";
import myPdf from "../../../assets/myBook.pdf";

import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const PramukhKaryaharuSubpage = ({ books }) => {
    const { subLinkId } = useParams();
    const [majorWorksDetailApi, setMajorWorksDetailApi] = useState();
    const fetchMajorWorksDetail = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL +
                `/api/major-works/${subLinkId && subLinkId}`
        );
        const data = await res.data;
        setMajorWorksDetailApi(data);
    };
    useEffect(() => {
        fetchMajorWorksDetail();
    }, [subLinkId]);

    return (
        <>
            <StartingBanner />
            <div className="pramukhKaryaharu-subpage">
                <div className="contents">
                    <div className="main-section">
                        <h1 className="heading">
                            {majorWorksDetailApi &&
                                majorWorksDetailApi.title &&
                                majorWorksDetailApi.title}
                        </h1>
                        {Number(subLinkId) === 1 ? (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html:
                                        majorWorksDetailApi &&
                                        majorWorksDetailApi.description &&
                                        majorWorksDetailApi.description,
                                }}
                            />
                        ) : (
                            <div className="books">
                                {books.map((book) => {
                                    const {
                                        id = "",
                                        name = "",
                                        image_link = "",
                                        pdf_link = "",
                                    } = book;
                                    return (
                                        <a
                                            className="book-card"
                                            key={id}
                                            href={pdf_link}
                                            target="__blank"
                                        >
                                            <img
                                                className="book-img"
                                                src={image_link}
                                                alt=""
                                            />
                                            <div className="book-name">
                                                {name}
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <LinksSection />
                </div>
            </div>
        </>
    );
};

export default PramukhKaryaharuSubpage;

PramukhKaryaharuSubpage.defaultProps = {
    books: [
        {
            id: 1,
            name: "The Love Hypothesis",
            image_link: book1,
            pdf_link: myPdf,
        },
        {
            id: 2,
            name: "How to Talk to anyone",
            image_link: book2,
            pdf_link: myPdf,
        },
        {
            id: 3,
            name: "The Love Hypothesis",
            image_link: book1,
            pdf_link: myPdf,
        },
        {
            id: 4,
            name: "How to Talk to anyone",
            image_link: book2,
            pdf_link: myPdf,
        },
        {
            id: 5,
            name: "The Love Hypothesis",
            image_link: book1,
            pdf_link: myPdf,
        },
        {
            id: 6,
            name: "How to Talk to anyone",
            image_link: book2,
            pdf_link: myPdf,
        },
        {
            id: 7,
            name: "The Love Hypothesis",
            image_link: book1,
            pdf_link: myPdf,
        },
        {
            id: 8,
            name: "How to Talk to anyone",
            image_link: book2,
            pdf_link: myPdf,
        },
        {
            id: 9,
            name: "The Love Hypothesis",
            image_link: book1,
            pdf_link: myPdf,
        },
        {
            id: 10,
            name: "How to Talk to anyone",
            image_link: book2,
            pdf_link: myPdf,
        },
    ],
};
