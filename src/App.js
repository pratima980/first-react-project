import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';



function App() {
  return (
   <>
  <Navbar title="Text Editor"></Navbar>
  <div className="container"><About></About></div>
   </>
  );
}

export default App;
