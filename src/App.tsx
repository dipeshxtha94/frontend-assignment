import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
