import { GET_COMPANY_JOBS, GET_JOBS } from "../actions";

const initialState = {
  company: {
    content: [],
  },
  searched: {
    content: [],
  },
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_JOBS:
      return {
        ...state,
        company: {
          content: action.payload,
        },
      };

    case GET_JOBS:
      return {
        ...state,
        searched: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default fetchReducer;
