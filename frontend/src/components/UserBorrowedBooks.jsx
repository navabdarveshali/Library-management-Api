import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserBorrowedBooks = ({ userId }) => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBorrowedBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/borrows/user/${userId}`);
                setBorrowedBooks(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching borrowed books');
                setLoading(false);
            }
        };

        fetchBorrowedBooks();
    }, [userId]);

    if (loading) {
        return <div>Loading borrowed books...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Borrowed Books</h2>
            <ul className="list-group">
                {borrowedBooks.length === 0 ? (
                    <li className="list-group-item">No borrowed books found.</li>
                ) : (
                    borrowedBooks.map(book => (
                        <li className="list-group-item" key={book.id}>
                            <strong>{book.title}</strong> by {book.author} - Status: {book.availability_status}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default UserBorrowedBooks;
