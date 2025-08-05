import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
// Components
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/pages/footer/Footer.jsx";

// Pages
import Home from "./components/pages/home/Home.jsx";
import About from "./components/pages/about/About.jsx";
import Service from "./components/pages/service/Service.jsx";
import Doctor from "./components/pages/doctor/Doctor.jsx";
import Blog from "./components/pages/blog/Blog.jsx";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
