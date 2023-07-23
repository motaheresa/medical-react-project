import React from "react";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import "./Error.css";

const Error = () => {
    return (
        <div>
            <div>
                <HeaderForPages name="Page Not Found" />
            </div>
            <div className="flex items-center justify-center my-10 flex-col">
                <h2 class="error-title">
                    4<span></span>4
                </h2>
                <p className="para-error text-center error-page text-3xl px-5 font-bold">The Page you were looking for, couldn't be found.</p>
                <p className="para-error text-center my-8 error-page-2">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                <div className="flex items-center gap-2 justify-center">
                    <button className="bg-blue-700 hover:opacity-60 duration-200 px-4 w-44 text-white text-xl rounded-lg py-2">Back</button>
                    <button className="bg-blue-700 hover:opacity-60 duration-200 px-4 w-44 text-white text-xl rounded-lg py-2">Back To Home</button>
                </div>
            </div>
        </div>
    );
};

export default Error;
