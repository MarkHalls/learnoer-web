import React from "react";
import { useSelector } from "react-redux";

import BookCard from "../molecules/BookCard";

const SearchResults = () => {
  //TODO ramda????
  const books = useSelector((state) => state.books);
  const loading = useSelector((state) => state.loading);

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading &&
        books &&
        books.map((book) => {
          const authors = book.authors
            ? book.authors.map((author) => author.name).join(", ")
            : book.by_statement;

          const publishers = book.publishers
            .map((publisher) => publisher.name)
            .join(", ");

          return (
            <BookCard
              title={book.title}
              author={authors}
              publisher={publishers}
              cover={book.cover && book.cover.medium}
              reviewCount="0"
              url={book.url}
              key={book.key}
              bookKey={book.key}
            />
          );
        })}
    </>
  );
};

export default SearchResults;
