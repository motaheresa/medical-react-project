import React from 'react'
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import News from '../../pages/News/News'
import image1 from '../../assests/Page2/client.jpg'
import image3 from '../../assests/Page2/client2.jpg'
import image4 from '../../assests/Page2/client3.jpg'
import { SlCalender } from 'react-icons/sl'
import image2 from '../../assests/Page2/new1.jfif'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import image5 from '../../assests/Page3/client5.jpg'
import image6 from '../../assests/Page3/client6.jpg'
import image7 from '../../assests/Page3/client7.jpg'
import image8 from '../../assests/Page3/client8.jpg'
import image9 from '../../assests/Page3/client9.jpg'
import image10 from '../../assests/Page3/client10.jpg'



const Blogs = () => {
    return (
        <div>
            <HeaderForPages name="Blogs" />
            <div className='news'>
                <div className="news-section py-10">
                    <ul className='flex items-center gap-4 justify-center flex-wrap'>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image1} className='w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='cursor-pointer  rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3 font-semibold'>In this hospital there are special surgeon</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image3} className='cursor-pointer  w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Eng/Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3  font-semibold'>Can you get a diflucan prescription online?</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image4} className='cursor-pointer w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Dev/Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3  font-semibold'>Why Is Skin Surgeon Considered Underrated</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                    </ul>
                    <ul className='flex items-center mt-3 gap-4 justify-center flex-wrap'>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image8} className='w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='cursor-pointer  rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3 font-semibold'>In this hospital there are special surgeon</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image9} className='cursor-pointer  w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Eng/Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3  font-semibold'>Can you get a diflucan prescription online?</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image10} className='cursor-pointer w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Dev/Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3  font-semibold'>Why Is Skin Surgeon Considered Underrated</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                    </ul>
                    <ul className='flex items-center mt-3 gap-4 justify-center flex-wrap'>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image5} className='w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='cursor-pointer  rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3 font-semibold'>In this hospital there are special surgeon</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image6} className='cursor-pointer  w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Eng/Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3  font-semibold'>Can you get a diflucan prescription online?</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                        <li className='anyli bg-white border-2 border-blue-100 rounded-lg px-4 py-5'>
                            <img src={image7} className='cursor-pointer w-full rounded-lg' alt="" />
                            <div className="flex items-center py-5 justify-left px-2 gap-4">
                                <div className="flex items-center gap-1 ">
                                    <img src={image2} className='rounded-full w-10 h-10' alt="" />
                                    <p className='class-color-p-news2'>Dev/Mo Taher</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='calender-icon-news'><SlCalender /></span>
                                    <p className='class-color-p-news2'>13 Aug 2004</p>
                                </div>
                            </div>
                            <p className='class-bg-p-small text-xl px-3  font-semibold'>Why Is Skin Surgeon Considered Underrated</p>
                            <button className='flex items-center read_more_btn_news gap-1 mt-4 px-3 py-1 rounded-lg'>
                                <span className='read_more_font_size_news'>Read More</span>
                                <span className='px-1 py-1 bg-red-100 rounded-lg text-2xl class-for-bg text-white'><MdOutlineKeyboardArrowRight /></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blogs