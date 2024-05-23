import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store  from './pages/store';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Purchased } from './pages/buyproduct/purchased';
import { PublicRoute, PrivateRoute } from './pages/routing';
import { Signup } from './pages/signup';
import { Login } from './pages/login';
import { About } from './pages/about';
import Slider from 'react-slick';

function App() {
  return (
    
      <div className="App">
        <Provider store={store}>
        <Router>
          <Navbar />
          <div className="card-image">
           
            <Routes>
              <Route exact path="/about" element={<PublicRoute Component={About} />} />
              <Route path="/signup" element={<PublicRoute Component={Signup} />} />
              <Route path="/login" element={<PublicRoute Component={Login} />} />
              <Route exact path="/" element={<PrivateRoute Component={Shop } />} />
              <Route path="/cart" element={<PrivateRoute Component={Cart} />} />
              <Route path="/purchased" element={<PrivateRoute Component={Purchased} />} />
            </Routes>
          </div>
          
          <Footer />
        </Router>
        </Provider>
      </div>
   
  );
}

export default App;
