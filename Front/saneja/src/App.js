import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from './pages/Index.js';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Index/>} exact/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
