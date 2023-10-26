import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Nav } from './components/Nav';
import { Main } from './pages/Main/Main';
import { Cart } from './pages/Cart/Cart';
import { Shop } from './pages/Shop/Shop';
import { Search } from './pages/Search/Search';
import { ShopContextProvider } from './contexts/shopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/Online_Shop_V.1.0.0' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop/:name' element={<Shop />} />
            <Route path='/search/:resultof' element={<Search />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
