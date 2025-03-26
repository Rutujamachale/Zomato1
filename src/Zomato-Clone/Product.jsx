import React from "react";
import JSON from './Db.json'; // Assuming Db.json contains the product data
import ProductList from './ProductList';

class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Explore Options',
            products: JSON  // Assign the JSON data to state
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ProductList prodlist={this.state.products} />  {/* Passing product data to ProductList */}
            </div>
        );
    }
}

export default Product;
