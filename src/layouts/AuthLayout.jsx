import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const AuthLayout = () => {
    return (
        <main className="m-auto mt-10 flex max-w-4xl flex-col items-center md:mt-28 md:flex-row">
            <img src={Logo} alt="Logo" className="max-w-xs" />
            <div className="w-full p-10">
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout;
