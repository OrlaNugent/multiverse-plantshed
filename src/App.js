import Header from './components/Header';
import Footer from './components/Footer';
import data from './data';
import Home from './Home';
import Plants from './Plants';
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist =cartItems.find(x => x.id === product.id);
    if(exist) { 
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty +1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1}])
    }
  };
   const onRemove = ( product ) => {
     const exist = cartItems.find((x) => x.id === product.id);
     if (exist.qty === 1) {
       setCartItems(cartItems.filter((x)=> x.id !== product.id));
     } else {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? { ...exist, qty: exist.qty -1 } : x
      )
      );
     }
   }
  return (
    <div className="App">
    <BrowserRouter>
    <Header countCartItems={cartItems.length} />  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants onAdd={onAdd} products={products} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
