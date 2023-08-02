import React, { useState, useEffect } from "react";
import CommissionFrame from "../components/CommissionFrame";
import { CommissionTypes, CommissionMeUrl } from "../config";

interface IConfig {
    commissions?: ICommissions;
}

interface ICommissions {
    accepting: boolean;
    note?: string;
}

const CommissionsPage: React.FC = () => {

    const [config, setConfig] = useState<IConfig>({});

    useEffect(() => {
        fetch("config.json")
            .then(response => response.json())
            .then(json => setConfig(json));
    }, []);

    return (
        <div className="flex px-2 pb-16 md:px-16 lg:px-32">

            {/* List of commission types */}
            <div className="mx-auto container items-center" style={{ maxWidth: "980px" }}>
                <div className="bg-white drop-shadow-lg border-violet-200 mt-2 md:mt-16 border">
                    <div className="p-4 text-lg font-semibold border-b border-violet-100 flex">
                        Commission Status
                        <span className="flex-grow"></span>
                        <span className="bg-rose-100 rounded-full px-2 md:px-4 md:py-1">{(config.commissions?.accepting === true ?? false) ? "Open" : "Closed"}</span>
                    </div>
                    {(config.commissions?.note !== undefined ?? false) && <div className="p-4">
                        {config.commissions?.note}
                    </div>}
                </div>

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