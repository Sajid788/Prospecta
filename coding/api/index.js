const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./productRoutes');

const app = express();
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// API routes
app.use('/api', productRoutes);

// Export the app for Vercel
module.exports = app;
