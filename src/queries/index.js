import axios from "axios";
import { useQuery } from "react-query";

const searchApi = process.env.search_api
  ? process.env.search_api
  : "http://localhost:3000/api/search";

const useSearchResults = (searchTerm) => {
  return useQuery(["searchBooks", searchTerm], async () => {
    const res = await axios.get(`${searchApi}/${searchTerm}`);
    return res.data;
  });
};

const useBookByOlid = (olid) => {
  return useQuery(["getBookByOlid", olid], async () => {
    const res = await axios.get(`${searchApi}/olid/${olid}`);

    const book = res.data[0];

    if (!book) {
      return null;
    }

    const authors = book.authors
      ? book.authors.map((author) => author.name).join(", ")
      : book.by_statement;

    const publishers = book.publishers
      .map((publisher) => publisher.name)
      .join(", ");

    return {
      ...book,
      authors,
      publishers,
      cover: book.cover?.medium,
    };
  });
};

export default { useSearchResults, useBookByOlid };
