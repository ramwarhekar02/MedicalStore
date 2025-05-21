import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/Home/HomePage.jsx';
import AboutPage from '../Pages/AboutPage.jsx';
import Contact from '../Pages/Contact.jsx';
import Products from '../Pages/Home/Products.jsx';
import UnderConstruction from '../Pages/UnderConstruction.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
