import About from './Components/AboutSection/AboutNeend.jsx';
import Albums from './Components/Albums/Albums.jsx';
import CenterText from './Components/Content/Content.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar';
import Coursel from '../src/Components/Reviewsection/coursel.jsx';

function App() {
  return (
    <>
      <Navbar />
      <CenterText />
      <Albums />
      <Coursel />
      <About />
      <Footer />
    </>
  );
}

export default App;
