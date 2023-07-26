import React, { ReactElement } from "react";
import Header from "../partials/Header";
import Sidebar, { ISiteLink } from "../partials/Sidebar";

export interface IPageContainerProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
    children: ReactElement<any, any>;
}

const PageContainer: React.FC<IPageContainerProps> = (props) => {
    return (
        <div className="flex flex-col flex-grow h-screen overflow-hidden">
            <Header {...props} />
            <div className="flex flex-row bg-violet-50 flex-grow overflow-hidden">
                <Sidebar {...props} />
                <div className="flex-grow pb-16 overflow-y-auto">
                        {props.children}
                </div>
            </div>
        </div>
    );
};

export default PageContainer;