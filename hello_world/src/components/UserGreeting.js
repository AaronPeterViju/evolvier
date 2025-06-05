import React from "react";

const UserGreeting = ({ name, onNameChange }) => {
  return (
    <main className="main-content">
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <h1>Hello, {name || "Guest"}!</h1>
    </div>
    </main>
  );
};

export default UserGreeting;
