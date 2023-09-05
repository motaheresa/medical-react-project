import React from "react";
import "./FormPage.css";
import image1 from '../../assests/Page2/mobile.f82d7322.png'
import image2 from '../../assests/Page2/mobilegirl.png'
import image3 from '../../assests/Page2/mobileheart.png'
import image4 from '../../assests/Page2/mobilelocation.png'
import image5 from '../../assests/Page2/mobilesettings.png'
import image6 from '../../assests/Page2/mobiletrue.png'


const FormPage = () => {
    return (
        <div className="py-10 FormSection md:mx-10 sm:mx-5 mx-0 rounded-2xl grid gap-10 relative  lg:grid-cols-2">
            <div className=" form-wraper mx-auto lg:w-4/6 h-full">
                <h2 className="md:text-3xl text-xl font-semibold pb-5 pt-10 text-blue-800">Book Appointment</h2>
                <form action="" method="get" className="flex flex-col w-full gap-5 block mx-auto ">
                    <select className="form-select form-control py-5 px-3 outline-none ">
                        <option className="hidden">Select Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select form-control py-5 px-3 outline-none">
                        <option className="hidden">Select Doctor</option>
                        <option value="1">Dr Hassan Saleh</option>
                        <option value="2">Dr Naeem Magdy </option>
                        <option value="3">Dr Fady Nagah</option>
                    </select>
                    <input type="text" required className="form-select form-control py-5 px-3 outline-none placeholder:text-black" placeholder="Your Name" name="" id="" />
                    <input type="text" required className="form-select form-control py-5 px-3 outline-none placeholder:text-black" placeholder="Phone Numbers" name="" id="" />
                    <input type="date" required className="form-select form-control py-5 px-3 outline-none" name="" id="" />
                    <button className="appointment cursor-pointer text-white lg:mt-8 mt-4 mb-5 lg:mb-10 py-4 px-6 rounded-lg w-72 mx-auto text-lg hover:opacity-70 duration-500">Appointment Now</button>
                </form>
                
            </div>
            <div className="mx-auto md:w-3/4 lg:w-full relative w-3/5">
                <img src={image1} className="w-full h-full" alt="" />

                <div className="groub-images absolute bottom-4 right-3">
                    <img src={image2} className="w-full form_image2 " alt="" />
                </div>
                <div className="groub-images absolute top-0 right-20">
                    <img src={image3} className=" w-full form_image3 " alt="" />
                </div>
                <div className="groub-images absolute top-2/4 left-24">
                    <img src={image4} className="w-4/5 form_image4 rounded-3xl" alt="" />
                </div>
                <div className="groub-images absolute top-3/4 right-56">
                    <img src={image5} className="w-full form_image5" alt="" />
                </div>
                <div className="groub-images absolute top-1/4 left-0">
                    <img src={image6} className="w-full form_image6 " alt="" />
                </div>
            </div>
        </div>
    );
};

export default FormPage;
