import axios from 'axios';

export const getAllUsers = async () => {
    try{
        const response = await axios.get('http://localhost:8080/users', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getUser = async () => {
    try{
        const response = await axios.get('http://localhost:8080/user', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getUserById = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8080/users/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const updateUser = async (id, name, lastname, email, role) => {
    try{
        const response = await axios.post(`http://localhost:8080/update-user/${id}`, { name, lastname, email, role }, { withCredentials: true }  );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const deleteUser = async (id) => {
    try{
        const response = await axios.post(`http://localhost:8080/delete-user/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getAllBooks = async () => {
    try{
        const response = await axios.get('http://localhost:8080/books', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getBooksByAuthor = async () => {
    try{
        const response = await axios.get('http://localhost:8080/books-by-author', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const createBook = async (title, description, author) => {
    try{
        const response = await axios.post('http://localhost:8080/create-book', { title, description, author }, { withCredentials: true }  );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const updateBook = async (id, title, description) => {
    try{
        const response = await axios.post('http://localhost:8080/update-book', { id, title, description }, { withCredentials: true }  );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const deleteBook = async (id) => {
    try{
        const response = await axios.post(`http://localhost:8080/delete-book/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getBookById = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8080/books/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const login = async (username, password) => {
    try{
        const response = await axios.post('http://localhost:8080/auth/login', { username, password }, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const logout = async () => {
    try{
        const response = await axios.get('http://localhost:8080/logout', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const register = async (username, name, lastname, email, password, role) => {
    try{
        const response = await axios.post('http://localhost:8080/register', { username, name, lastname, email, password, role }, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}
