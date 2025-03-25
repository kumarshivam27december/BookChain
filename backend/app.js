const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Route files
// const books = require('./routes/books');
// const auth = require('./routes/auth');
// const messages = require('./routes/messages');

// Mount routers
// app.use('/api/v1/books', books);
// app.use('/api/v1/auth', auth);
// app.use('/api/v1/messages', messages);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

module.exports = app;
