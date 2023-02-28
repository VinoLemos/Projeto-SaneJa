import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import NavigationBar from "./components/layout/NavigationBar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/sobre" element={<About />}></Route>
            <Route exact path="/contato" element={<Contact />}></Route>
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
