// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// Read the whole JSON once at startup
const syllabusData = require("./syllabus.json");

/**
 * GET /api/syllabus/:branch/:year/:sem
 * e.g. /api/syllabus/cse/year1/sem1
 */
app.get("/api/syllabus/:branch/:year/:sem", (req, res) => {
  const { branch, year, sem } = req.params;
  const subjects = syllabusData?.[branch]?.[year]?.[sem] || [];

  if (!subjects.length) {
    return res.status(404).json({ error: "No subjects found for that path" });
  }
  res.json(subjects);               // <-- only send the subjects array
  //console.log(`Sent ${subjects.length} subjects → ${branch}/${year}/${sem}`);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
