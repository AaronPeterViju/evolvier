import { useState } from "react";

function MainContent() {
   const [count, setCount] = useState(0); 
    return (
        <main className="main-content">
            <h2>Hello World</h2>
            <p>This is a React App</p>
            <div className="content-section">
                <h1>Count: {count}</h1>
                <button className="btn" onClick={() => setCount(count - 1)}>
                Decrement
                </button>
                <button className="btn" onClick={() => setCount(count + 1)}>
                Increment
                </button>
            </div>
        </main>
    );
}

export default MainContent;