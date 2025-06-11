import { useState } from "react";
import { Link } from "react-router-dom";

function MainContent() {
   const [count, setCount] = useState(0); 
    return (
        <div className="content-section">
            <h2>Latest Blog Updates</h2>
            <p>Explore our latest articles and share your thoughts with our community.</p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link to="/blog" className="btn" style={{ textDecoration: 'none' }}>
                    Read Articles
                </Link>
                <Link to="/form" className="btn" style={{ textDecoration: 'none' }}>
                    Create New Post
                </Link>
            </div>
            
            <div className="content-section" style={{ marginTop: '2rem' }}>
                <h3>Simple Counter</h3>
                <p>Count: {count}</p>
                <button className="btn" onClick={() => setCount(count - 1)}>
                    Decrease
                </button>
                <button className="btn" onClick={() => setCount(count + 1)}>
                    Increase
                </button>
            </div>
        </div>
    );
}

export default MainContent;