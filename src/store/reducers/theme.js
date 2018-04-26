import { CHANGE_THEME } from "store/actions-type";

const INITIAL_STATE = {
  type: "light"
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
          ...state,
          type: action.payload
      }

    default:
      return state;
  }
}
