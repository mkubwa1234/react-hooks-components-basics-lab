import React from "react";

function Navbar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar /> {/* Include Navbar as a child component */}
      <Home />   {/* Include Home as a child component */}
      <About />  {/* Include About as a child component */}
    </div>
  );
}

export default App;
