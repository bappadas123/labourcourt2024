import React ,  { useState , useEffect } from 'react'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TestForm from './TestForm';
import { Link } from 'react-router-dom';


function UserList() {


    const [users, setUser] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 
    const getUsers = async () => {
        const response = await axios.get('http://localhost:3000/users/alluser');
        console.log(response);
        console.log('userlist:', response.data);
        setUser(response.data);
        
        
    }


    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3000/users/deleteuser/${id}`);
       // toast("This is a toast notification!");
        toast.success("user delete successfully!");
    //toast.error("Something went wrong. Please try again!");
   // toast.info("New updates are available!");
    //toast.warn("Your session is about to expire!");
        getUsers();
    }
  return (
    <div>
       
        
       
        <ToastContainer position="top-center"/>
      <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   { users.map((user, index) => (
                        <tr key={ user.userid }>
                            <td>{ index + 1 }</td>
                            <td>{ user.username }</td>
                            <td>{ user.useremail }</td>
                            <td>
                               <Link to={`/edit/${user.userid}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteUser(user.userid) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
    </div>
  )
}

export default UserList
