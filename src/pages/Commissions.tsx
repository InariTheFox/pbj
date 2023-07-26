import React from "react";
import CommissionFrame from "../components/CommissionFrame";
import { CommissionTypes, CommissionMeUrl } from "../config";

const CommissionsPage: React.FC = () => {
    return (
        <div className="flex px-2 pb-16 md:px-16 lg:px-32">

            {/* List of commission types */}
            <div className="mx-auto container items-center" style={{ maxWidth: "980px" }}>
                {CommissionTypes.map((v, i) =>
                    <CommissionFrame {...{ type: v }} />
                )}
            </div>

            {/* Commission me button */}
            <a href={CommissionMeUrl} className="fixed right-2 bottom-4 md:right-12 md:bottom-8 rounded bg-pink-200 text-rose-800 px-4 py-2 md:px-6 md:py-4 drop-shadow-lg anim-wobble">
                Commission Me
            </a>

        </div>
    );
};

export default CommissionsPage;