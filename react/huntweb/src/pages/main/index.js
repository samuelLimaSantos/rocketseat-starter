import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Main extends Component {
  state = {
    products: [],
    productInfo: [],
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    console.log(`/products?page=${page}`);
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;
    this.setState({ products: docs, productInfo, page });
    console.log(productInfo);
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };
  nextPage = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) {
      return;
    }
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  deleteIdeia = async (id) => {
    await api.delete(`/products/${id}`);
    this.loadProducts();
  };

  createIdea = async () => {
    const titleValue = document.querySelector("[name=titulo]").value;
    const descriptionValue = document.querySelector("[name=descricao]").value;
    const urlValue = document.querySelector("[name=url]").value;

    await api.post(`/products`, {
      title: titleValue,
      description: descriptionValue,
      url: urlValue,
    });

    this.loadProducts();
  };

  render() {
    return (
      <div className="main">
        <div className="create-idea">
          <label>Título</label>
          <input type="text" name="titulo" />
          <label>Descrição</label>
          <input type="text" name="descricao" />
          <label>Link para a Ideia</label>
          <input type="url" name="url" />
          <a href="#" onClick={this.createIdea}>
            Enviar
          </a>
        </div>
        <div className="product-list">
          {this.state.products.map((product) => {
            return (
              <article key={product._id}>
                <div className="option-header">
                  <h1>{product.title}</h1>
                  <span onClick={() => this.deleteIdeia(product._id)}>
                    <img
                      src="https://image.flaticon.com/icons/svg/864/864390.svg"
                      alt="close-icon"
                      width="25px"
                    />
                  </span>
                </div>
                <p>{product.description}</p>
                <Link to={`products/${product._id}`}>Acessar</Link>
              </article>
            );
          })}

          <div className="actions">
            <button disabled={this.state.page === 1} onClick={this.prevPage}>
              Anterior
            </button>
            <button
              disabled={this.state.page === this.state.productInfo.pages}
              onClick={this.nextPage}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    );
  }
}
