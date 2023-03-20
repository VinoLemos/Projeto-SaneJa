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

function App() {
  return (
    <>
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
          ></Route>
          <Route
            exact
            path="/sobre"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/contato"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/cadastro" element={<RegisterUser />}></Route>
          <Route exact path="/home" element={<Homepage />}></Route>
          <Route exact path="/agendamento" element={<TechnicalVisit />}></Route>
          <Route exact path="/imoveis" element={<Properties />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
