import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

function Blog() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'First Post', content: 'This is the first post.', show: true},
        { id: 2, title: 'Second Post', content: 'This is the Second post.', show: false},
        { id: 3, title: 'Third Post', content: 'This is the Third post.', show: true}       
    ]);

    const togleContent = (id) => {
        const updatedPosts = posts.map(post => post.id === id ? { ...post, show: !post.show } : post);
    setPosts(updatedPosts);
    };

    const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id); // <-- corrected here
    setPosts(updatedPosts); // <-- now this matches
    };


  return (
    <div className="App">
          <Header />
      <main className="main-content">
        <div>
            <h2>Blog Posts</h2>
            {posts.map(post => (
                <div key={post.id} style={{ marginBottom: '20'}}>
                    <h3>{post.title}</h3>
                    <button onClick={() => deletePost(post.id)} style={{marginLeft: '10px',color:'red'}}>
                        Delete
                    </button>
                    {post.show && <p>{post.content}</p>}
                    </div>
            ))}
            {posts.lenth === 0 && <p>No posts avilable</p>}
        </div>
      </main>
          <Footer />
         </div>
       );
     }

     export default Blog;
