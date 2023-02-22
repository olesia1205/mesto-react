import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onImagePopup}) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`place__like-button ${isLiked && 'place__like-button_status_active'}`);

  return(
    <article className="place">
      <img className="place__image" src={card.link} alt={card.name}
        onClick={() => {
          onCardClick(card)
          onImagePopup()
        }}
      />
      <div className="place__info">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-unit">
          <button className={cardLikeButtonClassName} name="like-button" type="button"></button>
          <h3 className="place__like-number">{card.likes.length}</h3>
        </div>
      </div>
      {/* Далее в разметке используем переменную для условного рендеринга */}
      {isOwn && <button className="place__delete-button" name="delete-button" type="button"></button>}
    </article>
  );
}

export default Card;
