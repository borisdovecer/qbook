const ObjectId = require('mongodb').ObjectId;
const BookModel = require('../models/bookModel.js');

const getBooks = async (req, res) => {
    try {
        const response = await BookModel.find({}).sort({ author: 1 });
        res.send({ data: response })
    } catch (e) {
        console.log(e);
    }
};

const getBooksByAuthor = async (req, res) => {
    try {
        const response = await BookModel.find({ username: req.user.username });
        res.send({ data: response })
    } catch (e) {
        console.log(e);
    }
};

const getBooksById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await BookModel.find({ _id: id });
        res.send({ data: response, user: req.user })
    } catch (e) {
        console.log(e);
    }
};

const createBook = async (req, res) => {
    const { title, description, author } = req.body;
    try {
        const book = new BookModel({title, description, author})
        await book.save()
        res.send({ message: 'ok' })
    } catch (e) {
        console.log(e);
    }
};

const updateBook = async (req, res) => {
    const { id, title, description } = req.body;
    try {
        let find = { _id: new ObjectId(id) };
        const set = { title, description };

        await BookModel.updateOne(find,  set, { upsert: true }  , data => res.send({message: 'updated'})).clone()
    } catch (e) {
        console.log(e);
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        await BookModel.deleteOne({ _id: id });
        res.send({ message: 'deleted' })
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getBooks,
    getBooksByAuthor,
    getBooksById,
    createBook,
    updateBook,
    deleteBook
}
