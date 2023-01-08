// import './App.css'
import Landing from './components/Landing.jsx'
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './pages/Books.jsx';
import { books } from "./data";
import BookInfo from './pages/Bookinfo.jsx';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books}/>} />
      <Route path="/books/1" render={() => <BookInfo books={books}/>} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
