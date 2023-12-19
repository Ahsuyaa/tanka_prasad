import React, { useState, useEffect, useRef, createRef } from "react";
import axios from "axios";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { PiClockCountdownFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import Button from "@mui/material/Button";

const Timeline = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const yearRefs = useRef([]);
    const [timelineApi, setTimelineApi] = useState([{}]);
    const [selectedYear, setSelectedYear] = useState({});

    const fetchTimeline = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/timelines"
        );
        const data = await res.data;
        setTimelineApi(data);
    };
    useEffect(() => {
        fetchTimeline();
    }, []);
    useEffect(() => {
        setSelectedYear(timelineApi && timelineApi[0]);
    }, [timelineApi]);
    useEffect(() => {
        yearRefs.current = Array(timelineApi && timelineApi.length)
            .fill(null)
            .map((_, index) => yearRefs.current[index] || createRef());
    }, [timelineApi && timelineApi.length]);

    useEffect(() => {
        yearRefs.current.forEach((yearRef, index) => {
            yearRef.style.top = `${index * 100}px`; // Adjust this as needed
        });

        const handleScroll = () => {
            let selectedIndex = -1;
            yearRefs.current.forEach((yearRef, index) => {
                if (yearRef) {
                    const yearTop = yearRef.getBoundingClientRect().top;
                    const yearBottom = yearTop + yearRef.offsetHeight;
                    const windowHeight = window.innerHeight;
                    const windowCenter = windowHeight / 2;
                    if (window.innerWidth >= 1020) {
                        if (
                            yearTop <= windowCenter &&
                            yearBottom >= windowCenter
                        ) {
                            selectedIndex = index;
                        }
                    } else {
                        if (
                            yearTop <= windowCenter / 3 &&
                            yearBottom >= windowCenter / 3
                        ) {
                            selectedIndex = index;
                        }
                    }
                }
            });
            setSelectedYear(
                selectedIndex !== -1
                    ? timelineApi && timelineApi[selectedIndex]
                    : selectedYear && selectedYear
            );
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [timelineApi && timelineApi]);

    const handleDotClick = (index) => {
        setSelectedYear(timelineApi && timelineApi[index]);
        // Scroll to center the selected year in the window
        const yearTop = yearRefs.current[index].getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollToY = window.scrollY + yearTop - windowHeight / 2;
        window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
        });
    };

    isOverlay
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "scroll");

    return (
        <>
            {isOverlay && isOverlay && (
                <div className="overlay">
                    <RxCross1
                        className="close-icon"
                        onClick={() => {
                            setIsOverlay(false);
                        }}
                    />
                    <div className="text-wrapper">
                        {selectedYear &&
                            selectedYear.description &&
                            selectedYear.description}
                    </div>
                </div>
            )}
            <div className="timeline-wrapper">
                <div
                    className="timeline-background"
                    style={{
                        backgroundImage: `url(${
                            selectedYear && selectedYear.image_link
                                ? selectedYear.image_link
                                : timelineApi &&
                                  timelineApi[0] &&
                                  timelineApi[0].image_link &&
                                  timelineApi[0].image_link
                        })`,
                    }}
                ></div>
                <div className="timeline">
                    <div className="columns-wrapper">
                        <div className="years-inner-caption">
                            <div className="samaya-rekha-text-wrapper">
                                <div className="clock-text-wrapper">
                                    <PiClockCountdownFill className="clock-icon" />
                                    <span className="clock-text">समय</span>
                                </div>
                                <span className="samaya-rekha">
                                    समय <span className="rekha"> रेखा</span>
                                </span>
                            </div>
                            <div className="years-inner">
                                {timelineApi &&
                                    timelineApi.map((year, index) => (
                                        <div
                                            className="dot-year-wrapper"
                                            key={index}
                                            ref={(ref) =>
                                                (yearRefs.current[index] = ref)
                                            }
                                            onClick={() =>
                                                handleDotClick(index)
                                            } // Add click handler
                                        >
                                            <span
                                                className={`year ${
                                                    selectedYear.year ===
                                                    year.year
                                                        ? "selected"
                                                        : ""
                                                }`}
                                            >
                                                <span className="year-num">
                                                    {year.year}
                                                </span>
                                                <FiberManualRecordIcon className="dot" />
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="content">
                            <div className="text">
                                <h1 className="title">
                                    {/* {selectedYear &&
                                        selectedYear.year &&
                                        selectedYear.year} */}
                                    {selectedYear &&
                                        selectedYear.title &&
                                        selectedYear.title}
                                </h1>

                                <div className="brief">
                                    {selectedYear &&
                                        selectedYear.description &&
                                        selectedYear.description}
                                </div>

                                <Button
                                    className="read-more-btn"
                                    onClick={() => {
                                        setIsOverlay(true);
                                    }}
                                >
                                    थप पढ्नुहोस्
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timeline;
