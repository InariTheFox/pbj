import React, { useRef } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import classNames from "classnames";
import logo from "../images/Icon.png";
import { Pages } from "../config";

export interface ISiteLink {
    title: string;
    path: string;
}

export interface ISidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div className={classNames("fixed inset-0 bg-slate-900 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200", { "opacity-100": props.sidebarOpen, "opacity-0 pointer-events-none": !props.sidebarOpen })}
                onClick={() => props.setSidebarOpen(false)}></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={classNames("flex flex-col h-full z-40 left-0 top-0 fixed md:static md:left-auto md:top-auto md:translate-x-0 overflow-y-auto md:overflow-y-auto no-scrollbar md:overflow-x-hidden w-72 md:w-64 shrink-0 bg-violet-100 transition-all duration-200 ease-in-out", { "translate-x-0": props.sidebarOpen, "-translate-x-72": !props.sidebarOpen })}>

                {/* Sidebar header */}
                <div className="flex mb-10 pr-3 sm:px-2" >

                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="md:hidden text-rose-900 hover:bg-rose-400 bg-rose-200 rounded-full p-2 m-4 mt-8"
                        onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    <div className="mt-2 md:hidden">
                        <img src={logo} alt="Site logo of a grinning inflatable fox" className="h-32 w-32 rounded-full border-2 border-rose-400" />
                    </div>
                </div>
                <div className="md:hidden font-thin text-2xl flex justify-center -mt-8">
                    <span>PBJ Art</span>
                </div>

                {/* Links */}
                <div className="flex-grow">
                    {Pages.map((v, i) =>
                        <NavLink to={v.url} key={i} className={classNames("mb-0.5 block last:mb-0 hover:text-pink-900")} onClick={(_) => props.setSidebarOpen(false)}>
                            <div className={classNames("flex", { "bg-pink-200": pathname === v.url })}>
                                <span className="px-3 py-3 text-lg font-light ml-3 flex-grow">{v.title}</span>
                                <span className={classNames("bg-violet-100 relative z-50", { "collapse": pathname !== v.url })}>
                                    <svg className={classNames("fill-pink-200")} viewBox="0 0 12 24" style={{ height: "52px" }}>
                                        <polygon points="0 0 12 12 0 24" />
                                    </svg>
                                </span>
                            </div>
                        </NavLink>
                    )}
                </div>

                {/* Copyright */}
                <div className="px-4 text-sm text-slate-500">
                    &copy; 2023 PBJ<br />
                </div>
                <div className="px-4 pb-4 text-xs text-slate-400">
                    Developed by <a href="https://inflatofox.com" target="_blank" rel="noreferrer" className="font-medium underline">Inari</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;