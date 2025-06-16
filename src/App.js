import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import About from "./components/About"; 
import Contact from './components/Contact';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="font-sans">
        <Navbar />
          <Hero />
            <About />
              <Services />
            <Team />
          <Contact />
        <Footer />
    </div>
  );
}

export default App;