import React, { Component } from 'react';
import ProductItem from "./../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Product List</h3>
      </div>
      <div className="panel-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Code</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}

export default ProductList;