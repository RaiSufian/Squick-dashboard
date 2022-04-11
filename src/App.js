import './App.css';
import './css/style.scss';
import Sidebar from './components/sidebar/sidebar.js';
import Home from './pages/home'
import Header from './components/header'

function App() {
  return (
    <>
    <div className="layout">
      <Sidebar />
      <div className="page-section my-3">
          <Header/>
          <Home/>
         
      </div>
    </div>
    </>
  );
}

export default App;
