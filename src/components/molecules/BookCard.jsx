import React from "react";
import { Link } from "react-router-dom";

import DefaultCover from "../atoms/DefaultCover";
import OutSideLinkIcon from "../atoms/OutsideLinkIcon";

import "./BookCard.less";

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
    <div className="book">
      <div className="book-card">
        <Link to={bookKey} className="book-card-cover">
          {cover ? (
            <img src={cover} alt={`${title} cover image`} />
          ) : (
            <DefaultCover />
          )}
        </Link>
        <Link to={bookKey} className="book-card-title">
          {title}
        </Link>
        <p>
          by <span className="book-card-author">{author}</span>
        </p>
        <p>{`published by ${publisher}`}</p>
        <Link to={`${bookKey}`} className="book-card-reviewCount">
          {reviewCount} reviews
        </Link>
      </div>
      <a href={url} className="book-read button">
        <span>Read now </span>
        <OutSideLinkIcon />
      </a>
      <Link to={`${bookKey}/#compose`} className="book-review button">
        Write a review
      </Link>
    </div>
  );
};

export default BookCard;
