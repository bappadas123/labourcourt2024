import React , { useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TestForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const navigate = useNavigate();


    /*const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender
        );
        // Add your form submission logic here
    };*/

    const saveUser = async (e) => {
        e.preventDefault();
       /* await axios.post('http://localhost:3000/users/useradd',{
            name: firstName,
            email: email
        });*/
        //redirect setelah save;
       // navigate('/');
    try {
      const response = await axios.post("http://localhost:3000/users/useradd", {
            name: firstName,
            email: email
        });
        console.log(response);
        console.log('Post created:', response.data);
        navigate('/');
        } catch (error) {
      console.error('Error creating post:', error);
      // Handle error
    }
           
    }
   
   
  return (
   
      
              
           
                <form  onSubmit={ saveUser } >
                    <Row>
                    <Col md={12}>
                   <Form.Label >
                      First Name*
                       
                    </Form.Label>
                    
                    <Form.Control  
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                    />
                 </Col>
                 </Row>
                 <Row>
                 <Col md={12}>
                     <Form.Label>Last Name*</Form.Label>
                    
                     <Form.Control 
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    </Col>
                    </Row>
                     <br />
                    <Row>
                     <Col md={6}>
                       <Form.Label> Email*    </Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    </Col>
                   <Col md={6}>
                    
                       <Form.Label>Contact*   </Form.Label>
                    <Form.Control 
                        type="text"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />
                    </Col>
                    </Row>
                     <br />
                    <Row>
                    <Col md={6}>
                   
                       <Form.Label>Gender*   </Form.Label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    </Col>
                  
                    </Row>
                   
                   
                       
                    
                   {/* <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button variant="primary"
                        type="submit"
                        value="Submit"
                       
                    >
                        Submit
                    </button>*/}
                      {/*<Button variant="primary" type="submit"  onClick={(e) => handleSubmit(e)}>submit</Button>*/}
                      <Button variant="primary" type="submit" >submit</Button>
                </form>
              
           
      
    
  )
}

export default TestForm

//https://codewithpawan.medium.com/form-validation-in-react-a-comprehensive-guide-with-examples-c12e1c8671f2
