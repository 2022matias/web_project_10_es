import React from "react";
import Pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";
import profileAddButton from "../images/add-button.png";
import Card from "./Cards";

  
function Main(props) {
	return(
		<>
			<section className="profile">
        <div className="profile__box" onClick={props.onEditAvatarClick}>
          <img src={props.userAvatar} className="profile__avatar" alt="imagen de Jacques Cousteau"/>
          <img src={Pencil} className="profile__pencil visibility" alt="lapiz de edición de foto" />
        </div>
        <div className="profile__info">
          <h2 className="profile__jacques">{props.userName}</h2>
          <img
            src={editButton}
            className="profile__edit-button" onClick={props.onEditProfileClick}
            alt="boton para editar el perfil"
          />
          <p className="profile__explorer">{props.userDescription}</p>
        </div>
        <img
          src={profileAddButton}
          className="profile__add-button" onClick={props.onAddPlaceClick}
          alt="boton para agregar imagenes"
        />
      </section>

      

      <section className="elements">
        {props.cards.map((card) => {
          return (
            <Card key={card._id} 
            card={card} 
            onConfirmClick={props.onConfirmClick} 
            onCardClick={props.onCardClick}/>
          )
        })}
      </section>
		</>
	);
}

export default Main;