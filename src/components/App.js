
import { useState } from 'react';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import '../styles/App.css';

import Banner from './Banner';
import Footer from './Footer';

function App() {
  const [cart, updateCart] = useState([])
  return (
    <div className="App">
      <Banner />
      <div className="App-show-cart">
        <Cart className="cart" cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
