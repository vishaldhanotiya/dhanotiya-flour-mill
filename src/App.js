import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Services from "./component/Services";
import AboutUs from "./component/AboutUs";
import WhyUs from "./component/WhyUs";
import ContactUs from "./component/ContactUs";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <AboutUs />
      <WhyUs />
      <ContactUs />
    </div>
  );
}

export default App;
