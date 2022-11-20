import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
    
  }
  
onChangeStudentName(e){
  this.setState({ name: e.target.value });
}

onChangeStudentEmail(e){
  this.setState({ email: e.target.value });
}

onChangeStudentRollno(e){
  this.setState({ rollno: e.target.value });
}

onSubmit(e){
  e.preventDefault();
  const studentObject = {
    name: this.state.name,
    email: this.state.email,
    rollno: this.state.rollno,
  };
  axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", email: "", rollno: "" });

    this.props.history.push("/student-list");
}

  render() {
    return (
      <div class="form-wrapper">
        
        <Card>
      <Card.Img variant="top" src="https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111" />
      </Card>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name" className="mt-4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
              type="text" 
              value={this.state.name}
              onChange={this.onChangeStudentName}      
            />
          </Form.Group>
          <Form.Group controlId="Email" className="mt-4">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              type="text"
              value={this.state.email}
              onChange={this.onChangeStudentEmail} 
            />
          </Form.Group>
          <Form.Group controlId="Name" className="mt-4">
            <Form.Label>Edad</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>
          
          <div className="d-grid gap-2 mt-4">
      <Button variant="success" type="submit" size="lg">
        Ingresar Mascota
      </Button>
      
    </div>
        </Form>
      </div>
    );
  }
}