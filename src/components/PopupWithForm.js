import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <div  className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
    <div  className="popup__container">
      <h2  className="popup__title">{title}</h2>
      <form  className={`popup__form popup__form_type_${name}`} name={`popup-form-${name}`} id={`popup-form-${name}`} noValidate>
        <>
        {children}
        <button  className="popup__close-button" type="button" name="close-button" onClick={onClose}/>
        </>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;
