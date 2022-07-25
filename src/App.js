import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(3 39 67)"
      showAlert("Dark mode is Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is Enabled", "success")
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toogleMode={toogleMode} aboutText='About us' />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm title="Welcome to TextUtils" showAlert={showAlert} mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
