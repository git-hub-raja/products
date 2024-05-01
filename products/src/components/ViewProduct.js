import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

class ViewProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/5/1.jpg",
                    "https://cdn.dummyjson.com/product-images/5/2.jpg",
                    "https://cdn.dummyjson.com/product-images/5/3.jpg"
                ]
            }
        }
    }

    render() {
        return (
            <>
                <div className='container-fluid'>
                    <h3 className='p-2'>View Product</h3>
                    <Tabs
                        defaultActiveKey="info"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="info" title="General Info">
                            <Row>
                                <Col xs={12} md={6}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Name</div>
                                                {this.state.product.title}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Description</div>
                                                {this.state.product.description}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Brand</div>
                                                {this.state.product.brand}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Category</div>
                                                {this.state.product.category}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Stock</div>
                                                {this.state.product.stock}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
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
                            <Carousel data-bs-theme="dark">
                                {
                                    this.state.product.images.map(i => {
                                        return (
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={i}
                                                    alt="Slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </Tab>
                    </Tabs>
                </div>
            </>
        )
    }
}

export default ViewProduct;