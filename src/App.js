import { useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className='loading'>
          <GridLoader color='#7272f0' loading={loading} size={15} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
