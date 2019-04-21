import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ProductItem extends Component {
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to remove this product?")) {
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.status ? "In stock" : "Out of stock";
    var statusClass = product.status ? "warning" : "default";
    return (
    <tr>
      <td>{index}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span className={`label label-${statusClass}`}>{statusName}</span>
      </td>
      <td>
        <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Edit</Link>
        <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Remove</button>
      </td>
    </tr>
    );
  }
}

export default ProductItem;
