import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        this.handleProductSelect = this.handleProductSelect.bind(this);
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(response => {
                this.setState({
                    products: (response && response.products) || []
                })
            });
    }

    handleProductSelect = (product) => {
        console.log("Selected product is ", product);
    }

    render() {
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
                </div>
            </>
        )
    }
}

export default ProductList;