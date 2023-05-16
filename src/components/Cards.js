function Card(props) {

  function handleClickCard () {
    props.onCardClick(props.card)
  }
	return (
		<>
			<article className="element">
          <img 
            onClick={handleClickCard}
            src={props.card.link} 
            className="element__image"
            alt="foto del valle de yosemite"
          />
          <div className="element__background">
            <div className="element__info">
              <h3 className="element__name">{props.card.name}</h3>
              <div className="element__div">
                <button className="element__heart"></button>
                <div className="element__contador">{props.card.likes.length}</div>
              </div>
              <button className="element__trash" onClick={props.onConfirmClick}></button>
            </div>
          </div>
        </article>
		</>
	)
}

export default Card;