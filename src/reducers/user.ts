import { User } from "../interfaces/user";

interface UserAuth {
  isLoggedIn: boolean;
  user: User | null;
}

// initialState
export const initialState: UserAuth = {
  isLoggedIn: false,
  user: null,
};

// Actions
const LOG_IN = "LOG_IN" as const;
const LOG_OUT = "LOG_OUT" as const;

export const loginAction = {
  type: LOG_IN,
  data: {},
};

export const logoutAction = {
  type: LOG_OUT,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
