import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions'
import { showSpinner, hideSpinner } from '../redux/actions/spinnerActions';
class ProductListing extends React.Component {

      fetchProducts() {
            // console.log("fetchProduct method is called !!!")
            // this.props.dispatch(showLoader());
            axios
                  .get("https://fakestoreapi.com/products")
                  .then(res => {
                        this.props.showSpinner();
                        this.props.setProducts(res.data)
                        this.props.hideSpinner();

                  })
                  .catch((e) => {
                        this.props.hideSpinner();
                        console.log(e);
                  });
            setTimeout(() => {
                  console.log("will run after 5 second");
            }, 5000)
      }

      componentDidMount() {
            // this.props.showSpinner();
            this.fetchProducts();
            // this.props.hideSpinner();

      }

      render() {
            console.log("af product listing : ", this.props.spinner);
            return (
                  <div className="ui grid container">
                        <ProductComponent />
                  </div>
            )
      }
}

const mapStateToDispatch = () => {
      return {
            setProducts,
            showSpinner,
            hideSpinner
      }
}
const mapStateToProps = (state) => {
      return {
            spinner: state.spinner
      }

}
export default connect(mapStateToProps, mapStateToDispatch())(ProductListing);