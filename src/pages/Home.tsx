import classNames from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../images/Icon.png";
import { ExternalLinks } from "../config";

export interface IHomePageProps {
    sidebarOpen: boolean;
}

const HomePage: React.FC<IHomePageProps> = (props) => {
    return (
        <div className="flex pt-16 px-8 pb-16 md:px-16 lg:px-32">
            <div className="mx-auto container space-y-8">
                <div className={classNames("flex flex-col items-center justify-center md:hidden", { "hidden": props.sidebarOpen })}>
                    <img src={logo} className="h-32 w-32 rounded-full border-2 border-violet-400" />
                    <div className="font-thin text-4xl mt-4">PBJ Art</div>
                </div>
                {ExternalLinks.map((v, i) =>
                    <Link to={v.url} key={i} target="_blank" className="bg-violet-100 hover:bg-violet-200 rounded-full block py-6 items-center text-xl text-sky-900">
                        <div className="flex justify-center">
                            <div className="flex flex-row justify-end pr-4 w-16">
                                <span>
                                {v.iconUrl && <img src={v.iconUrl} className="h-6 mt-1" />}
                                </span>
                            </div>
                            <div className="md:w-32">
                                {v.title}
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HomePage;