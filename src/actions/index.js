import axios from "axios";

const searchApi = process.env.search_api
  ? process.env.search_api
  : "http://localhost:3000/api/search";

export const LOADING = "LOADING";
export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

const loading = () => ({ type: LOADING });

const setSearchTerm = (searchTerm) => (dispatch) => {
  return dispatch({ type: SET_SEARCH_TERM, payload: { searchTerm } });
};

const searchBooks = (searchTerm) => (dispatch) => {
  dispatch(loading());
  dispatch(setSearchTerm(searchTerm));
  return axios.get(`${searchApi}/${searchTerm}`).then((res) => {
    dispatch({ type: SEARCH_BOOKS, payload: { books: res.data } });
  });
};

const getBookByOlid = (olid) => (dispatch) => {
  dispatch(loading());
  dispatch(setSearchTerm(""));
  return axios.get(`${searchApi}/olid/${olid}`).then((res) => {
    dispatch({
      type: SEARCH_BOOKS,
      payload: { books: res.data },
    });
  });
};

export default { searchBooks, getBookByOlid, setSearchTerm };
