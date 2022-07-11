import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutText='About us' />
      <div className="container my-4">
        <TextForm title="Welcome to TextUtils" />
      </div>
    </>
  );
}

export default App;
