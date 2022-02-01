import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WhyAptech from "./Pages/WhyAptech";
import Courses from "./Pages/Courses";
import ACNS from "./Pages/ACNS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./components/Navbar";
import ADSE from "./Pages/ADSE";
import PRO from "./Pages/PRO";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/acns" element={<ACNS />} />
        <Route path="/courses/adse" element={<ADSE />} />
        <Route path="/courses/pro" element={<PRO />} />
        <Route path="/whyAptech" element={<WhyAptech />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
