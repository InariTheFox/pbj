import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex px-8 pt-16 pb-16">
            <div className="container mx-auto font-light">
                <div className="border border-violet-100 bg-white p-8 text-center drop-shadow-lg">
                    <div className="text-4xl">
                        Oh no!
                    </div>
                    <div className="text-xl">
                        You've found somewhere that doesn't exist...
                    </div>
                    <div className="pt-8">
                        <NavLink end to="/" className="text-pink-600">Go home</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;