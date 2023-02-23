import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/Api';
import { CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  useEffect(() => {
    api.getAllNeededData()
      .then((result) => {
        const [dataForUserInfo, dataForInitialCards] = result;
        // console.log(result);
        setUserData(dataForUserInfo);
        setCards(dataForInitialCards);
      })
      .catch(err => alert(err))
  }, []);

  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        // console.log(userInfo);
        setCurrentUser(userInfo);
      })
      .catch(err => alert(err))
  }, []);

  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.putLike(card._id, !isLiked)
      .then((newCard) => {
        setCards(state => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => alert(err))
  }

  function handleCardDislike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.deleteLike(card._id, isLiked)
      .then((newCard) => {
        setCards(state => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => alert(err))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter((c) => c._id !== card._id));
      })
      .catch(err => alert(err))
  }

  function handleUpdateUser(newUserInfo) {
    api.patchUserInfo(newUserInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(err => alert(err))
  }

  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch(err => alert(err))
  }

  return (
    <div  className="container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

        <Main
          onEditProfile={() => setIsEditProfilePopupOpen(true)}
          onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
          onAddPlace={() => setIsAddPlacePopupOpen(true)}
          onImagePopup={() => setIsImagePopupOpen(true)}
          userName={userData.name}
          userDescription={userData.about}
          userAvatar={userData.avatar}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDislike={handleCardDislike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        {/* Попап добавления и редактирования карточек */}
        <PopupWithForm
          name='card'
          title='Новое место'
          buttonText='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <input  className="popup__input popup__input_info_place-name" type="text" name="place-name" placeholder="Название" defaultValue="" required minLength="2" maxLength="30"/>
            <span  className="popup__input-error" id="place-name-error"/>
            <input  className="popup__input popup__input_info_place-link" type="url" name="place-link" placeholder="Ссылка на картинку" defaultValue="" required/>
            <span  className="popup__input-error" id="place-link-error"/>
          </>
        </PopupWithForm>

        {/* Попап удаления карточки */}
        <PopupWithForm
          name='confirm'
          title='Вы уверены?'
          buttonText='Да'
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
