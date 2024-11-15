/** @format */

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact/Contact";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='contact' element={<Contact />} />
        <Route path='/' element={<Partner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
