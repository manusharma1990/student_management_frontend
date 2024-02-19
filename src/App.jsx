import './App.css'
import './assets/MainBody'
import MainBody from './assets/MainBody'
import {Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Downbar from './Downbar';
import { Navbar } from 'react-bootstrap';
import NavBar from './NavBar';


function App() {

  return (
    <>
    
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
        <NavBar />
        <Router>
          <MainBody />
        </Router>
            
        
    </>
    
  )
}

export default App
