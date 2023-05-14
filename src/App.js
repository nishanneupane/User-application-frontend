import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../src/component/Home/Home"
import Navbar from './component/navbar/Navbar';
import AddUser from './component/AddUser/AddUser';
import EditUsers from './component/editUser/EditUsers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/editUser/:id' element={<EditUsers/>}/>
      </Routes>
    </div>
  );
}

export default App;
