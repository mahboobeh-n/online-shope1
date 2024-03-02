
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import Shop from './pages/shop/shop';
import Cart from './pages/cart/catr';

import Menu from './components/menu';
import Header from './components/header';
import Menu2 from './components/menu2';
import { ShopContextProvider } from './context/shopContext.js'
import Welcome from './components/welcome.js';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Header/>
        <Welcome/>
        <Menu/>
        <Menu2/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
