import React, { FC } from "react";
import { Link } from "react-router-dom";

import Cover from "../atoms/Cover";
import ReadButton from "../atoms/ReadButton";

import "./BookCard.less";

type Props = {
  title: string;
  author: string;
  publisher: string;
  cover?: string;
  reviewCount: string;
  url: string;
  bookKey: string;
};

const BookCard: FC<Props> = ({
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
        <Cover
          bookKey={bookKey}
          title={title}
          cover={cover}
          className="book-card-cover"
        />
        <Link to={bookKey} className="book-card-title">
          {title}
        </Link>
        <p>
          by <span className="book-card-author">{author}</span>
        </p>
        <p>{`published by ${publisher}`}</p>
        <Link to={bookKey} className="book-card-reviewCount">
          {reviewCount} reviews
        </Link>
      </div>
      <ReadButton url={url} className={"book-read"} />
      <Link to={`${bookKey}/#compose`} className="book-review button">
        Write a review
      </Link>
    </div>
  );
};

export default BookCard;
