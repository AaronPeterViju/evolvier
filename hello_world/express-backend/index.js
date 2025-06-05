const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the test route!' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
