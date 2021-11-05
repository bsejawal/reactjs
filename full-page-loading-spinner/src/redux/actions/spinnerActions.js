import { ActionTypes } from "../constants/action-types";

export const showSpinner = () => {
      return {
            type: ActionTypes.SHOW_SPINNER
      }
}
export const hideSpinner = () => {
      return {
            type: ActionTypes.HIDE_SPINNER
      }
}