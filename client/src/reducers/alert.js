import { SET_ALERT, REMOVE_ALERT } from "../action/types.js";

const initialState = {
  snack: false,
  value: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      state.snack = true;
      state.value.push(payload);
      return { ...state };
    case REMOVE_ALERT:
      state.value = state.value.filter((alert) => alert.id !== payload);
      if (state.value.length == 0) {
        state.snack = false;
      }
      return { ...state };
    default:
      return state;
  }
};
