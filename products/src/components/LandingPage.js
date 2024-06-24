import React from "react";
import { Link } from "react-router-dom";
import Design_verifications from "./utils/images/Design_verifications.jpg";
import fpga_design_services from "./utils/images/fpga_design_services.jpg";
import HeaderComponent from "./HeadComponent";
import FooterComponent from "./FooterComponent";
import Container from "react-bootstrap/Container";

const BodyComponent = () => {
  return (
    <Container>
    <div className="container-fluid">
      <div className="body-container">
        <HeaderComponent />
        <div className="img1-container">
          <Link to="/list">
            <img
              src={Design_verifications}
              className="Main1-Banner"
              alt="Main1-Banner"
            />
          </Link>
        </div>
        <div className="text-container">
          <p>
            To link a local image in React, import the image at the top of the
            file and assign it to the src prop of an img element. This approach
            works when using a Webpack-based tool like Create React App. Note
            that the image file must be within the project directory to be
            imported successfully.
          </p>
        </div>
        <div className="img2-container">
          <img
            src={fpga_design_services}
            className="Main1-Banner"
            alt="Main2-Banner"
          />
        </div>
        <FooterComponent />
      </div>
    </div>
    </Container>
  );
};

export default BodyComponent;
