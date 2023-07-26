import React from "react";
import image from "../images/about.png";

const AboutPage: React.FC = () => {
    return (
        <div className="flex px-8 pb-16 md:px-16 lg:px-32">
            <div className="mx-auto container">
                <div className="bg-white drop-shadow-lg border-violet-200 mt-16 border flex flex-col md:flex-row">
                <div className="p-4 text-lg font-light border-b md:border-r border-violet-100">
                    <img src={image} />
                </div>
                <div className="p-4 text-lg font-light flex flex-col space-y-6">
                        <p>Hello!</p>
                        <p>
                            My name is Jay. I’m a digital artist from the UK and a participant of the furry fandom for over a decade. I’m a big fan of all things squeaky and squishy. Creating art is my full-time job and I love what I do!
                        </p>
                        <p>
                            Following me on my socials is the best way to keep up with my artwork and get notified about commission openings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;