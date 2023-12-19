import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import Hero from './pages/Hero';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
  <BrowserRouter>
  <h>Header</h>
  <Link to="/products">Products</Link>
  <Link to="/about">About Us</Link>
  <Link to="/contact">Contact Us</Link>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
