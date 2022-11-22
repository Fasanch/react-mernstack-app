import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
            <img
              src="https://i.gifer.com/Qjy2.gif"
              width="250"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  <h2>
                  TUMASCOTA.COM
                  </h2>
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                  <h5>
                  INGRESAR NUEVA MASCOTA |
                    </h5>
                  </Link>
                </Nav>
                <img
              src="https://us.123rf.com/450wm/vectorstockvadim/vectorstockvadim2201/vectorstockvadim220119269/181363866-coraz%C3%B3n-de-ne%C3%B3n-brillante-con-icono-de-huella-de-animales-aislado-sobre-fondo-negro-pata-de-mascota-.jpg?ver=6"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    <h5>
                    | VER LISTA DE MASCOTAS
                    </h5>
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
