import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/Register';
import LoginPage from './Pages/LoginPage/Login';
import DashBoardPage from './Pages/DashBoardPage/DashBoard';
import CodeEditorPage from './Pages/CodeEditorPage/CodeEditorPage';
import SessionForm from './Pages/SessionForm/SessionForm';
function App() {
  return (
    <div className="App">
 <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<DashBoardPage/>}/>
      <Route path="/editor" element={<CodeEditorPage/>}/>
      <Route path="/session" element={<SessionForm/>}/>
      </Routes>
  </Router>
    </div>
  );
}

export default App;
