import React, { useState } from "react";
import { register } from '../api/api.js';

const Register = () => {
    const  [ username, setUserame ] = useState('');
    const  [ name, setName ] = useState('');
    const  [ lastname, setLastname ] = useState('');
    const  [ email, setEmail ] = useState('');
    const  [ password, setPassword ] = useState('');
    const  [ role, setRole ] = useState('admin');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, name, lastname, email, password, role);
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-center items-start flex-col w-6/12 my-5 text-white">
                        <h1 className="text-3xl sm:text-5xl text-white py-1">
                            Register
                        </h1>
                    </div>
                    <div className="p-5 mt-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <input
                            placeholder="username"
                            type="text"
                            onChange={(e) => setUserame(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <input
                            placeholder="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <input
                            placeholder="lastName"
                            type="text"
                            onChange={(e) => setLastname(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <input
                            placeholder="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <select
                            name="role"
                            onChange={(e) => setRole(e.target.value)}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] bg-[#1e2641] hover:bg-[#3d4f7c] cursor-pointer"
                        >
                            <option name="role" value='admin'>Admin</option>
                            <option name="role" value='author'>Author</option>
                        </select>

                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Register
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
