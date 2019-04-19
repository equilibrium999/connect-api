import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var {product, index} = this.props;
    var statusName = product.status ? "In stock" : "Out of stock";
    var statusClass = product.status ? "warning" : "default";
    return (
    <tr>
      <td>{product.id}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span className={`label label-${statusClass}`}>{statusName}</span>
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
