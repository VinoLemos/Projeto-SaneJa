import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import RegisterUser from "./components/pages/RegisterUser";
import Homepage from "./components/pages/Homepage";
import TechnicalVisit from "./components/pages/TechnicalVisit";
import Properties from "./components/pages/Properties";
import RegisterProperty from "./components/pages/RegisterProperty";
import UpdateProfile from "./components/pages/UpdateProfile";
import Visits from "./components/pages/Visits";
import Administrator from "./components/pages/Administrator";
import Agent from "./components/pages/Agent";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/sobre"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/contato"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<RegisterUser />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/agendamento" element={<TechnicalVisit />} />
        <Route exact path="/imoveis" element={<Properties />} />
        <Route exact path="/cadastro-imovel" element={<RegisterProperty />} />
        <Route exact path="/perfil" element={<UpdateProfile />} />
        <Route exact path="/visitas" element={<Visits />} />
        <Route exact path="/admin" element={<Administrator />} />
        <Route exact path="/agente" element={<Agent />} />
      </Routes>
    </Router>
  );
}

export default App;
