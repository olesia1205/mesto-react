import React from 'react';

function Main() {
  return(    
    <main  className="content">
      {/* секция с профилем */}
      <section  className="profile" aria-label="Профиль">
        <div  className="profile__card">
          <a  className="profile__avatar-cover">
            <img  className="profile__avatar" src="<%=require('./images/profile__avatar.png')%>" alt="Аватарка"/>
          </a>
          <div  className="profile__info">
            <div  className="profile__info-edit">
              <h1  className="profile__info-title">Жак-Ив Кусто</h1>
              <button  className="profile__info-edit-button" name="info-edit-button" type="button" aria-label="Редактировать профиль"></button>
            </div>
            <p  className="profile__info-subtitle">Исследователь океана</p>
          </div>
        </div>
        <button  className="profile__add-button" name="add-button" type="button" aria-label="Добавить"></button>
      </section>

      {/* секция с карточками */}
      <section  className="places" aria-label="Карточки о местах">
        <template  className="place__template">
          <article  className="place">
            <img  className="place__image" src="#" alt="Описание карточки"/>
            <div  className="place__info">
              <h2  className="place__title"></h2>
              <div  className="place__like-unit">
                <button  className="place__like-button" name="like-button" type="button"></button>
                <h3  className="place__like-number"></h3>
              </div>
            </div>
            <button  className="place__delete-button" name="delete-button" type="button"></button>
          </article>
        </template>
      </section>
    </main>
  );
}
  
  export default Main;