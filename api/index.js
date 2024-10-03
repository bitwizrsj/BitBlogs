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

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });



const app = express();

app.use(express.json());
app.use(cookieParser());



app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Server Start
const PORT = process.env.PORT || 3008; // Use 3008 or any other available port for backend
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
