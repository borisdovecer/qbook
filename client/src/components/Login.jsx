import React, { useState } from "react";
import { login } from '../api/api.js';

const Login = () => {
    const  [ username, setUsername ] = useState('');
    const  [ password, setPassword ] = useState();
    const  [ message, setMessage ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const log = await login(username, password);
            if (!log) {
                setMessage('Incorect username or password');
            } else {
                window.location.href='/';
            }
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
                            Login
                        </h1>
                    </div>
                    <div className="p-5 mt-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <input
                            placeholder="username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Login
                            </button>
                        <p className="text-white">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
