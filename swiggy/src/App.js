//import all required components
import { Home } from "./components/Home.js";
import Navbar from "./components/Navbar.js"
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      {/*Render components*/}
          <Navbar/> 
          <Home/>   
          <Footer/>
    </div>
  );
}

export default App;
