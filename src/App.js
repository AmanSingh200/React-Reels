import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter as Router,Switch,Route,Routes, BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext'
function App() {
  return (
      <Router>
        <AuthProvider>
        <Routes>
        
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Feed/>}/>
       
        </Routes>
        </AuthProvider>
       </Router>
  );
}

export default App;
