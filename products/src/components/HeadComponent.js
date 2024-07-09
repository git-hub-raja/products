import React, { useState } from "react";
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const HeaderComponent = ({
  filterItems,
  clearSearch,
  filterProductsByCategory,
  categories = [],
}) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <Container fluid className="mt-4">
        <Row>
          <Col lg={1} xs={4} style={{ textAlign: "center" }}>
            <Link to="/lpg">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </Col>
          <Col lg={5} xs={8} style={{ textAlign: "center" }}>
            <h3 className="app-title-alignment">Product Management System</h3>
          </Col>
          <Col lg={4} xs={12} style={{ textAlign: "center" }}>
            <InputGroup>
              <Form.Control
                style={{ border: "1px solid #0d6efd" }}
                placeholder="Type here...."
                aria-label="Type here...."
                aria-describedby="basic-addon2"
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="search-tooltip">Search</Tooltip>}
              >
                <Button
                  variant="outline-primary"
                  id="button-addon2"
                  onClick={() => filterItems(searchInput)}
                >
                  <i className="bi bi-search"></i>
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => (
                  <Tooltip id="clear-tooltip" {...props}>
                    Clear
                  </Tooltip>
                )}
              >
                <Button
                  variant="outline-primary"
                  id="button-addon2"
                  onClick={() => clearSearch(setSearchInput)}
                >
                  <i className="bi bi-x-lg"></i>
                </Button>
              </OverlayTrigger>
            </InputGroup>
          </Col>
          <Col lg={2} xs={6} style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-end">
            
              <div className="flex-item">
                <h3>
                  <i className="bi bi-cart-fill">
                    <span className="badge">3</span>
                  </i>
                </h3>
              </div>
              <div className="flex-item">
                <h3>
                  <Link to="/">
                    <span style={{ color: "black", fontSize: "2rem" }}>
                      <i className="bi bi-person-walking"></i>
                    </span>
                  </Link>
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </>
  );
};

export default HeaderComponent;
