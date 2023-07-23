import React from "react";

import "./Faq.css";
import PopoverFunc from "../../components/Popover/Popover";
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import PopoverFunc2 from "../../components/Popover/Popover2";



export default function Faq() {
    return (
        <div>
            <HeaderForPages name="Faq's"/>
            <div className=" flex my-24 flex-wrap justify-center gap-2 items-center">
            <PopoverFunc2 className="flex-2" name="How Doctor Can Ease Your Pain?"/>
            <PopoverFunc2 name="How do I withdraw from a subject?"/>
            <PopoverFunc2 name="What’s a payment statement?"/>
            <PopoverFunc2 name="Understand Doctor Before You Regret?"/>
            <PopoverFunc2 name="How Can I Contact You?"/>
            <PopoverFunc2 name="What types of systems do you support?"/>
            <PopoverFunc2 name="We Teach You How To Feel Better?"/>
            <PopoverFunc2 name="Understand Doctor Before You Regret?"/>
            <PopoverFunc2 name="How Doctor Can Ease Your Pain?"/>
            <PopoverFunc2 name="How do I withdraw from a subject?"/>
            <PopoverFunc2 name="What’s a payment statement?"/>
            <PopoverFunc2 name="Understand Doctor Before You Regret?"/>
            <PopoverFunc2 name="How Can I Contact You?"/>
            <PopoverFunc2 name="What types of systems do you support?"/>
            <PopoverFunc2 name="We Teach You How To Feel Better?"/>
            <PopoverFunc2 name="Understand Doctor Before You Regret?"/>
            </div>
        </div>
    );
}
