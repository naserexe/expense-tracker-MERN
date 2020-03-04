const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
// eslint-disable-next-line
const colors = require('colors');
// eslint-disable-next-line
const morgan = require('morgan');

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Database
connectDB();

const transactions = require('./routes/transactions');


const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold),
);
