import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import actions from "../../actions";

import BookCard from "../molecules/BookCard";

import "./BookPage.less";

const BookPage = () => {
  const { olid } = useParams();
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const book = useSelector((state) =>
    state.books.filter((book) => book.key === `/books/${olid}`)
  );

  useEffect(() => {
    if (book.length === 0) {
      dispatch(actions.getBookByOlid(olid));
    }
  }, []);

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading &&
        book &&
        book.map((book) => {
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

export default BookPage;
