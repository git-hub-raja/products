import React from 'react';
import HeaderComponent from './HeadComponent';
import FooterComponent from './FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paginate from './utils/paginate';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from "./LoaderComponent"
import { connect } from 'react-redux';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      allProducts: [],
      categories: [],
      totalRecords: 0,
      recordsPerPage: 15,
      siblingPageCount: 5,
      category: "",
    };

    this.handleProductSelect = this.handleProductSelect.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.filterProductsByCategory = this.filterProductsByCategory.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.loadCategories = this.loadCategories.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
  }

  componentDidMount() {
    this.loadCategories();
    this.loadProducts(1);
  }

  static getDerivedStateFromProps(props, state) {
    return {
        allProducts: props.allProducts && props.allProducts.length !== state.allProducts.length ? props.allProducts || [] : state.allProducts || [],
        products: props.allProducts && props.allProducts.length !== state.allProducts.length ? props.allProducts || [] : state.products || [],
        totalRecords: props.allProducts && props.allProducts.length !== state.allProducts.length ? (props.allProducts && props.allProducts.length) || 0 : (state.allProducts && state.allProducts.length) || 0
    }
}

loadProducts = page => {
    let to = this.state.recordsPerPage * page;
    to = to <= this.state.totalRecords ? to : this.state.totalRecords;
    const offset = to - this.state.recordsPerPage;
    this.setState({
        products: this.state.allProducts.slice(offset, to)
    })
}

  filterItems = (searchInput) => {
    const filteredData = this.state.allProducts.filter((product) =>
      product.title.includes(searchInput)
    );
    this.setState({ products: filteredData, totalRecords: filteredData });
  };

  filterProductsByCategory = (selectedCategory) => {
    const filteredData = this.state.allProducts.filter((product) =>
      product.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    this.setState({ products: filteredData });
  };

  clearSearch = (setSearchInput) => {
    setSearchInput("");
    this.setState({ products: this.state.allProducts });
    this.loadProducts(1);
  };

  handleProductSelect = (product) => {
    this.props.navigate("/view", { state: { product } });
  };

  loadCategories = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categories) => this.setState({ categories }));
  };

  handleCategoryChange = (event) => {
    const element = event.currentTarget;
    this.setState({
      category: element.value,
    });
    this.filterProductsByCategory(element.value)
  };

  render() {
    const pagination_component = !(
      this.state.totalRecords && this.state.recordsPerPage
    ) ? null : (
      <Paginate
        loadProducts={this.loadProducts}
        totalRecords={this.state.totalRecords}
        siblingPageCount={this.state.siblingPageCount}
        recordsPerPage={this.state.recordsPerPage}
      ></Paginate>
    );

    let allPCards = [];
    if (this.state.products && this.state.products.length > 0) {
      for (let itr = 0; itr < this.state.products.length; itr += 3) {
        let itr2 = itr;
        let pCardsPerRow = [];
        while (itr2 < itr + 3 && itr2 < this.state.products.length) {
          let p = this.state.products[itr2];
          pCardsPerRow.push(
            <Col xs={4} key={"c" + itr2}>
              <Card style={{ minHeight: "100%" }}>
                <div className="product-options-allignment">
                  <i title="Edit" className="bi bi-pencil-fill"></i>
                  <i title="Delete" className="bi bi-trash-fill"></i>
                </div>

                <Card.Body>
                  <Card.Img variant="top" src={p.thumbnail} />
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <Button onClick={() => this.handleProductSelect(p)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
          itr2++;
        }
        allPCards.push(
          <Row className="mb-5" key={"r" + itr}>
            {pCardsPerRow}
          </Row>
        );
      }
    }
    return (
      <>
        <Container>
          <HeaderComponent
            filterItems={this.filterItems}
            clearSearch={this.clearSearch}
            filterProductsByCategory={this.filterProductsByCategory}
            categories={this.state.categories}
          />
          <div className="add-products-allignment">
            <div>Count : {(this.state.products && this.state.products.length) || 0} Items</div>

            <div className="d-flex">
             
              <div className="flex-item"> <Link to="/add">
                <Button variant="primary">Add Products </Button>
              </Link></div>
              <div className="flex-item ms-3">
                <Form.Group controlId="category">
                  {/* <Form.Label>Category</Form.Label> */}
                  <Form.Control
                    as="select"
                    value={this.state.category}
                    onChange={(event) => this.handleCategoryChange(event)}
                    required
                    // isInvalid={this.state.userFeedbacks.category}
                  >
                    <option value={0}>Select a category</option>
                    {this.state.categories.map((category, index) => (
                      <option key={index + 1} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select a category
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
          </div>
          {allPCards.length>0?allPCards:<Loading/>}
          {pagination_component}
          <FooterComponent />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
        allProducts: state.products.allProducts
    }
}

const ConnectedProductList = connect(
    mapStateToProps
)(ProductList);

const ConnectedProductListWithRouter = () => {
    const navigate = useNavigate();
    return (
        <ConnectedProductList navigate={navigate} />
    )
}

export default ConnectedProductListWithRouter;
