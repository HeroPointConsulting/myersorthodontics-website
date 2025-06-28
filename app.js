// app.js
import express from 'express';        // if "type": "module" in package.json
// const express = require('express'); // ← old CommonJS style

const app = express();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────────────────────
// 1) Middleware section
app.use(express.json());              // parse JSON bodies
app.use(express.static('public'));    // serve files from /public

// 2) Routes section
app.get('/', (req, res) => {
  res.send('Hello, world! 🥳');
});

app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// 3) Start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});