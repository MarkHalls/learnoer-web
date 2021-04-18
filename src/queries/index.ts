import axios from "axios";
import { useQuery } from "react-query";

const searchApi = process.env.search_api
  ? process.env.search_api
  : "http://localhost:3000/api/search";

const useSearchResults = (searchTerm: string) => {
  return useQuery(["searchBooks", searchTerm], async () => {
    const res = await axios.get<Book[]>(`${searchApi}/${searchTerm}`);
    return res.data;
  });
};

type Book = {
  title: string;
  authors?: { name: string }[];
  by_statement: string;
  publishers: { name: string }[];
  cover?: { medium: string };
  url: string;
  key: string;
};

const useBookByOlid = (olid: string) => {
  return useQuery(["getBookByOlid", olid], async () => {
    const res = await axios.get<Book[]>(`${searchApi}/olid/${olid}`);

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
