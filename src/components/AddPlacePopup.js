import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, ...props}) {
  const placeNameRef = useRef();
  const placeLinkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name: placeNameRef.current.value,
      link: placeLinkRef.current.value
    });
  }

  return(
    <PopupWithForm
      name='card'
      title='Новое место'
      buttonText='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input className="popup__input popup__input_info_place-name" ref={placeNameRef} type="text" name="place-name" placeholder="Название" defaultValue="" required minLength="2" maxLength="30"/>
        <span className="popup__input-error" id="place-name-error"/>
        <input className="popup__input popup__input_info_place-link" ref={placeLinkRef} type="url" name="place-link" placeholder="Ссылка на картинку" defaultValue="" required/>
        <span className="popup__input-error" id="place-link-error"/>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
