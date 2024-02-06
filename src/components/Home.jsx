import React from 'react'
import shash_Image from '../assets/shash_Image.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import NavBar from './NavBar';
import SocialLinks from './SocialLinks';

const Home = () => {
    const [text] = useTypewriter({
        words: [' Software Developer', ' Designer', ' Documentarian'],
        loop: {},
    })
    return (
        <div
            name="home"
            className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
                <SocialLinks />
                <div className="flex flex-col justify-center h-full w-full md:w-3/4">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white">
                        Hi, I'm Shashini Hanshani
                    </h2>
                    {/* <p className="text-2xl sm:text-2xl text-white">
                        Software Engineering Undergraduate
                    </p> */}
                    <br />
                    <h4 className="text-2xl sm:text-5xl   text-white">
                        I'm a
                        <span className="text-2xl sm:text-5xl   text-blue-300">{text}</span>
                        <Cursor />
                    </h4>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am committed to crafting inventive solutions in Web and Mobile Development
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white flex items-center rounded-md bg-gradient-to-r cursor-pointer"
                        >
                            Download CV
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='w-1/4 flex items-center justify-center px-12'>
                    <img
                        src={shash_Image}
                        alt="my profile"
                        className="rounded-2xl h-25 w-25 mx-auto"  // Adjusted image size
                    />
                </div>
            </div>

        </div>
    )
}

export default Home