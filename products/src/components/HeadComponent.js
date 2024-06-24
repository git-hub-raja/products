import React, { useState } from "react";
import logo from "./utils/images/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const HeaderComponent = ({
  filterItems,
  clearSearch,
  filterProductsByCategory,
  categories = [],
}) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="main-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className="head-container">
          <h3 className="app-title-alignment">Product Management System</h3>
        </div>
        <div style={{ margin: "auto" }}>
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
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
