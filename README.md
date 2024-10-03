
# Assignment

This repository contains the code and documentation for the **Library Management System** assignment. The system is built using **Node.js**, **Express.js**, **React.js**, and **MySQL** to manage books, users, and borrowing/returning actions efficiently.

## Features

- User Registration and Login with secure authentication
- Manage Books: Add, Update, Delete, and View details
- Manage Users: Add, Update, Delete, and View user details
- Borrow and Return functionality with late fee calculation
- Email notifications for overdue books
- Secure data storage using MySQL

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Bootstrap
- **Database**: MySQL
- **Validation**: Zod
- **Notifications**: Nodemailer

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/navabdarveshali/Assignment.git
   \`\`\`

2. Install backend dependencies:

   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. Install frontend dependencies:

   \`\`\`bash
   cd frontend
   npm install
   \`\`\`

4. Configure environment variables for email service, database credentials, and other necessary settings.

## Database Setup

1. Create a MySQL database:

   \`\`\`sql
   CREATE DATABASE library_management;
   \`\`\`

2. Import the schema from `schema.sql` to set up the database tables.

3. Update the database connection settings in the backend.

## Running the Project

1. Start the backend server (runs on port 3000):

   \`\`\`bash
   cd backend
   npm start
   \`\`\`

2. Start the frontend server:

   \`\`\`bash
   cd frontend
   npm start
   \`\`\`

## API Endpoints

- **/users**: Manage user-related actions (register, login, etc.)
- **/books**: Manage book-related actions (add, update, delete, view)
- **/borrow**: Handle book borrowing and returning

## Future Enhancements

- Add search functionality for books and users
- Integrate a payment gateway for late fee payments
- Implement real-time notifications for book returns

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project.

## License

This project is licensed under the MIT License.
