import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import Dashboard from './Dashboard';
import "./css/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div id= "wrapper">
       <Sidebar/>
       <div id="content-wrapper" class="d-flex flex-column">
       <div id="content">
        <Topbar/>
        <Dashboard/>
        </div>
       </div>
      
    </div>
  );
}

export default App;
