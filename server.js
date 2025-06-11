const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());

// Load local JSON
const syllabusData = require('./syllabus.json');

// Routes
app.get('/api/syllabus', (req, res) => {
  res.json(syllabusData);
});

app.get('/', (req, res) => {
  res.send("📚 Digital Library API is running!");
});

// Use Render-assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
