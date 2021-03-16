import React from 'react';
import PropTypes from 'prop-types';

import StarsRating from '../stars-rating/stars-rating';

const Months = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`,
};

const getDateComment = (date) => {
  const formatDate = new Date(date);
  return `${Months[formatDate.getUTCMonth() + 1]} ${formatDate.getUTCFullYear()}`;
};

const ReviewsList = ({comments}) => {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) =>
          <li className="reviews__item" key={comment.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatar_url} width={54} height={54} alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <StarsRating rating={comment.rating} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{getDateComment(comment.date)}</time>
            </div>
          </li>
        )}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default ReviewsList;
