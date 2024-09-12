import "./App.css";
import MakePoint from "./Pages/MakePoint/MakePoint";
import About from "./Pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Head from "./components/Head/Head";
import Home from "./Pages/Home/Home";
import Services from "./Pages/services/Services";
import { Department } from "./Pages/departments/Department";
import { Testimonials } from "./Pages/testimonials/Testimonials";
import { Doctors } from "./Pages/doctors/Doctors";
import { Gallery } from "./Pages/gallery/Gallery";
import { Pricing } from "./Pages/pricing/Pricing";
import { Questions } from "./Pages/questions/Questions";
import { Contect } from "./Pages/contactUs/Contact";
import { Footer } from "./Pages/footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";

function App() {
  return (
    <div className="position-relative">
      <Head />
      <NavBar />
      <Home />
      <About />
      <Services />
      <MakePoint />
      <Department />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <Questions />
      <Contect />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
