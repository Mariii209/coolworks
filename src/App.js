import "./App.css";
import HVACHeroSection from "./HVACHeroSection";
import Services from "./Services";
import Professional from "./Professional";
import Partners from "./Partners";
import NeedToday from "./NeedToday";
import Customers from "./Customers";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <HVACHeroSection />
      <Services />
      <Professional />
      <Partners />
      <NeedToday />
      <Customers />
      <Contact />
    </div>
  );
}

export default App;
