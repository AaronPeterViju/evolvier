const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/api/test', (req, res) => {
  res.json(articles);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const articles =[
  {
    id: 1,
    title: "Getting Started with Express.js",
    content: "Express.js is  minimal and flexible Node.js web application framework that provides a robust set of features for web applications."
  },
    {
    id: 2,
    title: "GET",
    content: "Test GET."
  },  {
    id: 3,
    title: "POST",
    content: "Test POST."
  }
];