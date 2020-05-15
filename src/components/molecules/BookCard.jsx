import React from "react";
import { Link } from "react-router-dom";

import DefaultCover from "../atoms/DefaultCover";

const BookCard = ({
  title,
  author,
  publisher,
  cover,
  reviewCount,
  url,
  bookKey,
}) => {
  return (
    <div className="card">
      <div className="card-book">
        {cover ? (
          <img
            src={cover}
            alt={`${title} cover image`}
            className="book-cover"
          />
        ) : (
          <DefaultCover className="book-cover" />
        )}
        <h2 className="book-title">{title}</h2>
        <p>
          by <span className="book-author">{author}</span>
        </p>
        <p>published by {publisher}</p>
        <Link to={`${bookKey}`} className="book-reviewCount">
          {reviewCount} reviews
        </Link>
      </div>
      <a href={url} className="card-read button">
        Read now
      </a>
      <Link to={`${bookKey}/#compose`} className="card-review button">
        Write a review
      </Link>
    </div>
  );
};

export default BookCard;
