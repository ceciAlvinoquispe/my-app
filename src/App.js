import React from 'react';
import {getProducts} from './services/Api';
import Home from './component/Home';
import {CartProvider} from './context/storeProducts';

// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory();
const { useState, useEffect } = React;

export default function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartProduct, setCartProduct] = useState([])

  const fetchProducts = async () =>{
    try{
      setLoading(true)
      const data = await getProducts();
      setProducts(data)
      setLoading(false)
      
    }catch(err){}
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  const updateCartProducts = (name) => {
    const update = [...cartProduct];
    const isCartProduct = cartProduct.indexOf(name);
    
    if(isCartProduct >=0){
      update.splice(isCartProduct, 1)
    }else{
      update.push(name);
    }

    setCartProduct(update);
  }

  return (
    <CartProvider value={{
      cartProducts: cartProduct,
      updateCartProducts: updateCartProducts
    }}>
      <div className="App">
        <Home 
          products={products}
          loading={loading}
        />
      </div>
    </CartProvider >
  );
}
