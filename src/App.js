// import './App.css'
import Landing from './components/Landing.jsx'
import React, {useEffect, useState} from "react";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './pages/Books.jsx';
import { books } from "./data";
import BookInfo from './pages/Bookinfo.jsx';
import Cart from './pages/Cart.jsx';



function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart,{...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item)=>  item.id === book.id 
        ? {
          ...item,
          quantity: +quantity, 
        }
        :item
       )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }


  useEffect(() => {
    console.log(cart);
  }, [cart])





  return (
    <Router>
    <div className="app">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books}/>} />
      <Route path="/books/:id" render={() => <BookInfo cart={cart} books={books} addToCart={addToCart}/>} />
      <Route path="/cart" render={() => <Cart books={books} cart ={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
