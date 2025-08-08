import React , { useState , useEffect  } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3000/users/updateuser/${id}`,{
            name: name,
            email: email
        });
        //redirect setelah save;
        navigate('/');
    }
 
    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:3000/users/getuser/${id}`);
          console.log('userlist:', response);
           //console.log('userlist:', response.data.useremail);
        setName(response.data.username);
        setEmail(response.data.useremail);
    }

  return (
    <div>
            <form onSubmit={ updateUser }>
                <div className="field">
                    <label className="label">User Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="User Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">User Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
  )
}

export default EditUser
