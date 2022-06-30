import React, {useState,useEffect} from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import { getUser, logout } from "../api/api";
import logo from '../logo.svg';

const Navbar = () => {
    const [user, setUser] = useState({});
    const Navigation = [
        { title: "Home", link: '/' },
        { title: "Register", link: "/register"},
        user.role ? { title: user.role === 'admin' ? "Authors" : "Books", link: user.role === 'admin' ? "/authors" : "/books" } : {}
    ];

    const setUserData = () => {
        setTimeout(async () => {
            const usr = await getUser();
            setUser(usr);
        }, 0);
    }

    const handleLogout = async () => {
        try {
            await logout();
            window.location.href='/';
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        setUserData();
    },[])

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {Navigation.map((item, index) => (
                    <a href={item.link} key={index}><li className={`mx-4 cursor-pointer`}>{item.title}</li></a>
                ))}
                <li>
                    {!user.name ?
                        <a href='/login' className="text-white text-base font-semibold">
                            <button
                                type="button"
                                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                            >
                                <AiFillPlayCircle className="text-white mr-2" />
                                    login
                            </button>
                        </a>
                        :
                        <p onClick={handleLogout} className="text-white text-base font-semibold">
                           Logout ({user.name})
                        </p>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
