import { INCREMENT, DECREMENT, NEW_COUNTER } from '../actions/';

const counterReducer = (state = [], action) => {

      switch (action.type) {
            case INCREMENT:
                  console.log("at increment");
                  return state.map((counter, i) => {
                        if (action.payload.index === i) {
                              counter.value += 1;
                        }
                        return counter;
                  });
            case DECREMENT:
                  console.log("at decrement");
                  return state.map((counter, i) => {
                        if (action.payload.index === i) {
                              return counter.value -= 1;
                        }
                        return counter;
                  });
            case NEW_COUNTER:
                  console.log("at new counter");
                  return [...state, { name: action.payload.name, value: 0 }]
            default:
                  console.log("at default");
                  return state;
      }
}
export default counterReducer;