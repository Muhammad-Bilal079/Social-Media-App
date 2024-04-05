import Home from './pages/Home/home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import { Link, Route, Routes} from 'react-router-dom';

function App() {
 
  return (
    <>
   

{/* all routes are here  */}
    <Routes>
   <Route exact path="/" element={<Home />} />
   <Route  path="/login" element={<Login />} />
   <Route path="/profile/:username" element={<Profile />} />
   <Route path="/register" element={<Register />} />
</Routes>

 {/* main home componenet  */}
 <Home />


    </>
  )

}

export default App
