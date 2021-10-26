// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//Action Creator
export const incrementCount = (index) => {
      return {
            type: INCREMENT,
            payload: { index }
      }
}

export const decrementCount = (index) => {
      return {
            type: DECREMENT,
            payload: { index }
      }
}