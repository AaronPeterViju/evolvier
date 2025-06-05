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
      <UserGreeting name={name} onNameChange={setName} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default HomePage;