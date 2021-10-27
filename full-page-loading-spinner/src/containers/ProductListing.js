import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions'
class ProductListing extends React.Component {
      constructor(props) {
            super(props);
            console.log("Hello World from React!!!")
            // this.fetchProducts();

      }
      fetchProducts() {
            console.log("fetchProduct method is called !!!")
            axios
                  .get("https://fakestoreapi.com/products")
                  .then(res => {
                        console.log(res.data);
                        this.props.setProducts(res.data)
                  })
                  .catch((e) => {
                        console.log(e);
                  })
      }

      componentDidMount() {
            console.log("componentDidMount is triggered !!!!")
            this.fetchProducts();

      }

      render() {
            return (
                  <div className="ui grid container">
                        <ProductComponent />
                  </div>
            )
      }
}

const mapStateToDispatch = () => {
      return {
            setProducts
      }
}
export default connect(undefined, mapStateToDispatch())(ProductListing);