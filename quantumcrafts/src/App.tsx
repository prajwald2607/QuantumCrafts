import "./App.css";
import { Hero } from "./components";
import { Nav } from "./sections/Nav";
import { Plans } from "./sections/Plans";
import { ReadyTostart } from "./sections/ReadyToStart";
import { WhyChoseUs } from "./sections/WhyChoseUs";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyChoseUs />
      <Plans />
      <ReadyTostart />
      <Footer />
    </>
  );
}

export default App;
