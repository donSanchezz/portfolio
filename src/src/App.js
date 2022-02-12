import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <Intro/>
       <About/>
    </div>
  );
}

export default App;
