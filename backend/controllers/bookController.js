const bookModel = require('../models/bookModel');

// Fetch all books from a specific genre
const getBooksByGenre = async (req, res) => {
    const { genre} = req.params;

    try {
        const books = await bookModel.getBooksByGenre(genre);
        if (books.length === 0) {
            return res.status(404).json({ success: false, message: 'No books found in this genre.' });
        }
        res.json({ success: true, books });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching books by genre.', error: err.message });
    }
};

//getbook by id 
const getBooksById = async (req, res) => {
    const { id} = req.params;

    try {
        const books = await bookModel.getBooksById(id);
        if (books.length === 0) {
            return res.status(404).json({ success: false, message: 'No books is found.' });
        }
        res.json({ success: true, books });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching books.', error: err.message });
    }
};



// Add a new book to the library
const addBook = async (req, res) => {
    const { title, author, genre, available } = req.body;

    if (!title || !author || !genre || available === undefined) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const bookId = await bookModel.addBook(title, author, genre, available);
        res.status(201).json({ success: true, message: 'Book added successfully.', bookId });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error adding book.', error: err.message });
    }
};

// Update book details
const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, available } = req.body;

    if (!title || !author || !genre || available === undefined) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const updatedBook = await bookModel.updateBook(id, title, author, genre, available);
        if (!updatedBook) {
            return res.status(404).json({ success: false, message: 'Book not found.' });
        }
        res.json({ success: true, message: 'Book updated successfully.', updatedBook });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error updating book.', error: err.message });
    }
};

// Remove a book from the library
const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await bookModel.deleteBook(id);
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: 'Book not found.' });
        }
        res.json({ success: true, message: 'Book removed successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error removing book.', error: err.message });
    }
};


const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.allBooks(); // Call the allBooks function
        res.status(200).json({
            message: "Books fetched successfully",
            books: books
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching books", error: err });
    }
};


module.exports = {
    getBooksByGenre,
    addBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getBooksById
};
