import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx'; 
import Header from './components/header/header.jsx'; 
import SalesSection from './components/slalesSection/salesSection.jsx'; 
import CategoriesSection from './components/categories/categories.jsx'; 
import Footer from './components/footer/footer.jsx'; 
import ProductDetails from './components/productDetail/productDetail.jsx'; 
import AllProducts from './components/allSaleProducts/allSaleProducts.jsx'; 
import CategoryProducts from './components/categoryProducts/categoryProducts.jsx'; 
import NotFound from './components/notFound/notfound.jsx'; 
import LoginPage from './components/login_register/login.jsx';
import RegisterPage from './components/login_register/register.jsx';
import ShopNow from './components/shopNow/shopNow.jsx';
import CartPage from './components/cart/cart.jsx'; 
import { CartProvider } from './components/context/cartContext.jsx'; 
import { AuthProvider } from './components/context/authContext.js';
import ProfilePage from './components/profile/profile.jsx';
import Contact from './components/contact/contact.jsx';

function App() {
  return (
    <AuthProvider>
      <CartProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <SalesSection />
                <CategoriesSection />
              </>
            } 
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/sales' element={<SalesSection/>}/>
          <Route path='/categories' element={<CategoriesSection/>}/>
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/shopNow" element={<ShopNow />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
