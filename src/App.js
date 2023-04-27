import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WorkDetails from "./pages/WorkDetails";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import "./index.scss"
function App() {
  return (
    <div>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:title" element={<WorkDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
