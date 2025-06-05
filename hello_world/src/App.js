import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import HomePage from './HomePage';
import Blog from './components/Blog';
 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
           <Routes>
             <Route path="/form" element={<Form />} />
             <Route path="/" element={<HomePage />} />
             <Route path="/blog" element={<Blog />} />
           </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;