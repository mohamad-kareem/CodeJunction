import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/Register';
import LoginPage from './Pages/LoginPage/Login';
import CodeEditorPage from './Pages/CodeEditorPage/CodeEditorPage';
import SessionForm from './Pages/SessionForm/SessionForm';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ActivitiesPage from './Pages/ActivitiesPage/ActivitiesPage';
import RankingPage from './Pages/RankingPage/RankingPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import ForgetPassword from './Pages/ForgetPasswordPage/ForgetPassword';
function App() {
  return (
    <div className="App">
 <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/forget-password" element={<ForgetPassword/>}/>
      <Route path="/ranking" element={<RankingPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/activities" element={<ActivitiesPage/>}/>
      <Route path="/editor/:roomId" element={<CodeEditorPage/>}/>
      <Route path="/session" element={<SessionForm/>}/>
      </Routes>
  </Router>
  <Toaster
  position="top-center"
  toastOptions={{
    success: {
      style: {
        background: 'yellow',
        color: 'black',
        height:"40px",
      },
    },
    error:{
      style:{
        background:"yellow",
        color:'black',
        
      },
    },
  }}
/>
    </div>
  );
}

export default App;
