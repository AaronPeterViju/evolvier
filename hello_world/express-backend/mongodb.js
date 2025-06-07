const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


const mongoURI = 'mongodb+srv://aaronevolvier:aaron%40evolvier9599@cluster0.wmggkpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));


const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});
const Article = mongoose.model('Article', ArticleSchema);


app.get('/api/test', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

app.post('/api/articles', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const newArticle = new Article({ title, content });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create article' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
