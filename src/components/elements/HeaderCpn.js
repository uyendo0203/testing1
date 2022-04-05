import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import NavLink from './NavLink';
import { navLinks } from './navLinks';

const HeaderCpn = ({ isHomepage }) => {
    const [active, setActive] = useState(false)
    const [isFixed, setFixed] = useState(false)
    const [classHeader, setClassHeader] = useState('')
    const toggleMenu = () => {
        setActive(!active)
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector(".header");
        const scrollTop = window.scrollY;
        if (scrollTop >= 250) {
            header.classList.add("is-sticky")
            setFixed(true)
        } else {
            header.classList.remove("is-sticky");
            setFixed(false)
        }
    };

    useEffect(() => {
        // console.log(isHomepage, isFixed);                                    
        if (isHomepage === false && isFixed === true) {
            setClassHeader('bg-[#ffffffed] border-fic-black border-b')
        }
        else if (isHomepage === true && isFixed === true) {
            setClassHeader('bg-[#727b7ad1]')
        } else {
            setClassHeader('bg-[transparend]')
        }
    }, [isHomepage, isFixed])

    return (
        <header className={` 
            header 
            flex 
            w-full lg:w-[calc(100%-90px)] 
            mx-auto py-[1rem] md:py-[1.563rem] md:px-[1.25rem] px-[0.75rem] 
            z-10 border-b
            ${classHeader} 
            ${isHomepage ? 'absolute top-[0] left-[50%] -translate-x-[50%] text-fic-white border-fic-white' : 'text-fic-black border-fic-black'} 
            `}>
            <h1 className={`  
                ${isHomepage ? 'text-fic-white' : 'text-fic-black'} 
                logo text-[20px] md:text-[32px] flex items-center font-RanuaTrialsMedium`}>
                <Link href='/'>
                    <a>Fiction</a>
                </Link>
            </h1>
            <div className={`menu flex justify-end items-center w-full`}>
                <ul className={`${active === true ? 'menu-active' : 'hidden'} md:flex justify-between flex-1 md:flex-none items-center`}>
                    {navLinks.map(({ navLinkId, scrollToId, navLinkText, navLinkRoute }, idx) => (
                        <NavLink isHomepage={isHomepage} key={idx} navLinkId={navLinkId} navLinkText={navLinkText} navLinkRoute={navLinkRoute} scrollToId={scrollToId} />
                    ))}
                </ul>
                <Link href="/booking">
                    <a className='
                    flex items-center justify-center
                    px-[15px] 
                    text-[1.25rem] 
                    min-h-[2.5rem] md:min-w-[195px] md:min-h-[3.375rem] 
                    md:px-[20px] py-[5px] md:py-0 
                    rounded-[27px] 
                    text-fic-white hover:text-fic-white 
                    bg-green-dark hover:bg-green-dark-hover'>Make a reservation</a>
                </Link>
                <div onClick={() => toggleMenu()} className={`${active === true ? 'active' : ''} md:hidden strip burger-strip-2 flex flex-col justify-center ml-2`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
};
export default HeaderCpn;