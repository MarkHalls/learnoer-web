import React from "react";
import { useLocation } from "react-router-dom";

import BookCard from "../molecules/BookCard";
import Spinner from "../atoms/Spinner";
import queries from "../../queries";

import "./ResultsPage.less";

const SearchResults = () => {
  //TODO ramda????

  const searchTerm = new URLSearchParams(useLocation().search).get("search");

  const { isLoading, data } = queries.useSearchResults(searchTerm);

  return (
    <div className="ResultsPage">
      {isLoading && <Spinner className="ResultsPage-Spinner" />}
      {!isLoading &&
        data?.map((book) => {
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
      {!isLoading && data.length < 1 && (
        <div className="ResultsPage-noResults">
          Your search didn't return any books.
        </div>
      )}
    </div>
  );
};

export default SearchResults;
