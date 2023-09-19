export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_COMPANY_JOBS = "GET_COMPANY_JOBS";
export const GET_COMPANY_JOBS_ERROR = "GET_COMPANY_JOBS_ERROR";
export const GET_COMPANY_JOBS_LOADING = "GET_COMPANY_JOBS_LOADING";

export const addToFavouriteAction = (data) => ({ type: ADD_TO_FAVOURITE, payload: data });
export const removeToFavouriteAction = (id) => ({ type: REMOVE_FROM_FAVOURITE, payload: id });

const companyEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
export const getCompanyJobsAction = (company_name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_COMPANY_JOBS_LOADING, payload: true });
      const response = await fetch(companyEndpoint + company_name);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_COMPANY_JOBS, payload: data });
      } else {
        throw new Error("Sorry, server are down.");
      }
    } catch (error) {
      dispatch({ type: GET_COMPANY_JOBS_ERROR, payload: error.message });
      console.log(error);
    } finally {
      dispatch({ type: GET_COMPANY_JOBS_LOADING, payload: false });
    }
  };
};

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
export const getJobsAction = (input) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_JOBS_LOADING, payload: true });
      const response = await fetch(baseEndpoint + input + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        throw new Error("Sorry, server are down.");
      }
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR, payload: error.message });
      console.log(error);
    } finally {
      dispatch({ type: GET_JOBS_LOADING, payload: false });
    }
  };
};
