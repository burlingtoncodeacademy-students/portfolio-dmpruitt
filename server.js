const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));

// UNTESTED // serves up the resume file
app.get("/resume", (req, res) => {
  res.sendFile(__dirname + "/api/resume.pdf");
});

// serves up the json of the work history
app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/api/workhistory.json");
});

// for serving up the main page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
