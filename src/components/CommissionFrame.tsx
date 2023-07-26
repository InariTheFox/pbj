import classNames from "classnames";
import React, { useState } from "react";
import { ICommissionType } from "../config";

export interface ICommissionFrameProps {
    type: ICommissionType;
}

const CommissionFrame: React.FC<ICommissionFrameProps> = (props) => {

    const [currentImage, setCurrentImage] = useState(props.type.images[0]);

    return (
        <div className="bg-white drop-shadow-lg border-violet-200 mt-16 border">
            <div className="p-4 text-lg font-semibold border-b border-violet-100 flex">
                {props.type.title}
                <span className="flex-grow"></span>
                <span className="bg-violet-100 rounded-full px-2 md:px-4 md:py-1">{props.type.price}</span>
            </div>
            <div className="border-b border-violet-100">
                <img src={currentImage} />
            </div>
            <div className="border-b border-violet-100 flex flex-row overflow-x-scroll no-scrollbar">
                {props.type.images.map((v, i) =>
                    <img src={v} key={i} className={classNames("max-h-48 xl:max-h-72", { "border-4 border-pink-300": currentImage === v })} onClick={() => setCurrentImage(v)} />
                )}
            </div>
            <div className="p-4">
                <div dangerouslySetInnerHTML={{ __html: props.type.description }}></div>
            </div>
        </div>
    );
};

export default CommissionFrame;