import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";
import {AiFillCaretDown} from 'react-icons/ai'
import React from 'react'

const PopoverFunc2 = ({name}) => {
    return (
            <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-11/12">
            <Popover placement="bottom">
                <PopoverHandler>
                    <Button className="w-full py-5 text-left flex items-center justify-between">{name}
                    <span><AiFillCaretDown/></span>
                    </Button>
                </PopoverHandler>
                <PopoverContent className="absolute border-2 py-4 text-gray-600 font-normal text-md text-left left-0 top-0 lg:w-2/5 md:w-3/5 sm:w-4/5 w-11/12 px-6 tracking-wider">
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
    )
}

export default PopoverFunc2