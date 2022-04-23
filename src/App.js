import "./App.css";
import "./css/style.scss";
import Sidebar from "./components/layout/sidebar/sidebar.js";
import Home from "./pages/home";
import Header from "./components/layout/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./auth/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/deshboard' element={<Home/>} />
          {/* <div className="layout">
            <Sidebar />
            <div className="page-section my-3">
              <Header />
              
            </div>
          </div> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
