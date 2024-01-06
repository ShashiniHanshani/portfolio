import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const link = [
        {
            id: 1,
            link: "about",
        },
        {
            id: 2,
            link: "Experience",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "contact",
        }
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
            <ul className='hidden md:flex'>
                {link.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 
                    hover:scale-105 duration-200'>
                        {link}
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {link.map(({ id, link }) => (
                        <NavLinks
                            key={id}
                            link={link}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            onClick={() => setNav(!nav)}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar