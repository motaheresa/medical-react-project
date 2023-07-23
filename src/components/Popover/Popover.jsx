import React, { useState } from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";
import {AiFillCaretDown} from 'react-icons/ai'


const PopoverFunc = ({name}) => {
    return (
        <div className="w-2/5">
            <Popover placement="bottom">
                <PopoverHandler>
                    <Button className="w-full py-5 text-left flex items-center justify-between">{name}
                    <span><AiFillCaretDown/></span>
                    </Button>
                </PopoverHandler>
                <PopoverContent className="absolute border-2 py-4 text-gray-600 font-normal text-md text-left left-0 top-0 w-2/5 px-6 tracking-wider">
                    <div className="w-full">
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default PopoverFunc;
