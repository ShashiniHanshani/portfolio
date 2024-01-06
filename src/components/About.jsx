import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-xl  border-b-2 border-gray-500">
                        01. About
                    </p>
                </div>
                <p className="text-xl mt-10 text-white font-semibold text-center">
                    Hi, Nice to meet you
                </p>
                <p className="text-xl mt-10 text-gray-500">
                    I am a focused person with the passion to adapt to the advancement of
                    technology and capability of programming and project management. Goal oriented with a dynamic personality who is committed and has good
                    inter-personal skills, ability to work in team spirit friendly and honesty. Ability to learn fast to contribute to the
                    improvement and sustainability of the company .
                </p>

                <p className="text-xl font-bold text-center mt-20 text-white">
                    Education
                </p>
                <p className="text-base text-center mt-5 text-white">
                    Bachelor of Science in Information Technology specializing in Software Engineering

                </p>
                <p className="text-base text-center mt-2 text-gray-500">
                    Sri Lanka Institute of Information Technology , Malabe

                </p>
                <p className="text-base text-center mt-2 text-gray-500">
                    2021 - present

                </p>
                <div className="group mt-10 text-center text-blue-500 text-xl font-semibold">
                    Download Curriculum Vitae

                </div>

            </div>
        </div>
    );
};

export default About;
