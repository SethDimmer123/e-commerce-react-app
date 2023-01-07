// import './App.css'
import Landing from './components/Landing.jsx'
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './pages/Books.jsx';


function App() {
  return (
    <Router>
    <div className="app">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Books} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
