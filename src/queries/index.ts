import ky from "ky";
import { useQuery } from "react-query";

const searchApi = process.env.search_api
  ? process.env.search_api
  : "http://localhost:3000/api/search";

const useSearchResults = (searchTerm: string) => {
  return useQuery(["searchBooks", searchTerm], async () => {
    const json = await ky.get(`${searchApi}/${searchTerm}`).json<Book[]>();
    return json;
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
    const book = await ky.get(`${searchApi}/olid/${olid}`).json<Book>();

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
