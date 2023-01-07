// import './App.css'
import Landing from './components/Landing.jsx'
import Nav from "./components/Nav.jsx";
import Highlights from './components/Highlights.jsx';
import Featured from './components/Featured.jsx';
import Discounted from './components/Discounted.jsx';
import Explore from './components/ui/Explore.jsx';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
