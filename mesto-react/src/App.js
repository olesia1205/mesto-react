import React from 'react';
import headerLogo from './images/header-logo.svg';

function App() {
  return (
    <div  className="container">
      
      {/* Шапка сайта */}
      <header  className="header">
        <img  className="header__logo" src={headerLogo} alt="Логотип-Место Россия"/>
      </header>

      {/* основное содержимое страницы */}
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

      {/* Подвал сайта */}
      <footer  className="footer">
        <p  className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      {/* Попап редактирования профиля */}
      <div  className="popup popup_type_profile">
        <div  className="popup__container">
          <h2  className="popup__title">Редактировать профиль</h2>
          <form  className="popup__form popup__form_type_profile" name="popup-form-profile" id="popup-form-profile" noValidate>
            <>
            <input  className="popup__input popup__input_info_name" type="text" name="profileName" placeholder="Ваше имя" value="" required minLength="2" maxLength="40"/>
            <span  className="popup__input-error" id="profileName-error"/>
            <input  className="popup__input popup__input_info_about" type="text" name="profileAbout" placeholder="Ваш род деятельности" value="" required minLength="2" maxLength="200"/>
            <span  className="popup__input-error" id="profileAbout-error"/>
            <button  className="popup__submit-button" type="submit" name="submit-button" value="Сохранить">Сохранить</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
            </>            
          </form>
        </div>
      </div>     

      {/* Попап добавления и редактирования карточек */}
      <div  className="popup popup_type_card">
        <div  className="popup__container">
          <h2  className="popup__title">Новое место</h2>
          <form  className="popup__form popup__form_type_card" name="popup-form-card" id="popup-form-card" noValidate>
            <>
            <input  className="popup__input popup__input_info_place-name" type="text" name="place-name" placeholder="Название" value="" required minLength="2" maxLength="30"/>
            <span  className="popup__input-error" id="place-name-error"/>
            <input  className="popup__input popup__input_info_place-link" type="url" name="place-link" placeholder="Ссылка на картинку" value="" required/>
            <span  className="popup__input-error" id="place-link-error"/>
            <button  className="popup__submit-button" type="submit" name="submit-button" value="Создать">Создать</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
            </>            
          </form>
        </div>
      </div>

      {/* Попап с картинкой */}
      <div  className="popup popup_type_image">
        <div  className="popup__container-image">
          <figure  className="popup__image-figure">
            <img  className="popup__image" alt="Описание места" src="#"/>
            <figcaption  className="popup__image-subtitle"/>
          </figure>
          <button  className="popup__close-button" type="button" name="close-button"/>
        </div>
      </div>

      {/* Попап удаления карточки */}
      <div  className="popup popup_type_confirm">
        <div  className="popup__container">
          <form  className="popup__form popup__form_type_confirm" name="popup-form-confirm" id="popup-form-confirm" noValidate>
            <>
            <h2  className="popup__title">Вы уверены?</h2>
            <button  className="popup__submit-button popup__button-confirm" type="submit" name="submit-button" id ="submitButton" value="Да">Да</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
            </>            
          </form>
        </div>
      </div>

      {/* Попап обновления аватара */}
      <div  className="popup popup_type_avatar">
        <div  className="popup__container">
          <h2  className="popup__title">Обновить аватар</h2>
          <form  className="popup__form popup__form_type_avatar" name="popup-form-avatar" id="popup-form-avatar" noValidate>
            <>
            <input  className="popup__input popup__input_avatar-link" type="url" name="avatar-link" placeholder="Ссылка на фото" value="" required/>
            <span  className="popup__input-error" id="avatar-link-error"/>
            <button  className="popup__submit-button" type="submit" name="submit-button" value="Сохранить">Сохранить</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
            </>            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
