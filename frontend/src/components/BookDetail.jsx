import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/allbooks/${id}`);
                // console.log(response);
                
                setBook(response.data.books[0]);
                
            } catch (err) {
                setError('Error fetching book details');
            }
        };

        fetchBookDetail();
        // console.log(fetchBookDetail);
        
    }, [id]);

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!book) {
        return <div className="alert alert-info">Loading book details...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Book Details</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <h5 className="card-subtitle mb-2 text-muted">{book.author}</h5>
                    <p className="card-text">
                        <strong>Genre:</strong> {book.genre}<br />
                        <strong>Availability:</strong> {book.availability_status}<br />
                        <strong>Added on:</strong> {new Date(book.created_at).toLocaleDateString()}<br />
                        {book.updated_at && <><strong>Last updated:</strong> {new Date(book.updated_at).toLocaleDateString()}</>}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
