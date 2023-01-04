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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
