import React from "react";
import { useSelector } from "react-redux";

import BookCard from "../molecules/BookCard";
import Spinner from "../atoms/Spinner";

import "./ResultsPage.less";

const SearchResults = () => {
  //TODO ramda????
  const books = useSelector((state) => state.books);
  const loading = useSelector((state) => state.loading);

  return (
    <div className="ResultsPage">
      {loading && <Spinner className="ResultsPage-Spinner" />}
      {!loading &&
        books &&
        books.map((book) => {
          const authors = book.authors
            ? book.authors.map((author) => author.name).join(", ")
            : book.by_statement;

          const publishers = book.publishers
            ? book.publishers.map((publisher) => publisher.name).join(", ")
            : "";

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
    </div>
  );
};

export default SearchResults;
