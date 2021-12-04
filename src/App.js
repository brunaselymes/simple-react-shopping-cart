import Cart from './components/Cart';
import Main from './components/Main';
import Header from './components/Header';
import data from './data'
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, qtt: exists.qtt + 1 } : x));
    }
    else {
      setCartItems([...cartItems, { ...product, qtt: 1 }])
    }
  }

  const removeFromCart = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if (exists.qtt === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, qtt: exists.qtt - 1 } : x));
    }
  }

  return (
    <div>
      <Header />
      <div className="row">
        <Main addToCart={addToCart} products={products} />
        <Cart addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
