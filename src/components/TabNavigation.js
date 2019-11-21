import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TabNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home">TODO APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ml-5 mr-5">
              <Link to="/">Home page</Link>
            </li>
            <li className="nav-item mr-5">
              <Link to="/Completed">Completed</Link>
            </li>
            <li className="nav-item mr-5">
              <Link to="/Trash"> Trash </Link>
            </li>
            <li className="nav-item">
              <Link to="/Add"> Create/Edit </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default TabNavigation;
