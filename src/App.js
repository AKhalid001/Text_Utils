import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Alert from './Components/Alert';
import TextUtil from './Components/TextUtil';
import About from './Components/About';
import Footer from './Components/Footer';

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
        <img src="https://pbs.twimg.com/profile_images/470632818653921280/l5V_RKUu_400x400.png" alt="" width={"100%"} height={"600vh"}/>
        <Routes>
            <Route exact path="/TextUtil" element={<TextUtil mode = {mode} showAlert = {showAlert}/>} />
            <Route exact path="/About" element={<About mode = {mode}/>} />
          </Routes>
        <Footer mode={mode} EnableMode={EnableMode} />
      </div>
      </Router>
    </>
  );
}
export default App;
