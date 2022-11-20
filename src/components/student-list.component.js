import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";
import Card from 'react-bootstrap/Card';

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  

  componentDidMount() {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Card>
      <Card.Img variant="top" src="https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111" />
      </Card>
        <Table className="" striped bordered hover variant ="secondary">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Raza</th>
              <th>Edad</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}

