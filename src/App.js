import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/layout/NavigationBar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/sobre" element={<About />}></Route>
          <Route exact path="/contato" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
