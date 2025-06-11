// server.js
const express = require("express");
const cors    = require("cors");
const app     = express();
const PORT    = process.env.PORT || 5000;

app.use(cors());

const syllabusData = require("./syllabus.json");

app.get("/api/syllabus/:branch/:year/:sem", (req, res) => {
  const { branch } = req.params;
  const year = req.params.year.replace(/\D/g, ""); // "year1" → "1"
  const sem  = req.params.sem .replace(/\D/g, ""); // "sem1"  → "1"

  const subjects = syllabusData?.[branch]?.[year]?.[sem] || [];

  if (!subjects.length) {
    return res.status(404).json({ error: "No subjects found for that path" });
  }
  res.json(subjects);
});

app.get("/", (_, res) =>
  res.send("📚 Digital-Library API up — try /api/syllabus/cse/year1/sem1")
);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
