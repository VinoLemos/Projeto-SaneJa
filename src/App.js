import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
