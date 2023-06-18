import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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

const Private = ({ children }) => {
  const authenticated = localStorage.getItem("token");

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const IsAdmin = ({ children }) => {
  const admin = localStorage.getItem("role");

  if (admin !== "Supervisor") {
    return <Navigate to="/login" />;
  }

  return children;
};

const IsAgent = ({ children }) => {
  const agent = localStorage.getItem("role");

  if (agent !== "Agent") {
    return <Navigate to="/login" />;
  }

  return children;
};

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
        <Route
          exact
          path="/home"
          element={
            <Private>
              <Homepage />
            </Private>
          }
        />
        <Route
          exact
          path="/agendamento"
          element={
            <Private>
              <TechnicalVisit />
            </Private>
          }
        />
        <Route
          exact
          path="/imoveis"
          element={
            <Private>
              <Properties />
            </Private>
          }
        />
        <Route
          exact
          path="/cadastro-imovel"
          element={
            <Private>
              <RegisterProperty />
            </Private>
          }
        />
        <Route
          exact
          path="/perfil"
          element={
            <Private>
              <UpdateProfile />
            </Private>
          }
        />
        <Route
          exact
          path="/visitas"
          element={
            <Private>
              <Visits />
            </Private>
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <IsAdmin>
              <Administrator />
            </IsAdmin>
          }
        />
        <Route
          exact
          path="/agente"
          element={
            <IsAgent>
              <Agent />
            </IsAgent>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
