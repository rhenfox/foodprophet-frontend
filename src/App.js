
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/font-awesome/css/font-awesome.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/addUser' element={<AddUser/>}/>
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
