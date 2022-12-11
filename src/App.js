import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import Dashboard from './Dashboard';
import "./css/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import CreateUser from './CreateUser';
import Viewuser from './Viewuser';
import EditUser from './EditUser';
import EditProfile from './EditProfile';

function App() {
  return (
    <BrowserRouter>
    <div id= "wrapper">
       <Sidebar/>
       <div id="content-wrapper" class="d-flex flex-column">
       <div id="content">
        <Topbar/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/users' element={<User/>}/>
          <Route path='/create-user' element={<CreateUser/>}/>
          <Route path='/profile/:id' element={<Viewuser/>}/>
          <Route path='/edit-user/:id' element={<EditUser/>}/>
          <Route path='/edit-profile/:id' element={<EditProfile/>}/>
        </Routes>
        </div>
       </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
