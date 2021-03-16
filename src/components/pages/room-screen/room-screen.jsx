import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../header/header';

import ReviewsList from '../../reviews-list/reviews-list';
import FeedbackForm from '../../feedback-form/feedback-form';
import PlaceOther from '../../place-other/place-other';

import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../../loading-screen/loading-screen';

import StarsRating from '../../stars-rating/stars-rating';

import {PropsValidator, APIRouteMethods} from '../../../utils';

import {createAPI} from "../../../services/api";

const api = createAPI();
const fetchNearbyList = (id) => {
  return api.get(APIRouteMethods.getHotelNearby(id));
};

const fetchCommentsList = (id) => {
  return api.get(APIRouteMethods.getHotelComments(id));
};

const RoomScreen = ({hotels}) => {
  const id = +useParams().id;

  const [isLoading, setLoading] = useState(true);
  const [nearby, setNearby] = useState();
  const [comments, setComments] = useState(null);
  const currentOffer = hotels.filter((offer) => offer.id === id)[0];

  useEffect(() => {
    fetchNearbyList(id).then((data) => {
      setNearby(data.data);
      setLoading(false);
    });

    fetchCommentsList(id).then((data) => {
      setComments(data.data);
    });
  }, [currentOffer]);

  if (!currentOffer) {
    return <NotFoundScreen/>;
  }

  if (isLoading) {
    return <LoadingScreen/>;
  }

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0, 6).map((img, idx) =>
                  <div className="property__image-wrapper" key={idx}>
                    <img className="property__image" src={img} alt="Photo studio" />
                  </div>
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.is_premium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className={`${currentOffer.is_favorite ? `property__bookmark-button--active` : ``} property__bookmark-button button`} type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <StarsRating rating={currentOffer.rating} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type ? currentOffer.type[0].toUpperCase() + currentOffer.type.slice(1) : null}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.max_adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((goods, idx) =>
                      <li className="property__inside-item" key={idx}>
                        {goods}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`${currentOffer.host.is_pro ? `property__avatar-wrapper--pro` : ``} property__avatar-wrapper user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatar_url} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {comments ? <ReviewsList comments={comments} /> : `` }
                  <FeedbackForm />
                </section>
              </div>
            </div>
            <section className="property__map map" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearby.slice(0, 3).map((hotel) =>
                  <PlaceOther
                    key={hotel.id}
                    id={hotel.id}
                    title={hotel.title}
                    image={hotel.preview_image}
                    price={hotel.price}
                    rating={hotel.rating}
                    type={hotel.type}
                    isFavorite={hotel.is_favorite}
                    isPremium={hotel.is_premium}
                  />)}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

RoomScreen.propTypes = {
  hotels: PropsValidator.HOTELS
};

const mapStateToProps = (state) => {
  return {
    hotels: state.cities.offers
  };
};

export default connect(mapStateToProps, null)(RoomScreen);
