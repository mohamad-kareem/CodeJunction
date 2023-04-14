import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage';
import Register from './Components/RegisterForm/RegisterForm';
function App() {
  return (
    <div className="App">
 <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
  </Router>
    </div>
  );
}

export default App;
