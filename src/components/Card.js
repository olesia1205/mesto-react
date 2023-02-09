import React from 'react';

function Card(card) {
  return(
    <article className="place">
      <img className="place__image" src={card.link} alt={card.name} />
      <div className="place__info">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-unit">
          <button className="place__like-button" name="like-button" type="button"></button>
          <h3 className="place__like-number">{card.likes.length}</h3>
        </div>
      </div>
      <button className="place__delete-button" name="delete-button" type="button"></button>
    </article>
  );
}

export default Card;
