import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from "./components/Contact";
import Error from "./components/Error";
import Quiz from "./components/Quiz";
import Homee from "./components/Homee";
import Course from "./components/Course.js";
import Quote from "./components/Quote.js";
//import Home from "./components/Home";
function App(){
  return(
    <BrowserRouter>
    <nav style={{ padding: 10, background: 'burlywood' }}>
        <Link to="/" style={{ margin: 10 }}>Home</Link>
        <Link to="/Course" style={{ margin: 10 }}>Courses</Link>
        <Link to="/Quote" style={{ margin: 10 }}>Quotes</Link>
        <Link to="/Quiz" style={{ margin: 10 }}>Quiz</Link>
        <Link to="/Contact" style={{ margin: 10 }}>Contact</Link>
      </nav>
   <Routes>
  <Route path="/" element={<Homee />} />
  <Route path="/Course" element={<Course />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/Quote" element={<Quote/>} />
   <Route path="/quiz" element={<Quiz />} />
   <Route path="*" element={<Error />} /> 
   </Routes>
   </BrowserRouter>
  );
}
export default App;
