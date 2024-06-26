import { useContext } from 'react';
import Home from './pages/Home/home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import { Link, Navigate, Route, Routes  } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';

function App() {
 
const {user} = useContext(AuthContext)

  return (
    <> 

{/* all routes are here  */}
    <Routes>
   <Route exact path="/" element={user ? <Home /> : <Register />} />
   <Route  path="/login" element={user ?  <Navigate to="/" /> :<Login />} />
   <Route path="/profile/:username" element={<Profile />} />
   <Route path="/register" element={user ?  <Navigate to="/" />:<Register />} />
</Routes>

 {/* main home componenet  */}
 {/* <Home /> */}


    </>
  )

}

export default App
