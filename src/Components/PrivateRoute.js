import React,{useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';
import {Route,Routes} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import Login from './Login';


function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/private-outlet" element={<Login />}>
          <Route element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default PrivateRoute