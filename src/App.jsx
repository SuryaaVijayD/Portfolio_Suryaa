import React, { useState, useEffect } from "react";
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import NavBar from './Components/Navbar/Navbar';
import Project from './Components/Projects/Project';
import Email from "./Components/EmailSection/Email";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="loader">
          <div className="spinner"></div>
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black'>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Email />
      <Contact />
    </div>
  );
}

export default App;
