import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import expressjs from '../assets/expressjs.png'
import node from '../assets/node.png'
import cplus from '../assets/cplus.png'
import java from '../assets/java.png'
import kotlin from '../assets/kotlin.png'
import firebase from '../assets/firebase.png'
import flutter from '../assets/flutter.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'

const Experience = () => {
    const tools = [

        {
            id: 1,
            src: html,
            name: "HTML",
        },
        {
            id: 2,
            src: css,
            name: "CSS",
        },
        {
            id: 3,
            src: js,
            name: "JAVASCRIPT",
        },
        {
            id: 4,
            src: react,
            name: "REACT",
        },
        {
            id: 5,
            src: tailwind,
            name: "TAILWIND CSS",
        },
        {
            id: 6,
            src: mongodb,
            name: "MONGODB",
        },
        {
            id: 7,
            src: expressjs,
            name: "EXPRESS JS",
        },
        {
            id: 8,
            src: node,
            name: "NODE JS",
        },
        {
            id: 9,
            src: cplus,
            name: "C++",
        },
        {
            id: 10,
            src: java,
            name: "JAVA",
        },
        {
            id: 11,
            src: kotlin,
            name: "KOTLIN",
        },
        {
            id: 12,
            src: flutter,
            name: "FLUTTER",
        },
        {
            id: 13,
            src: firebase,
            name: "FIREBASE",
        },
        {
            id: 14,
            src: github,
            name: "GITHUB",
        },
        {
            id: 15,
            src: mysql,
            name: "MYSQL",
        },
    ];
    return (
        <div
            name="experience"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-xl  border-b-2 border-gray-500">
                        02. Experience
                    </p>
                </div>
                <div className="grid sm:grid-cols-5 md:grid-cols-5 gap-4 px-2 py-2 sm:px-8 mt-10">
                    {tools.map(({ id, src, name }) => (
                        <div key={id} className="flex flex-col items-center justify-center shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt={name}
                                className="rounded-md items-center h-20 w-20 mb-2 duration-200 hover:scale-105"
                            />
                            <p className="text-center py-2">{name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience