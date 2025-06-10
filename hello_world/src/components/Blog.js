import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

function Blog() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'First Post', content: 'This is the first post.', show: true},
        { id: 2, title: 'Second Post', content: 'This is the Second post.', show: false},
        { id: 3, title: 'Third Post', content: 'This is the Third post.', show: true}       
    ]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleContent, setVisibleContent] = useState({});   

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/test');
            setArticles(response.data);
            const initialVisibleContent = {};
            response.data.forEach(article => {
                initialVisibleContent[article._id] = false;
            });
            setVisibleContent(initialVisibleContent);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching articles:', err);
            setError('Error fetching articles: ' + err.message);
            setLoading(false);
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

    const toggleContent = (id) => {
        setVisibleContent(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
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

                <div>
                    <h2>Blog Posts</h2>
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
                            <div style={{ marginBottom: '10px' }}>
                                <button
                                    onClick={() => toggleContent(article._id)}
                                    style={{
                                        padding: '5px 10px',
                                        marginRight: '20px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {visibleContent[article._id] ? 'Hide' : 'Show'} Content
                                </button>
                            
                            <button
                                onClick={() => handleDelete(article._id)}
                                style={{
                                    marginTop: '10px',
                                    padding: '5px 10px',
                                    marginLeft: '20px',
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
                {
                    visibleContent[article._id] && (
                        <div>
                            <p>{article.content}</p>
                            <div style={{ color: '#666', fontSize: '0.9em' }}>
                                <span>By: {article.author}</span>
                                <span style={{ marginLeft: '15px' }}>
                                    {new Date(article.date).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    )
                }
                </div>
                    ))}
                    {articles.length === 0 && <p>No articles available</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Blog;
