import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Router,
} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Shows } from "./Components/Shows";
import { Press } from "./Components/Press";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
