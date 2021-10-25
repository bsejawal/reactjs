// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//Action Creator
export const incrementCount = () => {
      return {
            type: INCREMENT
      }
}

export const decrementCount = () => {
      return {
            type: DECREMENT
      }
}