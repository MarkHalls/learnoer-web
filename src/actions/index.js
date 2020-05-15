import axios from "axios";

const searchApi = process.env.search_api
  ? process.env.search_api
  : "http://localhost:3000/api/search";

export const LOADING = "LOADING";
export const SEARCH_BOOKS = "SEARCH_BOOKS";

const loading = () => ({ type: LOADING });

const searchBooks = (searchTerm) => (dispatch) => {
  dispatch(loading());
  return axios
    .get(`${searchApi}/${searchTerm}`)
    .then((res) =>
      dispatch({ type: SEARCH_BOOKS, payload: { books: res.data } })
    );
};

const getBookByOlid = (olid) => (dispatch) => {
  dispatch(loading());
  return axios
    .get(`${searchApi}/olid/${olid}`)
    .then((res) =>
      dispatch({ type: SEARCH_BOOKS, payload: { books: res.data } })
    );
};

export default { searchBooks, getBookByOlid };
