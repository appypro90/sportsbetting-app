import React from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from './NavMenu.jsx';

export default props => (
  <>
    <NavMenu />
    <Container fluid>
      {props.children}
    </Container>
  </>
);