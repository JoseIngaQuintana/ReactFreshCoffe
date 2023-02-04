import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

import BackgroundAuth from "../assets/img/BackgroundAuth.jpeg";

const AuthLayout = () => {
    return (
        <main className="flex h-screen w-screen flex-col bg-[url('/src/assets/img/BackgroundAuth.jpeg')] md:flex-row">
            <img src={Logo} alt="Logo" className="w-2/4" />
            <div className="flex w-2/4 flex-col items-center md:flex-row">
                <div className="w-full p-10">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;
