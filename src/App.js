import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Alert from './Components/Alert';
import Home from './Components/Home';
import About from './Components/About';
import Img from './Components/Img';
import Footer from './Components/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }


  const EnableMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#313233'
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'White'
      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>
      <Router>
      <div>
        <Header mode={mode} EnableMode={EnableMode} />
        <Alert alert={alert} />
        <Routes>
            <Route path="/Home" element={<Home mode = {mode} showAlert = {showAlert}/>} />
            <Route path="/About" element={<About mode = {mode}/>} />
            <Route path="/" element={<Img/>} />
          </Routes>
        <Footer mode={mode} EnableMode={EnableMode} />
      </div>
      </Router>
    </>
  );
}
export default App;
