import React, { useEffect, useState } from "react";
import {getAllUsers, deleteUser} from '../api/api.js';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const handleDelete = async (e) => {
        try {
            await deleteUser(e.target.id);
            window.location.reload()
        } catch (e) {
            console.log(e);
        }
    }

    const setAllUsers = () => {
        setTimeout(async () => {
            const allUsers = await getAllUsers();
            setUsers(allUsers.data);
        }, 0);
    }

    useEffect(() => {
        setAllUsers();
    }, [])

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-center items-center flex-col w-full my-5 text-white">
                        <h1 className="text-3xl sm:text-5xl text-white py-1">
                            Users:
                        </h1>
                        <table className="w-full justify-center text-center mt-2 p-2 border-[1px] border-[#3d4f7c] rounded-full">
                            <tr className="border-[1px] border-[#3d4f7c]">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {users.map(user =>
                                <tr className="border-[1px] border-[#3d4f7c]">
                                    <td className="border-[1px] border-[#3d4f7c]">{users.indexOf(user)}</td>
                                    <td className="border-[1px] border-[#3d4f7c]">{user.name + " " + user.lastname}</td>
                                    <td className="border-[1px] border-[#3d4f7c]">{user.email}</td>
                                    <td className="border-[1px] border-[#3d4f7c]">{user.role}</td>
                                    <td className="border-[1px] border-[#3d4f7c] text-green-500 font-bold cursor-pointer"><a href={'/authors/' + user._id}>EDIT</a></td>
                                    <td id={user._id} onClick={handleDelete} className="border-[1px] border-[#3d4f7c] cursor-pointer font-bold text-red-600">DELETE</td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserList;

