// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Sample POST route
app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

app.get('/youtube', (req, res)=>{
    res.send('chai and express');
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
