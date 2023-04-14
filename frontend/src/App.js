import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/Register';
import LoginPage from './Pages/LoginPage/Login';

function App() {
  return (
    <div className="App">
 <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      
      </Routes>
  </Router>
    </div>
  );
}

export default App;
