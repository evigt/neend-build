
import React, {  Suspense } from 'react'
import About from "./Components/AboutSection/AboutNeend.jsx";
import Albums from "./Components/Albums/Albums.jsx";
import CenterText from "./Components/Content/Content.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar";
import Coursel from "../src/Components/Reviewsection/coursel.jsx";
import './i18n'

function App() {
  return (
     <>
     <Suspense fallback={null}>
          <Navbar/>
      <CenterText/>
      <Albums/>
    <Coursel/>
      <About/>
      <Footer/>
      </Suspense>
      

     </>
  );
}

export default App;
