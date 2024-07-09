import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Notify from './utils/notify';
import FooterComponent from './FooterComponent';
import HeaderComponent from "./HeadComponent";
import { useNavigate } from "react-router-dom";


const notify_types = {
    success: 'success',
    failure: 'danger',
    default: 'info'
}

const initial_state = {
    validated: false,
    notify: {
        message: '',
        type: notify_types.default
    },
    userInputs: {
        category: '0',
        brand: '',
        title: '',
        description: '',
        price: '',
        stock: '',
        discount: '',
        rating: '',
        tImage: '',
        pImage: ''
    },
    userFeedbacks: {
        category: false,
        brand: false,
        title: false,
        description: false,
        price: false,
        stock: false,
        discount: false,
        rating: false,
        tImage: false,
        pImage: false
    }
}
class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            catagories: [],
            ...initial_state
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadCategories = this.loadCategories.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.clear = this.clear.bind(this);
        this.goBackToList = this.goBackToList.bind(this);
    }

    componentDidMount() {
        this.loadCategories();
    }
    goBackToList = () => {
        this.props.navigate(-1);
      };

    clear = () => this.setState({ ...initial_state })

    loadCategories = () => {
        fetch("https://dummyjson.com/products/categories")
            .then(res => res.json())
            .then(catagories => this.setState({ catagories }))
    }

    handleFormSubmit = (event) => {
        let userFeedbacks = { ...this.state.userFeedbacks };
        Object.keys(this.state.userInputs).forEach(key => {
            if ((key === 'category' && this.state.userInputs[key] === '0') || !this.state.userInputs[key]) {
                userFeedbacks[key] = true;
            } else if (key === "brand" 
                && (!(/^[A-Za-z]+[A-Za-z0-9_ ]*$/.test(this.state.userInputs[key])) 
                    || !(this.state.userInputs[key].length <= 10))){
                userFeedbacks[key] = true;
            }
        })
        this.setState({ userFeedbacks });
        if (!(Object.values(userFeedbacks).find(v => v === true))) {
            this.addProduct({
                ...this.state.userInputs,
                pImage: [this.state.userInputs.pImage]
            })
        }
        event.preventDefault();
        event.stopPropagation();  
    }

    addProduct = product => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(r => {
                this.setState({
                    notify: {
                        ...this.state.notify,
                        message: 'Product added with Id ' + r.id,
                        type: notify_types.success
                    }
                })
            })
            .catch(err => {
                this.setState({
                    notify: {
                        ...this.state.notify,
                        message: 'Failed to add the product',
                        type: notify_types.failure
                    }
                })
            });
    }

    handleChange = (event, field) => {
        const element = event.currentTarget;
        this.setState({
            userInputs: {
                ...this.state.userInputs,
                [field]: element.value
            },
            userFeedbacks: {
                ...this.state.userFeedbacks,
                [field]: false
            }
        })
    }

      

    render() {
        return (
            <>
            <Container>
                <div className='container-fluid pt-3'>
                <HeaderComponent />
                    <Container>
                        <h4 className="pt-2 pb-2 mb-3"><i className="bi bi-arrow-left-circle-fill m-2" onClick={() => this.goBackToList()}></i>Product Addition</h4>
                        {this.state.notify.message && <Notify notify={this.state.notify} cb={this.state.notify.type === notify_types.success ? this.clear : null}></Notify>}
                        <Form noValidate validated={this.state.validated} onSubmit={(event) => this.handleFormSubmit(event)}>
                            <Row className='mb-3'>
                                <Form.Group as={Col} md={6} controlId='category'>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        as='select'
                                        value={this.state.userInputs.category}
                                        onChange={(event) => this.handleChange(event, 'category')}
                                        required
                                        isInvalid={this.state.userFeedbacks.category}
                                    >
                                        <option value={0}>Click here to select</option>
                                        {this.state.catagories.map((category, index) => <option key={index + 1} value={category.slug}>{category.name}</option>)}
                                    </Form.Control>
                                    <Form.Control.Feedback type='invalid'>Please select a category</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={6} controlId='brand'>
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter brand'
                                        // pattern='/[A-Za-z]+/'
                                        value={this.state.userInputs.brand}
                                        onChange={(event) => this.handleChange(event, 'brand')}
                                        required
                                        isInvalid={this.state.userFeedbacks.brand}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {
                                            this.state.userInputs.brand 
                                            ? (this.state.userInputs.brand.length > 10 
                                                ? "Brand name is too long" 
                                                : "Please enter valid brand") 
                                            : "Please enter brand"
                                        }
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group as={Col} md={6} controlId='title'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter title'
                                        value={this.state.userInputs.title}
                                        onChange={(event) => this.handleChange(event, 'title')}
                                        required
                                        isInvalid={this.state.userFeedbacks.title}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter title</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={6} controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter description'
                                        value={this.state.userInputs.description}
                                        onChange={(event) => this.handleChange(event, 'description')}
                                        required
                                        isInvalid={this.state.userFeedbacks.description}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please eneter description</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group as={Col} md={6} controlId='price'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type='number'
                                        min={0}
                                        placeholder='Enter price'
                                        value={this.state.userInputs.price}
                                        onChange={(event) => this.handleChange(event, 'price')}
                                        required
                                        isInvalid={this.state.userFeedbacks.price}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter price</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={6} controlId='stock'>
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control
                                        type='number'
                                        min={0}
                                        placeholder='Enter stock'
                                        value={this.state.userInputs.stock}
                                        onChange={(event) => this.handleChange(event, 'stock')}
                                        required
                                        isInvalid={this.state.userFeedbacks.stock}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter stock</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group as={Col} md={6} controlId='discount'>
                                    <Form.Label>Discount</Form.Label>
                                    <Form.Control
                                        type='number'
                                        step={0.01}
                                        min={0}
                                        max={100}
                                        placeholder='Enter discount'
                                        value={this.state.userInputs.discount}
                                        onChange={(event) => this.handleChange(event, 'discount')}
                                        required
                                        isInvalid={this.state.userFeedbacks.discount}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter discount</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={6} controlId='rating'>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                        type='number'
                                        step={0.01}
                                        min={0}
                                        max={5}
                                        placeholder='Enter rating'
                                        value={this.state.userInputs.rating}
                                        onChange={(event) => this.handleChange(event, 'rating')}
                                        required
                                        isInvalid={this.state.userFeedbacks.rating}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter rating</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            
                            <Row className='mb-3'>
                                <Form.Group as={Col} md={6} controlId='tImage'>
                                    <Form.Label>Thumbnail Image</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter thumbnail image URL'
                                        value={this.state.userInputs.tImage}
                                        onChange={(event) => this.handleChange(event, 'tImage')}
                                        required
                                        isInvalid={this.state.userFeedbacks.tImage}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter thumbnail image URL</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={6} controlId='pImage'>
                                    <Form.Label>Display Images</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter product image URL'
                                        value={this.state.userInputs.pImage}
                                        onChange={(event) => this.handleChange(event, 'pImage')}
                                        required
                                        isInvalid={this.state.userFeedbacks.pImage}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please enter product image URL</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Button type="submit">Submit</Button>
                        </Form>
                    </Container>
                    <FooterComponent />
                </div>
                </Container>
            </>
        )
    }
}

const AddProductWithRouter = () => {
    const navigate = useNavigate();
    return <AddProduct navigate={navigate} />;
  };
  
  export default AddProductWithRouter;