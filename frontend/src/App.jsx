import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UpdateProfile from './components/UpdateProfile';
import BooksList from './components/BookList';
import BookDetail from './components/BookDetail';
import Logout from './components/Logout';
import UserBorrowedBooks from "./components/UserBorrowedBooks";

const App = () => {
    const loggedInUserId = 1; 
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/update-profile" element={<UpdateProfile />} />
                    <Route path="/" element={<BooksList />} /> {/* Default route */}
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/borrowed-books" element={<UserBorrowedBooks userId={loggedInUserId} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
