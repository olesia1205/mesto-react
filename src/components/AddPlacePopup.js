import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup({isOpen, onClose}) {
  return(
    <PopupWithForm
      name='card'
      title='Новое место'
      buttonText='Создать'
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        <input  className="popup__input popup__input_info_place-name" type="text" name="place-name" placeholder="Название" defaultValue="" required minLength="2" maxLength="30"/>
        <span  className="popup__input-error" id="place-name-error"/>
        <input  className="popup__input popup__input_info_place-link" type="url" name="place-link" placeholder="Ссылка на картинку" defaultValue="" required/>
        <span  className="popup__input-error" id="place-link-error"/>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
