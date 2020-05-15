import React from "react";

import DefaultCover from "../atoms/DefaultCover";

const BookCard = ({ title, author, publisher, cover, reviewCount }) => {
  return (
    <>
      {cover ? (
        <img src={cover} alt={`${title} cover image`} className="cover" />
      ) : (
        <DefaultCover />
      )}
      <h2 className="title">{title}</h2>
      <p>
        by <span className="author">{author}</span>
      </p>
      <p>published by {publisher}</p>
      <p className="reviewCount">{reviewCount} reviews</p>
    </>
  );
};

export default BookCard;
