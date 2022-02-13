import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <div class="flex justify-center ">
        <div class="flex flex-col ">
          <div class="mt-52">
             <Intro/>
          </div>
         <div>
            <About/>
         </div>
         <div>
            <Experience/>
         </div>
       </div>
     </div>
  </div>

  );
}

export default App;
