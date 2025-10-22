💰 Expense Tracker
A full-stack Expense Tracker Web Application designed to help users track their daily income and expenses with ease. Built as part of the Internet and Web Programming Lab (ICT-4108) course at Mawlana Bhashani Science and Technology University (MBSTU).

🧠 Overview
The Expense Tracker allows users to:
Record income and expenses with descriptions and categories
View transaction summaries in a clear dashboard
Keep data secure through JWT-based authentication
Manage categories and view financial insights easily

🚀 Features
User registration and login with JWT authentication
Real-time transaction updates (no full page reload)
Dynamic dashboard showing total income, expenses, and balance
Secure backend with proper validation and routing
Custom category creation
Responsive UI for desktop and mobile

🏗️ System Architecture
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB with Mongoose ORM
Authentication: JSON Web Token (JWT)
Environment Management: dotenv
Security: bcrypt, CORS

⚙️ Installation
Clone the repository
bash
git clone https://github.com/yourusername/expense-tracker-mern.git
cd expense-tracker-mern

Install dependencies for both frontend and backend
bash
npm install
cd client
npm install
cd ..

Create a .env file in the root folder and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run the server:
bash
npm run dev
Your app should now run at http://localhost:5000.

🌐 Live Demo
You can explore the live version of the application here:
https://expanse-tracker-mern-1.onrender.com/

🧩 Technologies Used
Layer	Technologies
Frontend	React.js, Axios, HTML5, CSS3
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Authentication	JWT Tokens
Utilities	dotenv, bcrypt, CORS


🧭 Future Enhancements
Add AI-based spending prediction
Budget suggestion feature
Export reports as PDF/Excel
Dark/Light theme toggle

👨‍💻 Developer
Md. Jabir Hossen Nayan
Dept. of ICT, Mawlana Bhashani Science and Technology University (MBSTU)

Supervisor: Md. Anowar Kabir, Lecturer, Dept. of ICT
