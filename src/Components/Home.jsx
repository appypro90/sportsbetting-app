import React from 'react';
import { Card } from 'react-bootstrap';

export default props => {
  return (
    <Card>
      <Card.Header as="h4" className="text-center">Hello, Friend!</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to SportsBetting!</Card.Title>
        <Card.Text>
          Sportsbetting.com.au is a Northern Territory licenced bookmaker and is one of Australia’s oldest online bookmakers having been operating since 1998.

          We are Australian owned and operated with a wealth of experience in servicing our clients.

          At Sportsbetting.com.au we don’t rely on gimmicks, we just give you great fixed odds together with outstanding personal service. We know what punters want from their bookie.

          Sportsbetting’s aim is to offer competitive fixed odds across gallops, harness and greyhounds. If you value great odds, you must have an account with Sportsbetting.

          Join Now and enjoy the best racing fixed odds service in Australia.
        </Card.Text>
        <Card.Text>
          To start betting create your profile. If already exists, Log-In now.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href="https://www.sportsbetting.com.au/Account/Register" className="card-link">Join Now</a>
        <a href="https://www.sportsbetting.com.au/Banking" className="card-link">Banking</a>
        <a href="https://www.sportsbetting.com.au/Products" className="card-link">Product</a>
        <a href="https://www.sportsbetting.com.au/Contact" className="card-link">Contact Us</a>
      </Card.Footer>
    </Card>
  );
}
