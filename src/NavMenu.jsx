import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import isAutheticated from './Helpers/IsAuthenticated.jsx';


const NavMenu = (props) => {

  const logOutHandler = () => {
    const cookies = new Cookies();
    cookies.remove('user');
    const { history } = props;
    history.push('/');
    window.location.reload();
  }

  const handleButtonHideShow = () => {
    if (!isAutheticated()) {
      return <Button as={Link} to="/login" variant="success" type="button">Log In</Button>;
    } else {
      return <Button as={Link} to="/" onClick={logOutHandler} className="login btn btn-primary btn-danger" type="button">Log Out</Button>;
    }
  }

  const handleNavList = () => {
    if (!isAutheticated()) {
      return (
        <Nav className="navbar navbar-dark bg-dark">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/news">News Feed</Nav.Link>
        </Nav>
      )
    } else {
      return (
        <Nav className="navbar navbar-dark bg-dark">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/news">News Feed</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
      )
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Col md={7}>
        <Navbar.Brand>SportsBetting</Navbar.Brand>
      </Col>
      <Col sm md={5}>
        <Row>
          {handleNavList()}
          {handleButtonHideShow()}
        </Row>
      </Col>
    </Navbar>
  )
};

export default withRouter(NavMenu);