import "./App.css";
import TransparentNavbar from "./TransparentAppBar.js";
import Home from "./Home.js";
import Services from "./Services.js";
import About from "./About.js";
import WhyUs from "./WhyUs.js";
import ContactUs from "./ContactUs.js";

function App() {
  return (
    <div className="App">
      <header>
        <TransparentNavbar />
      </header>
      <Home />
      <Services />
      <About />
      <WhyUs />
      <ContactUs />
    </div>
  );
}

export default App;
