import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// Removed import of About
/* Removed Signup import */
// import Signup from './Pages/Signup';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import Cart from './Pages/Cart';
import Footer from './components/Footer';
import { UserProvider } from './Pages/UserContext'; // Import UserProvider
import { CartProvider } from './Pages/CartContext'; // Import CartProvider

function ComponentWithTopMargin({ children }) {
  return (
    <div style={{ marginTop: '50px' }}> {/* Adjust the margin top based on the height of your fixed header */}
      {children}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <ComponentWithTopMargin></ComponentWithTopMargin>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Removed /about route */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            {/* Removed Signup route */}
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
