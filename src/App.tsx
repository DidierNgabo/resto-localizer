
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequiredAuth from './components/RequiredAuth';
import Home from './pages/Home';




function App() {
  return(
    <Router>
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path='/' element={<RequiredAuth><Home/></RequiredAuth>}/>
      </Routes>
    </Router>
  )
}

export default App;
