import './App.css';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div>
        <nav>
        <div className="container">
        <Navbar></Navbar>
        </div>
      </nav>
      <div className='container'>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
