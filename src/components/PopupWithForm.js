import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose, buttonText, onSubmit, onOverlayClick, isDisabled }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`} onClick={onOverlayClick} >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form_type_${name}`} name={`popup-form-${name}`} id={`popup-form-${name}`} onSubmit={onSubmit} noValidate>
          <>
            {children}
            <button
              className={`popup__submit-button ${isDisabled ? 'popup__submit-button_disabled' : ''}`}
              type="submit"
              name="submit-button"
              value={buttonText}
              disabled={isDisabled}
            >
              {buttonText}
            </button>
            <button className="popup__close-button" type="button" name="close-button" onClick={onClose} />
          </>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
