import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './assets/css/main.css'
import './assets/css/service.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Cotton from './pages/Cotton';
import Fiber from './pages/Fiber';
import Contactus from './pages/Contactus';
import Products from './pages/products';
import ScrollToTop from './ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cotton" element={<Cotton />} />
        <Route path="/fiber" element={<Fiber />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
