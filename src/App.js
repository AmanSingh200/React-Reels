import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter as Router,Switch,Route,Routes, BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext'
import Profile from './Components/Profile';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
      <Router>
        <AuthProvider>
        <Routes>
        
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile/:id' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path='/' element={
            <PrivateRoute>
                <Feed/>
            </PrivateRoute>
          }/>
       
        </Routes>
        </AuthProvider>
       </Router>

  );
}

export default App;
