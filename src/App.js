import "./App.css";
import "./css/style.scss";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./auth/login";
import Sales from "./pages/sales";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/deshboard' element={<Home/>} />
        <Route path='/sales' element={<Sales/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
