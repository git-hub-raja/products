import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeadComponent";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:
      props.location.state && props.location.state.product?[
          props &&
            props.location &&
            props.location.state &&
            props.location.state.product,
        ]:[] || [],
    };
  }

  goBackToList = () => {
    this.props.navigate(-1);
  };
  render() {
    return (
      <>
        <Container>
          <HeaderComponent />
          <div className="container-fluid">
            <h4 className="p-2">
              <i
                className="bi bi-arrow-left-circle-fill m-2"
                onClick={() => this.goBackToList()}
              ></i>
              Cart
            </h4>
            {this.state.products.length > 0?this.state.products.map((p) => {
              return (
                <div className="cart-alignment">
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      key="6"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Items</div>
                        <Image src={p.thumbnail} rounded />
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      key="1"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Name</div>
                        {p.title}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      key="3"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Brand</div>
                        {p.brand}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      key="4"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Category</div>
                        {p.category}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      key="5"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Stock</div>
                        {p.stock}
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      key="6"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Price</div>
                        {p.price}
                      </div>
                    </ListGroup.Item>
                    .
                    <ListGroup.Item
                      key="2"
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        {<i class="bi bi-x-square-fill"></i>}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              );
            }):<h4 style={{'textAlign':'center', 'margin':'8rem'}}>Your cart is empty...!</h4>}
          </div>

          <FooterComponent />
        </Container>
      </>
    );
  }
}

const CartProductWithRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return <Cart location={location} navigate={navigate} />;
};

export default CartProductWithRouter;
