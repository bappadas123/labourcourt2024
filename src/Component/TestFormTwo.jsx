import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

function TestFormTwo() {

     const formStyle = {
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "40px",
        backgroundColor: "#f5f5f5",
    };

    const submitButtonStyle = {
        marginTop: "20px",
        backgroundColor: "#28a745", // React Bootstrap success color
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
    };
  return (
    
            <Form style={formStyle}>
                <Row>
                    <Col md={6}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            id="emailone"
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            id='passwordone'
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            id="emailtwo"
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            id='passwordone'
                        />
                    </Col>
                </Row>
                <Button
                    variant="primary"
                    type="submit"
                   
                style={submitButtonStyle}>
                    Submit
                </Button>
            </Form>
      
  )
}

export default TestFormTwo
//https://www.geeksforgeeks.org/react-bootstrap-form-layout/