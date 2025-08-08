import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TestOne from './Component/TestOne'
import TestForm from './Component/TestForm'
import EditUser from './Component/EditUser'

import 'bootstrap/dist/css/bootstrap.min.css';
import TestFormTwo from './Component/TestFormTwo'
import UserList from './Component/UserList'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  

  return (
    <>
           <Router>
          <nav >
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/addUser" >Add User</Link>
              </li>
              
            </ul>
          </nav>
         
       <div className="container p-4 pt-0">
           <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/addUser" element={<TestForm />} />
            <Route path="/edit/:id" element={<EditUser/>} />
           
  
          
          </Routes>
          </div>
          </Router>
     
      {/*<h1>Hello Magnus</h1>
      <TestOne/>*/}
      {/*<TestForm/>*/}
     {/*<TestFormTwo/>*/}
     
      

      
    </>
  )
}

export default App
