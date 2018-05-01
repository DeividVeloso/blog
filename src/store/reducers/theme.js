import { CHANGE_THEME } from "store/actions-type";

const INITIAL_STATE = {
  swipe: true,
  type: 'light'
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
          ...state,
          type: action.payload.type,
          swipe: action.payload.swipe
      }

    default:
      return state;
  }
}
