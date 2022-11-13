import React,{Fragment, useState} from 'react'
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';


function App() {
  const [cart,setCart]=useState(false)

  const cartOpenHandler =() => {
    setCart(true)
  }
  const cartCloseHandler =() => {
    setCart(false)
  }
  return (
    <Fragment>
      {cart &&<Cart onClose={cartCloseHandler}/>}
    <Header onShow={cartOpenHandler}/>
    <main>
    <Meals/>
    </main>
    </Fragment>
  );
}

export default App;
