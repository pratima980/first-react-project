import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,    
  Route
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#002147';
      showAlert("Dark mode enabled", "success");
      document.title = 'Text Utils';
      setInterval(() => {
        document.title = 'Text Utils is amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install Text Utils';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#E9FAFF';
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="Text Editor" mode={mode} toogleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textarea showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
