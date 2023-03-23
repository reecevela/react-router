import Navbar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";


const App = () => {
    return (
        <BrowserRouter>
          <Navbar />
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/profile" element={<Profile />}/>
            </Routes>
          </div>
        </BrowserRouter>
      );
}

export default App;