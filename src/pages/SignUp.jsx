import React from "react";

const SignUp = () => {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p>Crea tu cuenta llenando el formulario</p>

            <div className="mt-10 rounded-3xl bg-white px-5 py-10 shadow-xl">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-slate-800">
                            Nombre:
                        </label>
                        <input
                            id="name"
                            type="text"
                            // className="mt-2 w-full rounded-3xl bg-gray-100 p-4"
                            class="mt-2 w-full rounded-3xl border border-slate-300 bg-white p-4 text-slate-400 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            name="name"
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-slate-800">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            // className="mt-2 w-full rounded-3xl bg-gray-100 p-4"
                            class="mt-2 w-full rounded-3xl border border-slate-300 bg-white p-4 text-slate-400 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            name="email"
                            placeholder="Ingresa tu email"
                        />
                        {/* <input
                            type="email"
                            name="email"
                            class="mt-2 w-full rounded-3xl border border-slate-300 bg-white p-4 text-slate-400 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            placeholder="you@example.com"
                        /> */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-slate-800">
                            Contraseña:
                        </label>
                        <input
                            id="password"
                            type="password"
                            // className="mt-2 w-full rounded-3xl bg-gray-100 p-4"
                            class="mt-2 w-full rounded-3xl border border-slate-300 bg-white p-4 text-slate-400 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            name="password"
                            placeholder="Ingresa tu Contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password_confirmation"
                            className="text-slate-800"
                        >
                            Confirmar Contraseña:
                        </label>
                        <input
                            id="password_confirmation"
                            type="password"
                            // className="mt-2 w-full rounded-3xl bg-gray-100 p-4"
                            class="mt-2 w-full rounded-3xl border border-slate-300 bg-white p-4 text-slate-400 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            name="password_confirmation"
                            placeholder="Confirma tu Contraseña"
                        />
                        <input
                            type="submit"
                            value="Crear Cuenta"
                            className="mt-5 w-full cursor-pointer rounded-3xl bg-indigo-600 p-3 font-bold uppercase text-white hover:bg-indigo-800"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
