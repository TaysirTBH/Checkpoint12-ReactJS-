import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Form, Button} from 'react-bootstrap';
function App() {
  return (
    <div>
        <br/>
        <div class="header-title">
            <h1>Welcome</h1><br/>
            <h2>Complete this form please</h2>
        </div>
        <br/>
        <br/>
        <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
            <Form.Group >
                <Form.Label>Enter your UserName</Form.Label>
                <Form.Control type="name" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Enter your email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Enter your password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    </div>
);
}

export default App;