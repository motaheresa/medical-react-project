import React, { createContext, useState } from 'react'
export const creatcon = createContext()


const Context = ({ children }) => {
    const [openbars, setopenbars] = useState(false)
    const [open_minmenu_one, setopen_open_minmenu_one] = useState(false)
    const [open_minmenu_two, setopen_open_minmenu_two] = useState(false)
    const [open_minmenu_three, setopen_open_minmenu_three] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchlargescreen, setsearchlargescreen] = useState(false)
    const [SearchNotUnderstand, setSearchNotUnderstand] = useState(false)
    const [hover, sethover] = useState(false)
    const [hover_Two, sethover_Two] = useState(false)
    const [hover_Three, sethover_Three] = useState(false)
    const openbarsfunction = () => {
        setopenbars(true)
    }
    const setsearchlargescreen_function = () => {
        setsearchlargescreen(true)
    }
    const closesearchlargescreen_function = () => {
        setsearchlargescreen(false)
    }
    const closebarsfunction = () => {
        setopenbars(false)
    }
    const open_minmenufunction = () => {
        setopen_open_minmenu_one(!open_minmenu_one)
        setopen_open_minmenu_two(false)
        setopen_open_minmenu_three(false)
    }
    const open_minmenufunctiontwo = () => {
        setopen_open_minmenu_two(!open_minmenu_two)
        setopen_open_minmenu_one(false)
        setopen_open_minmenu_three(false)
    }
    const open_minmenufunctionthree = () => {
        setopen_open_minmenu_three(!open_minmenu_three)
        setopen_open_minmenu_two(false)
        setopen_open_minmenu_one(false)
    }
    const close_all_minmenu=()=>{
        setopen_open_minmenu_three(false)
        setopen_open_minmenu_two(false)
        setopen_open_minmenu_one(false)
    }
    const open_searchFunction = () => {
        setSearch(true)
    }
    const close_searchFunction = () => {
        setSearch(false)
    }
    const SearchNotUnderstand_Function = () => {
        setSearchNotUnderstand(true)
    }
    const CloseSearchNotUnderstand_Function = () => {
        setSearchNotUnderstand(false)
    }
    const ShowMenuHeader_Function = () => {
        sethover(true)
    }
    const HideMenuHeader_Function = () => {
        sethover(false)
    }
    const ShowMenuHeader_Function_Two = () => {
        sethover_Two(true)
    }
    const HideMenuHeader_Function_Two = () => {
        sethover_Two(false)
    }
    const ShowMenuHeader_Function_Three=()=>{
        sethover_Three(true)
    }
    const HideMenuHeader_Function_Three=()=>{
        sethover_Three(false)
    }
    return (
        <creatcon.Provider value={{
            openbarsfunction,
            open_minmenu_one,
            open_minmenu_three,
            open_minmenu_two,
            open_minmenufunctiontwo,
            open_minmenufunctionthree,
            open_minmenufunction,
            close_all_minmenu,
            openbars,
            closebarsfunction,
            search,
            open_searchFunction,
            close_searchFunction,
            SearchNotUnderstand_Function,
            SearchNotUnderstand,
            CloseSearchNotUnderstand_Function,
            ShowMenuHeader_Function,
            HideMenuHeader_Function,
            hover,
            hover_Two,
            hover_Three,
            ShowMenuHeader_Function_Two,
            HideMenuHeader_Function_Two,
            ShowMenuHeader_Function_Three,
            HideMenuHeader_Function_Three,
            setsearchlargescreen_function,
            searchlargescreen,
            closesearchlargescreen_function,
        }}>
            {children}
        </creatcon.Provider>
    )
}

export default Context

