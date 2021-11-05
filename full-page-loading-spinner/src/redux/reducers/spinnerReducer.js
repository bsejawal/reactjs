import { ActionTypes } from "../constants/action-types"
// const initialState = {
//       isLoading: true,
// };
export const spinnerReducer = (state = false, action) => {
      switch (action.type) {
            case ActionTypes.SHOW_SPINNER:
                  return true;
            case ActionTypes.HIDE_SPINNER:
                  return false
            default:
                  return false;
      }

};

// export const spinnerReducer = (state = initialState, action) => {
//       switch (action.type) {
//             case ActionTypes.SHOW_SPINNER:
//                   return { ...state, loading: true };
//             case ActionTypes.HIDE_SPINNER:
//                   return { ...state, loading: false }
//             default:
//                   return state;
//       }

// };