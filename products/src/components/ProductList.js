import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paginate from './utils/paginate';
import { useNavigate } from 'react-router-dom';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            totalRecords: 0,
            recordsPerPage: 15,
            siblingPageCount: 5
        }

        this.handleProductSelect = this.handleProductSelect.bind(this);
        this.loadProducts = this.loadProducts.bind(this);
    }

    componentDidMount() {
        this.loadProducts(1);
    }

    loadProducts = (page) => {
        fetch('https://dummyjson.com/products?limit='+ this.state.recordsPerPage +'&skip='+ ((page * this.state.recordsPerPage) - this.state.recordsPerPage))
        .then(res => res.json())
        .then(response => {
            this.setState({
                products: (response && response.products) || [],
                totalRecords: response.total
            })
        });
    };

    handleProductSelect = (product) => {
        console.log("Selected product is ", product);
        this.props.navigate("/view", { state: { product } });
    }

    render() {

        const pagination_component = !(this.state.totalRecords && this.state.recordsPerPage) ? null
                : <Paginate loadProducts={this.loadProducts} 
                    totalRecords={this.state.totalRecords} 
                    siblingPageCount={this.state.siblingPageCount}
                    recordsPerPage={this.state.recordsPerPage}></Paginate>

        return (
            <>
                <div className='container-fluid'>
                    <h3 className='p-2'>Products</h3>
                    
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(product => {
                                    return (
                                        <tr key={product.id} onClick={() => this.handleProductSelect(product)}>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td>{product.brand}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    { pagination_component }
                </div>
            </>
        )
    }
}

const ProductListWithRouter = () => {
    const navigate = useNavigate();
    return (
        <ProductList navigate={navigate} />
    )
}

export default ProductListWithRouter;