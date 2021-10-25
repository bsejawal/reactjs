import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
class ProductListing extends React.Component {
      state = {
            products: []
      }
      constructor() {
            super();

      }
      componentDidMount() {
            axios.get('https://fakestoreapi.com/products')
                  .then(res => this.setState({
                        products: res.data
                  }))
                  .catch(error => {
                        console.log(error);
                  });
            // console.log("console log start here \n" + this.state.products + "\nconsole log ends here");
      }

      render() {
            console.log(this.state.products)
            return (
                  <div className="ui grid container">
                        <ProductComponent products={this.props.products} />
                        {
                              /* 
                              <h1>Product Listing</h1> <br />
                              {this.props.allProducts.products[0].title} <br />
                              {this.props.allProducts.products[0].id} <br />
                              {this.props.allProducts.products[0].category} <br />
                              */
                        }
                  </div>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            allProducts: state.allProducts
      }
}
export default connect(mapStateToProps)(ProductListing);