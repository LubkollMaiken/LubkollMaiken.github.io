import './App.css';
import Navigationbar from './components/Navigationbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import GroceriesApp from './pages/portfolio/groceriesApp/GroceriesApp';

function App({children}) {
  return (
    <div className="App">

        <Navigationbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/groceriesApp" element={<GroceriesApp/>}/>
        </Routes>

    </div>
  );
}

export default App;
