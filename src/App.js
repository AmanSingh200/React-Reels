import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {BrowserRouter as Router,Switch,Route,Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
       </Router>
  );
}

export default App;
