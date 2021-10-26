import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCounter extends Component {

      render() {
            return (
                  <div>
                        <p>
                              <input
                                    type="text"
                                    placeholder="Name"
                              />
                        </p>
                        <p>
                              <button>Create</button>
                        </p>


                  </div>
            )
      }

}
export default CreateCounter;