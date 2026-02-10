import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Product from './pages/Product';
import Navbar2 from './components/layout/Navbar2';
import ScrollToTop from './utils/ScrollToTop';
import WhatsAppButton from './utils/WhatsAppButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Products />
                <WhyChooseUs />
                <Gallery />
                <Contact />
                <Footer />
              </>
            } />

            <Route path="/products" element={
              <>
              <Navbar2/>
              <div className="h-16" /> {/* Navbar ke height ke barabar spacer */}
                <Product />
                <Footer />
              </>
            } />
          </Routes>
          <WhatsAppButton />
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;