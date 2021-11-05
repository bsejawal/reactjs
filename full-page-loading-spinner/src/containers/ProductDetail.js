import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { showSpinner, hideSpinner } from '../redux/actions/spinnerActions';

class ProductDetail extends React.Component {

      fetchProductDetail(productId) {
            this.props.showSpinner();
            console.log("fetchProduct spinner value ", this.props.spinner);
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                  .then((res) => {
                        this.props.selectedProduct(res.data);
                        this.props.hideSpinner();
                  })
                  .catch((error) => {
                        this.props.hideSpinner();
                        console.log(error);
                  });
      }

      componentDidMount() {
            const productId = this.props.match.params.productId;
            if (productId && productId !== "") {
                  this.fetchProductDetail(productId);
            }
            return this.props.removeSelectedProduct();

      }
      render() {
            const product = this.props.product;
            const { image, title, price, category, description } = product

            return (
                  <div className="ui grid container">
                        {Object.keys(product).length === 0 ? (
                              <div>...Loading</div>
                        ) : (
                              <div className="ui placeholder segment">
                                    <div className="ui two column stackable center aligned grid">
                                          <div className="ui vertical divider">AND</div>
                                          <div className="middle aligned row">
                                                <div className="column lp">
                                                      <img className="ui fluid image" src={image} alt={title} />
                                                </div>
                                                <div className="column rp">
                                                      <h1>{title}</h1>
                                                      <h2>
                                                            <a className="ui teal tag label" href>${price}</a>
                                                      </h2>
                                                      <h3 className="ui brown block header">{category}</h3>
                                                      <p>{description}</p>
                                                      <div className="ui vertical animated button" tabIndex="0">
                                                            <div className="hidden content">
                                                                  <i className="shop icon"></i>
                                                            </div>
                                                            <div className="visible content">Add to Cart</div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>
            )
      }
}

const mapStateToDispatch = () => {
      return {
            selectedProduct,
            removeSelectedProduct,
            showSpinner,
            hideSpinner

      }
}
const mapStateToProps = (state) => {
      return {
            product: state.product,
            spinner: state.spinner
      }
}
export default connect(mapStateToProps, mapStateToDispatch())(ProductDetail);