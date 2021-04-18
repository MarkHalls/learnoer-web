import React from "react";
import { useParams } from "react-router-dom";

import queries from "../../queries";

import BookCard from "../molecules/BookCard";

import "./BookPage.less";

const BookPage = () => {
  const { olid } = useParams();

  const { isLoading, data } = queries.useBookByOlid(olid);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <BookCard
      title={data.title}
      author={data.authors}
      publisher={data.publishers}
      cover={data.cover}
      reviewCount="0"
      url={data.url}
      bookKey={data.key}
    />
  );
};

export default BookPage;
