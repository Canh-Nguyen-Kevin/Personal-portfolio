import "./components/sass/main.scss";
import {
  About,
  Contact,
  Header,
  Navbar,
  Resume,
  Portfolio,
} from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
