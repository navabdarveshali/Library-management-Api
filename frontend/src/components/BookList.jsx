import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BooksList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/books/allbooks');
                setBooks(response.data.books);
            } catch (err) {
                setError('Error fetching books');
            }
        };

        fetchBooks();
    }, []);

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Available Books</h2>
            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <div className="row">
                    {books.map((book) => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                                    <p className="card-text">
                                        <strong>Genre:</strong> {book.genre}<br />
                                        <strong>Availability:</strong> {book.availability_status}
                                    </p>
                                    <Link to={`/books/${book.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BooksList;
