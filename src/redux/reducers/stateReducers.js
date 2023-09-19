import { GET_COMPANY_JOBS_ERROR, GET_COMPANY_JOBS_LOADING, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions";

const initialState = {
  error: {
    content: "",
  },
  loading: {
    content: false,
  },
};

const stateReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_JOBS_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };

    case GET_COMPANY_JOBS_LOADING:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default stateReducers;
