import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/products/:id' element={<ProductDetailsPage />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
