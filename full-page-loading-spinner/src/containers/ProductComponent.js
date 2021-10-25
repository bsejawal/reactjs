import React from 'react';
import { connect } from 'react-redux'
class ProductComponent extends React.Component {

      render() {
            // const products = this.state.allProducts.products;
            // console.log(this.props)
            console.log(this.props.products)

            return (
                  <div className="four column wide">
                        <div className="ui link cards">
                              {this.props.products.map(product => {
                                    return (
                                          <div className="card">
                                                <div className="image"></div>
                                                <div className="content">
                                                      <div className="header">
                                                            {product.title}
                                                      </div>
                                                </div>

                                          </div>
                                    )
                              })}

                        </div>
                  </div>
            )
      }
}
const mapStateToProps = (state) => {
      return {
            products: state.allProducts.products
      }
}
export default connect(mapStateToProps)(ProductComponent);

// const mapStateToProps = (state) => {
//       return {
//             allProducts: state.allProducts
//       }
// }
// export default connect(mapStateToProps)(ProductListing);