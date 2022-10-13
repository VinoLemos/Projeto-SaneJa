import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Index/>} exact/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
