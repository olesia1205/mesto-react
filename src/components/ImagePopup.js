import React from 'react';

function ImagePopup() {
  return (
    <div  className="popup popup_type_image">
      <div  className="popup__container-image">
        <figure  className="popup__image-figure">
          <img  className="popup__image" alt="Описание места" src="#"/>
          <figcaption  className="popup__image-subtitle"/>
        </figure>
        <button  className="popup__close-button" type="button" name="close-button"/>
      </div>
    </div>
  );
}

export default ImagePopup;
