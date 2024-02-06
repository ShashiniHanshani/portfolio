import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import sliit from '../assets/sliit.jpeg'
import ydb from '../assets/images-5.png'
import cv from '../ShashiniHanshaniResume.pdf'

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
                <br />
                <div class="max-w-sm w-full lg:max-w-full lg:flex items-start item">
                    <div className="flex flex-col items-center justify-center shadow-md rounded-lg">
                        <img
                            src={sliit}

                            className="rounded-md items-center mt-1 h-20 w-20 mb-2 mr-5 ml-2 duration-200 hover:scale-105"
                            style={{ alignSelf: "center" }}
                        />

                    </div>
                    <div >
                        <p className="text-base text-xl  text-white">
                            Bachelor of Science in Information Technology specializing in Software Engineering

                        </p>
                        <p className="text-base text-xl mt-2 text-gray-500">
                            Sri Lanka Institute of Information Technology , Malabe

                        </p>
                        <p className="text-base text-xl mt-2 text-gray-500">
                            2021 - present

                        </p>
                    </div>

                </div>
                <br />
                <div class="max-w-sm w-full lg:max-w-full lg:flex items-start item">
                    <div className="flex flex-col items-center justify-center shadow-md rounded-lg">
                        <img
                            src={ydb}

                            className="rounded-md items-center mt-1 h-20 w-20 mb-2 mr-5 ml-2 duration-200 hover:scale-105"
                            style={{ alignSelf: "center" }}
                        />

                    </div>
                    <div >
                        <p className="text-base text-xl  text-white">
                            Advanced Level Examination , Physical Science Stream

                        </p>
                        <p className="text-base text-xl mt-2 text-gray-500">
                            Yasodara Devi Balika Vidyalaya , Gampaha

                        </p>
                        <p className="text-base text-xl mt-2 text-gray-500">
                            2017 - 2019

                        </p>
                    </div>

                </div>
                <a
                    href={cv}
                    download="Shashini-Hanshani-CV">
                    <div className="group mt-10 text-center text-blue-500 text-xl font-semibold">
                        Download Curriculum Vitae

                    </div>
                </a>


            </div>
        </div>
    );
};

export default About;
