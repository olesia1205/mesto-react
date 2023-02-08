import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =useState(false);

  // useEffect(() => {
  //   console.log("123");
  // }, []);

  return (
    <div  className="container">
      <Header />

      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
        onAddPlace={() => setIsAddPlacePopupOpen(true)}
      />

      <Footer />

      {/* Попап редактирования профиля */}
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        children={
          <>
            <input  className="popup__input popup__input_info_name" type="text" name="profileName" placeholder="Ваше имя" value="" required minLength="2" maxLength="40"/>
            <span  className="popup__input-error" id="profileName-error"/>
            <input  className="popup__input popup__input_info_about" type="text" name="profileAbout" placeholder="Ваш род деятельности" value="" required minLength="2" maxLength="200"/>
            <span  className="popup__input-error" id="profileAbout-error"/>
            <button  className="popup__submit-button" type="submit" name="submit-button" value="Сохранить">Сохранить</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
          </>
        }
        isOpen={isEditProfilePopupOpen}
      />

      {/* Попап добавления и редактирования карточек */}
      <PopupWithForm
        name='card'
        title='Новое место'
        children={
          <>
            <input  className="popup__input popup__input_info_place-name" type="text" name="place-name" placeholder="Название" value="" required minLength="2" maxLength="30"/>
            <span  className="popup__input-error" id="place-name-error"/>
            <input  className="popup__input popup__input_info_place-link" type="url" name="place-link" placeholder="Ссылка на картинку" value="" required/>
            <span  className="popup__input-error" id="place-link-error"/>
            <button  className="popup__submit-button" type="submit" name="submit-button" value="Создать">Создать</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
          </>
        }
        isOpen={isAddPlacePopupOpen}
      />

      {/* Попап обновления аватара */}
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        children={
          <>
            <input  className="popup__input popup__input_avatar-link" type="url" name="avatar-link" placeholder="Ссылка на фото" value="" required/>
            <span  className="popup__input-error" id="avatar-link-error"/>
            <button  className="popup__submit-button" type="submit" name="submit-button" value="Сохранить">Сохранить</button>
            <button  className="popup__close-button" type="button" name="close-button"/>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
      />

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


    </div>
  );
}

export default App;
