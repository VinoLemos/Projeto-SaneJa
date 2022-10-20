import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from './contexts/Auth';
import useAuth from './hooks/useAuth';
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';

const Private = ({Item}) => {
  const {signed} = useAuth;

  return signed > 0 ? <Item/> : <Login/>;
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Index/>} exact/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
              <Route path="/home" element={<Private Item={Home}/>} exact/>
            </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
