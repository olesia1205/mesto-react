import React from 'react';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, userName, userDescription, userAvatar, cards, onCardClick, onImagePopup}) {
  return(
    <main  className="content">
      {/* секция с профилем */}
      <section  className="profile" aria-label="Профиль">
        <div  className="profile__card">
          <a className="profile__avatar-cover" onClick={onEditAvatar}>
            <img  className="profile__avatar" src={userAvatar} alt="Аватарка"/>
          </a>
          <div  className="profile__info">
            <div  className="profile__info-edit">
              <h1  className="profile__info-title">{userName}</h1>
              <button  className="profile__info-edit-button" name="info-edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile} />
            </div>
            <p  className="profile__info-subtitle">{userDescription}</p>
          </div>
        </div>
        <button  className="profile__add-button" name="add-button" type="button" aria-label="Добавить" onClick={onAddPlace} />
      </section>

      {/* секция с карточками */}
      <section  className="places" aria-label="Карточки о местах">
        {
          cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onImagePopup={onImagePopup}
            />
          )
        )}
      </section>
    </main>
  );
}

  export default Main;
