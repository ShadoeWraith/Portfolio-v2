import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
