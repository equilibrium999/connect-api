import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
    <tr>
      <td>1</td>
      <td>1</td>
      <td>iPhone 6plus</td>
      <td>500</td>
      <td>
        <span className="label label-warning">In stock</span>
      </td>
      <td>
        <button type="button" className="btn btn-success mr-10">Edit</button>
        <button type="button" className="btn btn-danger">Remove</button>
      </td>
    </tr>
    );
  }
}

export default ProductItem;
