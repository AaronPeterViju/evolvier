import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/test');
      setArticles(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Error fetching articles: ' + err.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/articles', {
        title,
        content,
        author
      });
      
      setArticles([response.data, ...articles]);
      
      setTitle('');
      setContent('');
      setAuthor('');
      
    } catch (err) {
      console.error('Error submitting article:', err);
      setError('Error submitting article: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/articles/${id}`);
      setArticles(articles.filter(article => article._id !== id));
    } catch (err) {
      console.error('Error deleting article:', err);
      setError('Error deleting article: ' + err.message);
    }
  };

  if (loading) return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div>Loading...</div>
      </main>
      <Footer />
    </div>
  );

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
        
        {/* Article Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', minHeight: '100px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <button 
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>

        {/* Articles List */}
        <div>
          <h2>Published Articles</h2>
          {articles.map(article => (
            <div 
              key={article._id} 
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px'
              }}
            >
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <div style={{ color: '#666', fontSize: '0.9em' }}>
                <span>By: {article.author}</span>
                <span style={{ marginLeft: '15px' }}>
                  {new Date(article.date).toLocaleDateString()}
                </span>
              </div>
              <button
                onClick={() => handleDelete(article._id)}
                style={{
                  marginTop: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          ))}
          {articles.length === 0 && <p>No articles available</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Form;