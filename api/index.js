const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const postRoutes = require('./routes/post.route.js') ;
const cookieParser = require('cookie-parser');
const commentRoutes = require('./routes/comment.route.js') ;
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB is connected.');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

app.use(cookieParser());

// Enable CORS for all origins (you can restrict it to specific origins if needed)
app.use(cors());

// You can also specify a more restrictive CORS policy
// app.use(cors({ origin: 'http://localhost:5175', credentials: true }));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Catch-all route to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Server Start
const PORT = process.env.PORT || 3008; // Use 3008 or any other available port for backend
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
