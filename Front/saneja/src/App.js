import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Index/>} exact/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
