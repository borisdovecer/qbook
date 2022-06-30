import React, { useState, useEffect } from "react";
import { getAllBooks } from '../api/api.js';

const Home = () => {
    const [books, setBooks] = useState([]);

    const setAllBooks = () => {
        setTimeout(async () => {
            const allBooks = await getAllBooks();
            setBooks(allBooks.data);
        }, 0);
    }

    useEffect(() => {
        setAllBooks();
    }, [])

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between mt-10 md:p-20 py-12 px-4">
                <div className="flex flex-1 text-white justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Books:
                    </h1>
                    <table className="w-full justify-center text-center mt-2 p-2 border-[1px] border-[#3d4f7c] rounded-full">
                        <tr className="border-[1px] border-[#3d4f7c]">
                            <th>#</th>
                            <th>Author</th>
                            <th>Title</th>
                        </tr>
                        {books.map(book =>
                            <tr className="border-[1px] border-[#3d4f7c]">
                                <td className="border-[1px] border-[#3d4f7c]">{books.indexOf(book)}</td>
                                <td className="border-[1px] border-[#3d4f7c]">{book.author}</td>
                                <td className="border-[1px] border-[#3d4f7c]">{book.title}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
