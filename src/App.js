// import './App.css'
import Landing from './components/Landing.jsx'
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
