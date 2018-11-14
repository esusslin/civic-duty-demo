import { FETCH_REPS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPS:
      return [action.payload.data.officials, ...state];
  }
  return state;
}
