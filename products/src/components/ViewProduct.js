import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeadComponent";
import Container from "react-bootstrap/esm/Container";


class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:
        (props &&
          props.location &&
          props.location.state &&
          props.location.state.product) ||
        null,
    };

    this.goBackToList = this.goBackToList.bind(this);
    this.handleProductSelect = this.handleProductSelect.bind(this);
  }

  goBackToList = () => {
    this.props.navigate(-1);
  };
  handleProductSelect = () => {
    this.props.navigate("/cart", { state: {product:this.state.product}});
  };


  render() {
    return (
      <>
        <Container>
          <HeaderComponent />
          <div className="container-fluid">
            <h4 className="p-2"><i className="bi bi-arrow-left-circle-fill m-2" onClick={() => this.goBackToList()}></i>View Product</h4>
            {!this.state.product ? (
              <h5>No data Found!!</h5>
            ) : (
              <Tabs
                defaultActiveKey="info"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="info" title="General Info">
                  <Row>
                    <Col xs={12} md={6}>
                      <ListGroup variant="flush" style={{"display":"contents"}}>
                        <ListGroup.Item
                          key="1"
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Name</div>
                            {this.state.product.title}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          key="2"
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Description</div>
                            {this.state.product.description}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          key="3"
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Brand</div>
                            {this.state.product.brand}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          key="4"
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Category</div>
                            {this.state.product.category}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          key="5"
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Stock</div>
                            {this.state.product.stock}
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                          key="6"
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Price</div>
                            {this.state.product.price}
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col xs={12} md={6}>
                      <Image src={this.state.product.thumbnail} rounded />
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="visual" title="Visuals">
                  <Carousel data-bs-theme="dark" className="c-inner">
                    {this.state.product.images.map((i) => {
                      return (
                        <Carousel.Item key={i}>
                          <img className="d-block w-100" src={i} alt="Slide" />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </Tab>
              </Tabs>
            )}
            <div style={{ textAlign: "center" }}>
                <Button onClick={() => this.handleProductSelect()}>Add to Cart</Button>
            </div>
          </div>
          <FooterComponent />
        </Container>
      </>
    );
  }
}

const ViewProductWithRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return <ViewProduct location={location} navigate={navigate} />;
};

export default ViewProductWithRouter;
