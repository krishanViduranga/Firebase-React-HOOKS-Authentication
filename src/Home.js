import React from "react";
import "./App.css";

const Home = ({ handleLogout }) => {
  return (
    <section className="home">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Home;
