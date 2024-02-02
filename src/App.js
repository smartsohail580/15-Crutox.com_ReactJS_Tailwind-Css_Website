
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Roadmap from "./components/Pages/Roadmap";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import FAQs from "./components/Pages/FAQs";
import TermAndConditions from "./components/Pages/TermAndConditions";
import Privacy from "./components/Pages/Privacy";
import About from "./components/Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="about" />
          <Route element={<Roadmap />} path="roadmap" />
          <Route element={<FAQs />} path="faqs" />
          <Route element={<TermAndConditions />} path="terms" />
          <Route element={<Privacy />} path="privacy" />


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
