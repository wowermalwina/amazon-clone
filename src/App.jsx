import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<h1>I AM A CHECKOUT</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
