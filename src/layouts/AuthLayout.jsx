import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

import BackgroundAuth from "../assets/img/BackgroundAuth.jpeg";

const AuthLayout = () => {
    return (
        <main className="flex h-screen w-screen">
            <div className="flex w-2/4 bg-[url('/src/assets/img/bg-auth.png')] bg-cover bg-right-bottom bg-no-repeat">
                {/* <img src={Logo} alt="Logo" className="max-w-xs" /> */}
            </div>
            <div className="flex w-2/4 flex-col items-center justify-center bg-black">
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout;
