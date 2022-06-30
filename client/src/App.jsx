import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer, Home, Login, Register, UserList, UserEdit, BookList, BookEdit } from "./components";

const App = () => {
    return (
        <div className="min-h-screen bg-[#0f0e13]">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exect path='/login' element={<Login />} />
                        <Route exect path='/register' element={<Register />} />
                        <Route exect path='/authors' element={<UserList />} />
                        <Route exect path='/authors/:id' element={<UserEdit />} />
                        <Route exect path='/books' element={<BookList />} />
                        <Route exect path='/books/:id' element={<BookEdit />} />

                    </Routes>
                </Router>
                <Footer />
            </div>
        </div>
    )
}

export default App
