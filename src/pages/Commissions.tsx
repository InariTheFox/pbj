import React from "react";
import CommissionFrame from "../components/CommissionFrame";
import { CommissionTypes, CommissionMeUrl } from "../config";

const CommissionsPage: React.FC = () => {
    return (
        <div className="flex px-8 pb-32 md:pb-16 md:px-16 lg:px-32">

            {/* List of commission types */}
            <div className="mx-auto container items-center" style={{ maxWidth: "980px" }}>
                {CommissionTypes.map((v, i) =>
                    <CommissionFrame {...{ type: v }} />
                )}
            </div>

            {/* Commission me button */}
            <a href={CommissionMeUrl} className="fixed right-12 bottom-8 rounded bg-pink-200 text-rose-800 px-6 py-4 drop-shadow-lg anim-wobble">
                Commission Me
            </a>

        </div>
    );
};

export default CommissionsPage;