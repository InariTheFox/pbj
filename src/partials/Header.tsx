import React, { useState } from "react";
import logo from "../images/Icon.png";
import background from "../images/pattern-lightest.jpg"
import shadow from "../images/shadow.png";

export interface IHeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {

    return (
        <header className="top-0 bg-white border-b-4 border-pink-300 z-30 bg-pink-50" style={{ backgroundImage: `url('${background}')`, backgroundRepeat: "repeat", backgroundSize: "256px" }}>

            {/* Logo and title */}
            <div className="md:h-48 flex items-center md:py-4 md:visible max-sm:hidden">
                <span className="flex w-42 h-42 bg-white rounded-full p-6 items-center justify-center z-60 ml-8">
                    <img src={logo} className="h-32 w-32 rounded-full" />
                </span>
                <span className="text-4xl text-slate-800 font-thin bg-white rounded-r-full pl-4 pr-12 py-4 left -ml-2 z-30">
                    PBJ Art
                </span>
            </div>

            {/* Hamburger menu button */}
            <button
                className="text-rose-900 md:hidden"
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}>
                <div className="flex bg-white rounded-full justify-center items-center w-12 h-12 m-4 ml-6 drop-shadow">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="5" width="16" height="2" />
                        <rect x="4" y="11" width="16" height="2" />
                        <rect x="4" y="17" width="16" height="2" />
                    </svg>
                </div>
            </button>
        </header>
    );
};

export default Header;