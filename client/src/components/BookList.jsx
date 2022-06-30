import React, { useEffect, useState } from "react";
import { createBook, deleteBook, getUser, getBooksByAuthor } from '../api/api.js';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState({});
    const [title, setTitle] = useState();
    const [description, setDescription] = useState([]);
    const [showCreate, setCreate] = useState(false);
    const [message, setMessage] = useState(false);

    const handleCreate = async () => {
        try {
            const response = await createBook(title,description, user.name);
            window.location.reload();
            setMessage(response.message);
        } catch (e) {
            console.log(e);
        }
    }

    const handleDelete = async (e) => {
        try {
            await deleteBook(e.target.id);
            window.location.reload()
        } catch (e) {
            console.log(e);
        }
    }

    const setBookData = () => {
        setTimeout(async () => {
            const allBooks = await getBooksByAuthor();
            const usr = await getUser();
            setBooks(allBooks.data);
            setUser(usr);
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
                        <table className="w-full justify-center text-center mt-2 p-2 border-[1px] border-[#3d4f7c] rounded-full">
                            <tr className="border-[1px] border-[#3d4f7c]">
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Author</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {books.map(book =>
                                <tr className="border-[1px] border-[#3d4f7c]">
                                    <td className="border-[1px] border-[#3d4f7c]">{books.indexOf(book)}</td>
                                    <td className="border-[1px] border-[#3d4f7c]">{book.title}</td>
                                    <td className="border-[1px] border-[#3d4f7c]">{book.description}</td>
                                    <td className="border-[1px] border-[#3d4f7c]">{book.author}</td>
                                    <td className="border-[1px] border-[#3d4f7c] text-green-500 font-bold cursor-pointer"><a href={'/books/' + book._id}>Edit</a></td>
                                    <td id={book._id} onClick={handleDelete} className="border-[1px] border-[#3d4f7c] cursor-pointer font-bold text-red-600">Delete</td>
                                </tr>
                            )}
                        </table>
                        <button
                            type="button"
                            onClick={(e) => setCreate(prevState => !prevState.valueOf())}
                            className="text-white w-6/12 mt-12 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                        >
                            {!showCreate ?
                                "Add Book"
                                :
                                "Cancel"
                            }
                        </button>
                        {!showCreate ?
                            <span></span>
                            :
                            <div className="p-5 mt-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                                <input
                                    placeholder="title"
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                                />
                                <input
                                    placeholder="description"
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                                />
                                <div className="h-[1px] w-full bg-gray-400 my-2" />
                                <button
                                    type="button"
                                    onClick={handleCreate}
                                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                                >
                                    Create
                                </button>
                                {message}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookList;

