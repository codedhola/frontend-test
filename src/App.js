import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
