import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateUser, getUserById } from '../api/api.js';

const UserEdit = () => {
    let { id } = useParams();
    const [message, setMessage] = useState('');
    const [name, setName] = useState();
    const [lastname, setlastname] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState(false);


    const handleUpdate = async () => {
        try {
            const response = await updateUser(id, name, lastname, email, role);
            setMessage(response.message);
        } catch (e) {
            console.log(e);
        }
    }

    const setUserData = () => {
        setTimeout(async () => {
            const usr = await getUserById(id);
            setName(usr.data[0].name);
            setlastname(usr.data[0].lastname);
            setEmail(usr.data[0].email);
            setRole(usr.data[0].role);
        }, 0);
    }

    useEffect(() => {
        setUserData();
    }, [])

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-center items-center flex-col w-full my-5 text-white">
                        <h1 className="text-3xl sm:text-5xl text-white py-1">
                            Edit User
                        </h1>
                        <div className="p-5 mt-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                            <input
                                placeholder='name'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                            />
                            <input
                                placeholder="lastname"
                                type="text"
                                value={lastname}
                                onChange={(e) => setlastname(e.target.value)}
                                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                            />
                            <input
                                placeholder="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                            />
                            <select
                                name="role"
                                onChange={(e) => setRole(e.target.value)}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] bg-[#1e2641] hover:bg-[#3d4f7c] cursor-pointer"
                            >
                                <option name="role" value={role}>{role}</option>
                                <option name="role" value='admin'>Admin</option>
                                <option name="role" value='author'>Author</option>
                            </select>
                            <div className="h-[1px] w-full bg-gray-400 my-2" />
                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Update
                            </button>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserEdit;

