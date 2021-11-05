import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import { spinnerReducer } from './spinnerReducer';

const reducers = combineReducers({
      allProducts: productReducer,
      product: selectedProductReducer,
      spinner: spinnerReducer,
});
export default reducers;