"use client";
import { Toggle } from "keep-react";
import Logo from "../assets/Iconos/Logo.svg"
import Lápiz from "../assets/Iconos/Edit_duotone.svg"
import { useState, useEffect } from "react";
import SwitchComponent from "./ui/SwitchComponent";

function Header() {

    const [theme, setTheme] = useState(() => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    });

    useEffect(() => {
        document.querySelector('html').classList.toggle('dark', theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };



    return (
        <>
            <header className="flex  flex-col justify-center items-center py-10 dark:bg-black dark:text-white">
                <div className="flex flex-row gap-8" >
                    <img src={Logo} alt="Logo" />
                    <h1 className=" text-5xl font-medium">My Task Board</h1>
                    <img src={Lápiz} alt="Lápiz" />
                </div>
                <p className=" text-left text-2xl font-light py-4 dark:text-white">Tasks to keep organized</p>
                <div>
                    <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} onClick={handleChangeTheme} />
                    
                </div>
            </header>
        </>
    );
}

export default Header;




