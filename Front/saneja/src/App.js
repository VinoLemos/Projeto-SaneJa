import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from './pages/Index.js';
import Login from './pages/Login.js';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Index/>} exact/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
