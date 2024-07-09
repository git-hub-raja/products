import React from "react";
// import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const FooterComponent = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} xs={6}>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Customer Care</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">My Account</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Discover</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Find Us</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Populer Searches</Link>
            </p>
          </Col>
          <Col lg={3} xs={6}>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Customer Care</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Shipping</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Strore Locator</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Conatct Us</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Careers</Link>
            </p>
          </Col>
          <Col lg={3} xs={6}>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Strore Locator</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">My Account</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Discover</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Find Us</Link>
            </p>
            
          </Col>
          <Col lg={3} xs={6}>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Customer Care</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">My Account</Link>
            </p>
            <p className="f-links-text-centered">
              <Link to="/" className="f-links-text-deco">Discover</Link>
            </p>
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterComponent;
