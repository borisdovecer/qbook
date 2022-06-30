import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateBook, getBookById } from '../api/api.js';

const BookEdit = () => {
    let { id } = useParams();
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState();
    const [description, setDescription] = useState([]);

    const handleUpdate = async () => {
        try {
            const response = await updateBook(id, title, description);
            setMessage(response.message);
        } catch (e) {
            console.log(e);
        }
    }

    const setBookData = () => {
        setTimeout(async () => {
            const allBooks = await getBookById(id);
            setTitle(allBooks.data[0].title);
            setDescription(allBooks.data[0].description);
        }, 0);
    }

    useEffect(() => {
        setBookData();
    }, [])

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-center items-center flex-col w-full my-5 text-white">
                        <h1 className="text-3xl sm:text-5xl text-white py-1">
                            Books
                        </h1>
                        <div className="p-5 mt-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                            <input
                                placeholder='title'
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                            />
                            <input
                                placeholder="description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                            />
                            <div className="h-[1px] w-full bg-gray-400 my-2" />
                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Edit
                            </button>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookEdit;

