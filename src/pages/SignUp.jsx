import React from "react";

const SignUp = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-4xl font-bold text-white">
                    Crea tu Cuenta
                </h1>
                <p className="text-slate-300">
                    Crea tu cuenta llenando el formulario
                </p>
            </div>

            <div className="mt-3 max-w-xl rounded-3xl bg-transparent px-10 py-5">
                <form className="flex flex-col gap-8">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="font-semibold text-white"
                        >
                            Nombre:
                        </label>
                        <input
                            id="name"
                            type="text"
                            class="mt-2 w-full border-b-2 border-white bg-transparent p-4 text-white placeholder-white focus:border-b-yellow-100 focus:outline-none"
                            name="name"
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="font-semibold text-white"
                        >
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            class="mt-2 w-full border-b-2 border-white bg-transparent p-4 text-white placeholder-white focus:border-b-yellow-100 focus:outline-none"
                            name="email"
                            placeholder="Ingresa tu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="font-semibold text-white"
                        >
                            Contraseña:
                        </label>
                        <input
                            id="password"
                            type="password"
                            class="mt-2 w-full border-b-2 border-white bg-transparent p-4 text-white placeholder-white focus:border-b-yellow-100 focus:outline-none"
                            name="password"
                            placeholder="Ingresa tu Contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password_confirmation"
                            className="font-semibold text-white"
                        >
                            Confirmar Contraseña:
                        </label>
                        <input
                            id="password_confirmation"
                            type="password"
                            class="mt-2 w-full border-b-2 border-white bg-transparent p-4 text-white placeholder-white focus:border-b-yellow-100 focus:outline-none"
                            name="password_confirmation"
                            placeholder="Confirma tu Contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="submit"
                            value="Crear Cuenta"
                            className="mt-5 w-full cursor-pointer rounded-3xl bg-yellow-900 p-3 font-bold uppercase text-white hover:bg-black"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
