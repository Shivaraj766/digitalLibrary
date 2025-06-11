const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Load syllabus data from local JSON file
const syllabusData = require('./syllabus.json');

// API route to send syllabus JSON
app.get('/api/syllabus', (req, res) => {
  res.json(syllabusData);
});

// Optional root route to confirm it's working
app.get('/', (req, res) => {
  res.send('📚 Digital Library API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
