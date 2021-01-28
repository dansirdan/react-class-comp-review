import { SET_LOADING } from "../actions/LoadingActions";

const initialState: boolean = false;

export const loadingReducer = (
  state: boolean = initialState,
  action: { type: string; payload: boolean }
): boolean => {
  if (action.type === SET_LOADING) {
    return action.payload as boolean;
  } else {
    return state;
  }
};
