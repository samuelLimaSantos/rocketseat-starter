import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Product extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-info">
        <div className="option-header">
          <h1>{product.title}</h1>
          <Link to="/">
            <img
              src="https://image.flaticon.com/icons/svg/864/864390.svg"
              alt="close-icon"
              width="25px"
            />
          </Link>
        </div>
        <p>{product.description}</p>
      </div>
    );
  }
}
