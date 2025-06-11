import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import React from "react";
import { useState } from 'react';
import UserGreeting from "./components/UserGreeting";

function HomePage() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="blog-header">
          <h1>Welcome to Our Blog Platform</h1>
          <p>Share your thoughts, read interesting articles, and join our community</p>
        </div>
        <UserGreeting name={name} onNameChange={setName} />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;