import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [SubmittedData, setSubmitttedData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted:', {title, content});
    setSubmitttedData({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <div className="App">
          <Header />
      <main className="main-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {SubmittedData && (
          <div style={{ marginTop: '20px' }}>
            <h3>Submitted data:</h3>
            <p><strong>Title:</strong> {SubmittedData.title}</p>
            <p><strong>Content:</strong> {SubmittedData.content}</p>
          </div>
        )}
      </main>
          <Footer />
         </div>
       );
     }

     export default Form;
