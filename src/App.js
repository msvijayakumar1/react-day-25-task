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
        </Routes>
        </div>
       </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
