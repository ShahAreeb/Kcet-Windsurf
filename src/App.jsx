import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Departments from './pages/Departments';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import './index.css';

// Lazy load 3D component to reduce LCP
const Hero3D = lazy(() => import('./components/Hero3D'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reduced from 1500ms to 500ms for faster LCP
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="loader mx-auto mb-4"></div>
          <p className="text-blue-400 font-semibold">Loading KCET...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-900">
      <div className="canvas-container">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      <Navigation />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
