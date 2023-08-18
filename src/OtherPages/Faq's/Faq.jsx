import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Faq.css";
// import PopoverFunc from "../../components/Popover/Popover";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import News from "../../pages/News/News";
// import PopoverFunc2 from "../../components/Popover/Popover2"
import { GiPlainArrow } from "react-icons/gi";

export default function Faq() {
    const [faq, setFaq] = useState(true);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);
    const [faq5, setFaq5] = useState(false);
    const [faq6, setFaq6] = useState(false);

    const handleFaq = () => {
        setFaq(!faq);
    };
    const handleFaq2 = () => {
        setFaq2(!faq2);
    };
    const handleFaq3 = () => {
        setFaq3(!faq3);
    };
    const handleFaq4 = () => {
        setFaq4(!faq4);
    };
    const handleFaq5 = () => {
        setFaq5(!faq5);
    };
    const handleFaq6 = () => {
        setFaq6(!faq6);
    };
    return (
        <div>
            <HeaderForPages name="Faq's" />
            <div className=" grid grid-cols-1 px-5 md:px-24 py-24 gap-4">
                <Accordion>
                    <div
                        onClick={() => handleFaq()}
                        className={`${faq ? "showFaq" : "hideFaq"}`}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between w-full items-center ">
                                <div>
                                    <Typography className="text-white">
                                        <span className="text-xl">
                                            How Doctor Can Ease Your Pain?
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    className={`text-white text-xl rotate-180 duration-300 ${faq && "rotate-0"
                                        }`}
                                >
                                    <GiPlainArrow />
                                </div>
                            </div>
                        </AccordionSummary>
                    </div>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <div
                        onClick={() => handleFaq2()}
                        className={`${faq2 ? "showFaq" : "hideFaq"}`}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between w-full items-center ">
                                <div>
                                    <Typography className="text-white">
                                        <span className="text-xl">
                                            How do I withdraw from a subject?
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    className={`text-white text-xl duration-300 ${faq2 && "faqArrow"
                                        }`}
                                >
                                    <GiPlainArrow />
                                </div>
                            </div>
                        </AccordionSummary>
                    </div>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <div
                        onClick={() => handleFaq3()}
                        className={`${faq3 ? "showFaq" : "hideFaq"}`}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between w-full items-center ">
                                <div>
                                    <Typography className="text-white">
                                        <span className="text-xl">
                                            Understand Doctor Before You Regret?
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    className={`text-white text-xl duration-300 ${faq3 && "faqArrow"
                                        }`}
                                >
                                    <GiPlainArrow />
                                </div>
                            </div>
                        </AccordionSummary>
                    </div>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <div
                        onClick={() => handleFaq4()}
                        className={`${faq4 ? "showFaq" : "hideFaq"}`}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between w-full items-center ">
                                <div>
                                    <Typography className="text-white">
                                        <span className="text-xl">
                                            How Doctor Can Ease Your Pain?
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    className={`text-white text-xl duration-300 ${faq4 && "faqArrow"
                                        }`}
                                >
                                    <GiPlainArrow />
                                </div>
                            </div>
                        </AccordionSummary>
                    </div>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <div
                        onClick={() => handleFaq5()}
                        className={`${faq5 ? "showFaq" : "hideFaq"}`}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between w-full items-center ">
                                <div>
                                    <Typography className="text-white">
                                        <span className="text-xl">
                                            What types of systems do you support?
                                        </span>
                                    </Typography>
                                </div>
                                <div
                                    className={`text-white text-xl duration-300 ${faq5 && "faqArrow"
                                        }`}
                                >
                                    <GiPlainArrow />
                                </div>
                            </div>
                        </AccordionSummary>
                    </div>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <div
                        onClick={() => handleFaq6()}
                        className={`${faq6 ? "showFaq" : "hideFaq"}`}
                    >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="flex justify-between items-center"
                        >
                            <div className="flex justify-between w-full items-center ">
                                <div>
                                    <Typography className="text-white">
                                        <span className="text-xl">What’s a payment statement?</span>
                                    </Typography>
                                </div>
                                <div
                                    className={`text-white text-xl duration-300 ${faq6 && "faqArrow"
                                        }`}
                                >
                                    <GiPlainArrow />
                                </div>
                            </div>
                        </AccordionSummary>
                    </div>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="md:py-5">
                <News />
            </div>
        </div>
    );
}
