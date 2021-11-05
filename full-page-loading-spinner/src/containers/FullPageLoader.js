import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpinnerGif from '../assets/loading-spinner-transparent.gif'

class FullPageLoader extends Component {

      render() {
            const spinner = this.props.spinner;
            console.log("in rendering at fullpageloader:", spinner)
            if (spinner && spinner === true) {
                  return (

                        <div className="loader-container">
                              <div className="loader">
                                    <img src={SpinnerGif} alt="loading" />
                              </div>
                        </div>
                  )
            } else {
                  return <></>;
            }

      }
}

const mapStateToProps = (state) => {
      return {
            spinner: state.spinner
      }
}

export default connect(mapStateToProps)(FullPageLoader);