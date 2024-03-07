import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menuitems } from './Menuitems.js';
import Typewriter from "typewriter-effect";
import peclogo from './cover_tpo-removebg-preview (1).png';

export function Headertailwind() {
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 pb-5">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
                <div className="flex items-center space-x-2 md:flex-1">
                    <img className="h-13 hidden md:block" src={peclogo} alt="peclogo" />
                    <div className="flex items-center">
                        <a href='/' className="flex items-center space-x-3 rtl:space-x">
                            <div className="text-4xl font-semibold whitespace-nowrap dark:text-white">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("ICDMT 2024")
                                            .pauseFor(1500)
                                            .start();
                                    }}
                                />
                            </div>
                        </a>
                    </div>
                    <img className="h-13 hidden md:block" src="https://d2lk14jtvqry1q.cloudfront.net/media/small_Indian_Institute_of_Technology_Roorkee_IIT_Roorkee_d3621c62ed_c263d74c1b_21b6a76f59.png" alt="iitrlogo" />
                </div>
                <button onClick={toggleMobileMenu} className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            
            <div className={`max-w-screen-xl mx-auto ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="font-large flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {Menuitems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className="block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
